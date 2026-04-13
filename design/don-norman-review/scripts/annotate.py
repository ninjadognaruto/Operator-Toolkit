#!/usr/bin/env python3
"""
annotate.py — Draw annotated callouts (box + number badge + label) on a screenshot or image frame.

Usage:
    python annotate.py <image_path> <annotations_json_or_file> <output_path>

annotations_json structure:
[
  {
    "number": 1,
    "x1": 400, "y1": 300,   # top-left of bounding box
    "x2": 750, "y2": 420,   # bottom-right of bounding box
    "severity": "red",       # "red" (critical) | "yellow" (moderate) | "green" (ok)
    "label": "Missing loading state"
  }
]

Output: annotated PNG saved to output_path.
"""

import sys
import json
import os
from PIL import Image, ImageDraw, ImageFont

SEVERITY_COLORS = {
    "red":    {"box": (220, 53, 69),    "badge": (220, 53, 69),    "badge_text": (255, 255, 255), "label_bg": (220, 53, 69),    "label_text": (255, 255, 255)},
    "yellow": {"box": (230, 160, 0),    "badge": (230, 160, 0),    "badge_text": (255, 255, 255), "label_bg": (230, 160, 0),    "label_text": (255, 255, 255)},
    "green":  {"box": (40,  167, 69),   "badge": (40,  167, 69),   "badge_text": (255, 255, 255), "label_bg": (40,  167, 69),   "label_text": (255, 255, 255)},
}
DEFAULT_SEVERITY = "red"

BOX_THICKNESS = 6       # border thickness of the highlight box
BOX_ALPHA = 220         # box border opacity (0-255)
FILL_ALPHA = 30         # interior fill opacity — subtle tint
BADGE_RADIUS = 36       # radius of the number badge circle
BADGE_BORDER = 5        # white border around badge
LABEL_PADDING_X = 24
LABEL_PADDING_Y = 14
LABEL_FONT_SIZE = 36
BADGE_FONT_SIZE = 42


def load_annotations(annotations_arg):
    if os.path.isfile(annotations_arg):
        with open(annotations_arg) as f:
            return json.load(f)
    return json.loads(annotations_arg)


def get_font(size, bold=True):
    candidates = [
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf",
        "/usr/share/fonts/truetype/freefont/FreeSansBold.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    ]
    for path in candidates:
        try:
            return ImageFont.truetype(path, size=size)
        except Exception:
            continue
    return ImageFont.load_default()


def draw_annotation(draw, overlay_draw, ann, img_size):
    sev = ann.get("severity", DEFAULT_SEVERITY)
    colors = SEVERITY_COLORS.get(sev, SEVERITY_COLORS[DEFAULT_SEVERITY])

    x1, y1 = int(ann["x1"]), int(ann["y1"])
    x2, y2 = int(ann["x2"]), int(ann["y2"])
    number = ann["number"]
    label = ann.get("label", "")

    W, H = img_size

    # --- Subtle interior fill ---
    fill_color = colors["box"] + (FILL_ALPHA,)
    overlay_draw.rectangle([x1, y1, x2, y2], fill=fill_color)

    # --- Bold border box ---
    border_color = colors["box"] + (BOX_ALPHA,)
    for i in range(BOX_THICKNESS):
        overlay_draw.rectangle(
            [x1 - i, y1 - i, x2 + i, y2 + i],
            outline=border_color,
            fill=None
        )

    # --- Badge position: top-left corner of box ---
    bx = x1
    by = y1
    br = BADGE_RADIUS

    # White border ring
    draw.ellipse(
        [bx - br - BADGE_BORDER, by - br - BADGE_BORDER,
         bx + br + BADGE_BORDER, by + br + BADGE_BORDER],
        fill=(255, 255, 255)
    )
    # Colored badge fill
    draw.ellipse(
        [bx - br, by - br, bx + br, by + br],
        fill=colors["badge"]
    )
    # Number text
    badge_font = get_font(BADGE_FONT_SIZE, bold=True)
    num_str = str(number)
    bbox = draw.textbbox((0, 0), num_str, font=badge_font)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    draw.text(
        (bx - tw // 2, by - th // 2 - 2),
        num_str,
        fill=colors["badge_text"],
        font=badge_font
    )

    # --- Label pill: sits just below the badge, attached to top-left of box ---
    if label:
        label_font = get_font(LABEL_FONT_SIZE, bold=True)
        lbbox = draw.textbbox((0, 0), label, font=label_font)
        lw, lh = lbbox[2] - lbbox[0], lbbox[3] - lbbox[1]

        # Position label to the right of the badge
        lx1 = bx + br + BADGE_BORDER + 8
        ly1 = by - lh // 2 - LABEL_PADDING_Y
        lx2 = lx1 + lw + LABEL_PADDING_X * 2
        ly2 = ly1 + lh + LABEL_PADDING_Y * 2

        # Clamp to image bounds
        if lx2 > W:
            shift = lx2 - W + 10
            lx1 -= shift
            lx2 -= shift
        if ly1 < 0:
            ly2 -= ly1
            ly1 = 0

        # Pill background
        pill_radius = (ly2 - ly1) // 2
        draw.rounded_rectangle([lx1, ly1, lx2, ly2], radius=pill_radius, fill=colors["label_bg"])
        # Label text
        draw.text(
            (lx1 + LABEL_PADDING_X, ly1 + LABEL_PADDING_Y - 2),
            label,
            fill=colors["label_text"],
            font=label_font
        )


def annotate(image_path, annotations, output_path):
    img = Image.open(image_path).convert("RGBA")

    # Two layers: overlay for semi-transparent fills, top for opaque elements
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    overlay_draw = ImageDraw.Draw(overlay)
    top = Image.new("RGBA", img.size, (0, 0, 0, 0))
    top_draw = ImageDraw.Draw(top)

    for ann in annotations:
        draw_annotation(top_draw, overlay_draw, ann, img.size)

    result = Image.alpha_composite(img, overlay)
    result = Image.alpha_composite(result, top)
    result.convert("RGB").save(output_path)
    print(f"Saved: {output_path}")


if __name__ == "__main__":
    if len(sys.argv) != 4:
        print("Usage: python annotate.py <image_path> <annotations_json_or_file> <output_path>")
        sys.exit(1)

    annotate(sys.argv[1], load_annotations(sys.argv[2]), sys.argv[3])
