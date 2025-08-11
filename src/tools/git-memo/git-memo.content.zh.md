## 🌐 配置与初始化

```bash
# 设置用户信息
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# 查看配置
git config --list
git config user.name

# 初始化新仓库
git init

# 克隆现有仓库
git clone <repository-url>
git clone <repository-url> <directory-name>
```

---

## 📦 基本工作流

```bash
# 查看文件状态
git status

# 添加文件到暂存区
git add <file>           # 添加指定文件
git add .                # 添加所有修改和新增的文件
git add -u               # 添加所有被修改或删除的文件（不包括新增）
git add -A               # 添加所有变化（等同于 git add . && git add -u）

# 提交到本地仓库
git commit -m "commit message"
git commit -a -m "message"  # 跳过 git add，直接提交所有已跟踪文件的更改

# 推送到远程仓库
git push origin <branch-name>

# 从远程拉取更新
git pull origin <branch-name>
```

---

## 🔀 分支管理

```bash
# 查看分支
git branch                    # 列出本地分支
git branch -r                 # 列出远程分支
git branch -a                 # 列出所有分支（本地+远程）

# 创建分支
git branch <branch-name>
git checkout -b <branch-name> # 创建并切换到新分支（推荐）
git switch -c <branch-name>   # 同上（Git 2.23+）

# 切换分支
git checkout <branch-name>
git switch <branch-name>      # Git 2.23+

# 合并分支
git checkout main
git merge <feature-branch>

# 删除分支
git branch -d <branch-name>   # 安全删除（已合并）
git branch -D <branch-name>   # 强制删除（未合并）

# 推送并关联远程分支
git push -u origin <branch-name>
```

---

## 💾 暂存（Stashing）

```bash
# 暂存当前修改
git stash
git stash save "message"

# 查看所有暂存
git stash list

# 恢复最近一次暂存（保留 stash）
git stash apply
git stash apply stash@{0}

# 恢复并删除 stash
git stash pop

# 删除最近一次暂存
git stash drop

# 删除指定 stash
git stash drop stash@{0}

# 清空所有 stash
git stash clear
```

---

## 🔍 查看历史与差异

```bash
# 查看提交历史
git log
git log --oneline           # 简洁格式
git log --graph --oneline   # 显示分支图
git log --author="name"
git log --since="2 days ago"
git log <file>              # 查看某文件的提交历史

# 查看更改内容
git diff                    # 工作区 vs 暂存区
git diff --staged           # 暂存区 vs 最近提交
git diff HEAD               # 工作区 vs 最近提交
git diff <commit1> <commit2>
```

---

## 🔧 撤销与重置

```bash
# 撤销工作区修改（未 add）
git checkout -- <file>      # 旧版
git restore <file>          # Git 2.23+

# 撤销暂存区修改（已 add 未 commit）
git reset HEAD <file>
git restore --staged <file> # Git 2.23+

# 修改最后一次提交（修改内容或提交信息）
git commit --amend -m "new message"

# 重置到某个提交（保留工作区）
git reset --soft <commit-hash>

# 重置到某个提交（重置暂存区，保留工作区）
git reset --mixed <commit-hash>  # 默认

# 重置到某个提交（彻底丢弃所有更改）
git reset --hard <commit-hash>
```

> ⚠️ 警告：`--hard` 会永久删除未提交的更改，请谨慎使用。

---

## 🔗 远程仓库

```bash
# 查看远程仓库
git remote -v

# 添加远程仓库
git remote add origin <url>

# 推送分支
git push origin <branch-name>
git push -u origin <branch-name>  # 第一次推送时建立追踪

# 删除远程分支
git push origin --delete <branch-name>

# 获取远程更新（不自动合并）
git fetch origin

# 删除过期的远程分支引用
git remote prune origin
```

---

## 🧩 高级技巧

```bash
# 查看某个提交的更改
git show <commit-hash>

# 标签操作
git tag v1.0                    # 创建轻量标签
git tag -a v1.0 -m "message"    # 创建附注标签
git push origin v1.0            # 推送标签
git push origin --tags          # 推送所有标签

# 恢复某个旧版本的文件
git checkout <commit-hash> -- <file>

# 查找引入某行代码的提交
git blame <file>

# 搜索提交历史中的内容
git log -S "search text"
```

---

## ✅ 最佳实践建议

- 提交前先 `git pull`，避免冲突。
- 使用 `.gitignore` 忽略临时文件、日志、依赖包等。
- 提交信息清晰、有意义，遵循项目规范（如：`feat:`, `fix:`, `docs:`）。
- 频繁提交小改动，便于回溯和协作。
- 使用分支开发新功能，避免在 `main` 或 `develop` 上直接修改。

---

📌 **提示**：Git 版本 2.23+ 引入了 `git switch` 和 `git restore` 命令，使操作语义更清晰，推荐使用。

---
