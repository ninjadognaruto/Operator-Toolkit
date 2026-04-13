---
name: git-sync
description: "Sync the current git repo to the latest: stage all changes, commit with a descriptive message, and push to origin main. Use when the user says 'sync', 'push my changes', 'update the repo', 'commit and push', or 'git sync'."
---

# Git Sync

Commit and push all local changes to origin main.

## Repo Structure

Use this as a reference when writing commit messages — name the folder that changed, not just the file.

```
/
├── product/                      # Product discovery, strategy, and research skills
│   ├── product-strategy-audit.md
│   ├── positioning-canvas.md
│   ├── product-goals-review.md
│   ├── customer-problem-hypothesis.md
│   ├── customer-insight-synthesis.md
│   ├── competitive-research.md
│   ├── stake-holder-jtbd.md
│   ├── qual-research.md
│   └── quant-analysis.md
│
├── frameworks/                   # Mental models, decision tools, thinking frameworks
│   ├── decision-framework.md
│   ├── asking-the-right-question.md
│   ├── systems-influence.md
│   ├── article-craft.md
│   ├── git-sync.md
│   ├── munger-philosophy/
│   └── influence/
│
├── design/                       # Behavioral design and visual review skills
│   ├── bias-audit/
│   ├── fogg-bmap/
│   ├── psych-journey/
│   ├── 15-star-experience/
│   ├── don-norman-review/
│   ├── font-readability/
│   ├── copy-analyzer.md
│   └── ux-review-clear.md
│
├── research/                     # Research pipeline skills
│   ├── web-research.md
│   ├── github-research.md
│   └── topic-skill-builder.md
│
└── agents/                       # Multi-step orchestration agents
    ├── README.md
    ├── product-opportunity-agent/
    └── ux-review-agent/
```

## Steps

1. Run `git status` to see what's changed.
2. If there are no changes, tell the user — nothing to sync.
3. If there are changes:
   a. Run `git diff --stat` to understand what changed.
   b. Stage all changed files with `git add -A` — but first check `git status` for anything that looks like secrets or binaries that shouldn't be committed (`.env`, credentials, large files). If found, flag and skip those files.
   c. Write a commit message that summarizes the changes in one line. Be specific — reference the folder and skill name (e.g. "Add influence skill to frameworks", "Update product-strategy-audit in product"). No generic messages like "update files".
   d. Commit with that message.
   e. Push to `origin main`.
4. Confirm success or surface any errors.

## Commit Message Rules

- Present tense, imperative mood: "Add X", "Update Y", "Remove Z"
- Reference the folder: "Add X to frameworks", "Update Y in design"
- One line is enough unless the change spans multiple folders

## Error Handling

- If push is rejected (non-fast-forward): run `git pull --rebase origin main` first, then push again.
- If there's a merge conflict: surface it to the user — don't resolve automatically.
- If the index.lock exists: remove it with `rm .git/index.lock` before proceeding.
