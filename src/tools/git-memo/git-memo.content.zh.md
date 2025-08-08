## 配置

设置全局配置

```shell
git config --global user.name "[name]"
git config --global user.email "[email]"
```

## 开始使用

创建一个 git 仓库

```shell
git init
```

克隆现有的 git 仓库

```shell
git clone [url]
```

## 提交

提交所有已跟踪的更改

```shell
git commit -am "[commit message]"
```

添加新修改到上一次提交

```shell
git commit --amend --no-edit
```

## 我犯了一个错误

更改上一次提交信息

```shell
git commit --amend
```

撤销最近一次提交并保留更改

```shell
git reset HEAD~1
```

撤销最近 `N` 次提交并保留更改

```shell
git reset HEAD~N
```

撤销最近一次提交并丢弃更改

```shell
git reset HEAD~1 --hard
```

重置分支到远程状态

```shell
git fetch origin
git reset --hard origin/[branch-name]
```

## 其他

将本地 master 分支重命名为 main

```shell
git branch -m master main
```
