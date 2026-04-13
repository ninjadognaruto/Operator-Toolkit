---
name: git-sync
description: "Sync the current git repo to the latest: stage all changes, commit with a descriptive message, and push to origin main. Use when the user says 'sync', 'push my changes', 'update the repo', 'commit and push', or 'git sync'."
---

# Git Sync

Commit and push all local changes to origin main.

## Steps

1. Run `git status` to see what's changed.
2. If there are no changes, tell the user — nothing to sync.
3. If there are changes:
   a. Run `git diff --stat` to understand what changed.
   b. Stage all changed files with `git add -A` — but first check `git status` for anything that looks like secrets or binaries that shouldn't be committed (`.env`, credentials, large files). If found, flag and skip those files.
   c. Write a commit message that summarizes the changes in one line. Be specific — name the files or domains changed (e.g. "Update skills index and add git-sync skill"). No generic messages like "update files".
   d. Commit with that message.
   e. Push to `origin main`.
4. Confirm success or surface any errors.

## Commit Message Rules

- Present tense, imperative mood: "Add X", "Update Y", "Remove Z"
- Specific: name what changed, not just that something changed
- One line is enough unless the change is complex

## Error Handling

- If push is rejected (non-fast-forward): run `git pull --rebase origin main` first, then push again.
- If there's a merge conflict: surface it to the user — don't resolve automatically.
- If the index.lock exists: remove it with `rm .git/index.lock` before proceeding.
