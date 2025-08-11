## 🌐 Configuration and Initialization

```bash
# Set user information
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# View configuration
git config --list
git config user.name

# Initialize a new repository
git init

# Clone an existing repository
git clone <repository-url>
git clone <repository-url> <directory-name>
```

---

## 📦 Basic Workflow

```bash
# Check file status
git status

# Add files to staging area
git add <file>           # Add specified file
git add .                # Add all modified and new files
git add -u               # Add all modified or deleted files (excluding new ones)
git add -A               # Add all changes (equivalent to git add . && git add -u)

# Commit to local repository
git commit -m "commit message"
git commit -a -m "message"  # Skip git add and directly commit changes to all tracked files

# Push to remote repository
git push origin <branch-name>

# Pull updates from remote
git pull origin <branch-name>
```

---

## 🔀 Branch Management

```bash
# View branches
git branch                    # List local branches
git branch -r                 # List remote branches
git branch -a                 # List all branches (local + remote)

# Create branch
git branch <branch-name>
git checkout -b <branch-name> # Create and switch to new branch (recommended)
git switch -c <branch-name>   # Same as above (Git 2.23+)

# Switch branches
git checkout <branch-name>
git switch <branch-name>      # Git 2.23+

# Merge branches
git checkout main
git merge <feature-branch>

# Delete branches
git branch -d <branch-name>   # Safe delete (merged)
git branch -D <branch-name>   # Force delete (unmerged)

# Push and link remote branch
git push -u origin <branch-name>
```

---

## 💾 Stashing

```bash
# Stash current changes
git stash
git stash save "message"

# View all stashes
git stash list

# Restore most recent stash (keep stash)
git stash apply
git stash apply stash@{0}

# Restore and delete stash
git stash pop

# Delete most recent stash
git stash drop

# Delete specified stash
git stash drop stash@{0}

# Clear all stashes
git stash clear
```

---

## 🔍 View History and Differences

```bash
# View commit history
git log
git log --oneline           # Concise format
git log --graph --oneline   # Show branch graph
git log --author="name"
git log --since="2 days ago"
git log <file>              # View commit history of a file

# View changes
git diff                    # Working directory vs staging area
git diff --staged           # Staging area vs last commit
git diff HEAD               # Working directory vs last commit
git diff <commit1> <commit2>
```

---

## 🔧 Undo and Reset

```bash
# Undo working directory changes (not added)
git checkout -- <file>      # Old version
git restore <file>          # Git 2.23+

# Undo staging area changes (added but not committed)
git reset HEAD <file>
git restore --staged <file> # Git 2.23+

# Modify last commit (content or commit message)
git commit --amend -m "new message"

# Reset to a commit (keep working directory)
git reset --soft <commit-hash>

# Reset to a commit (reset staging area, keep working directory)
git reset --mixed <commit-hash>  # Default

# Reset to a commit (completely discard all changes)
git reset --hard <commit-hash>
```

> ⚠️ Warning: `--hard` will permanently delete uncommitted changes, use with caution.

---

## 🔗 Remote Repositories

```bash
# View remote repositories
git remote -v

# Add remote repository
git remote add origin <url>

# Push branch
git push origin <branch-name>
git push -u origin <branch-name>  # Establish tracking on first push

# Delete remote branch
git push origin --delete <branch-name>

# Fetch remote updates (without auto-merging)
git fetch origin

# Delete outdated remote branch references
git remote prune origin
```

---

## 🧩 Advanced Techniques

```bash
# View changes in a commit
git show <commit-hash>

# Tag operations
git tag v1.0                    # Create lightweight tag
git tag -a v1.0 -m "message"    # Create annotated tag
git push origin v1.0            # Push tag
git push origin --tags          # Push all tags

# Restore a file from an old version
git checkout <commit-hash> -- <file>

# Find the commit that introduced a line of code
git blame <file>

# Search content in commit history
git log -S "search text"
```

---

## ✅ Best Practice Recommendations

- Run `git pull` before committing to avoid conflicts.
- Use `.gitignore` to ignore temporary files, logs, dependencies, etc.
- Write clear, meaningful commit messages following project conventions (e.g.: `feat:`, `fix:`, `docs:`).
- Commit small changes frequently for easier backtracking and collaboration.
- Use branches for developing new features, avoid modifying `main` or `develop` directly.

---

📌 **Tip**: Git version 2.23+ introduced `git switch` and `git restore` commands for clearer semantics, recommended for use.

---
