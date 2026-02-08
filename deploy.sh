#!/bin/bash

# ==================== 加载外部配置文件 ====================
CONFIG_FILE="./config.env"

# 检查配置文件是否存在
if [[ ! -f "$CONFIG_FILE" ]]; then
    echo "错误：找不到配置文件 $CONFIG_FILE"
    exit 1
fi

# 加载配置文件
source "$CONFIG_FILE"

# 检查关键变量是否加载成功
if [[ -z "$REMOTE_HOST" || -z "$REMOTE_USER" || -z "$REMOTE_PATH" || -z "$SSH_KEY_PATH" ]]; then
    echo "错误：配置文件中缺少必要变量，请检查 $CONFIG_FILE"
    exit 1
fi

# ==================================================

# 进入项目目录
cd "$LOCAL_PROJECT_PATH" || { echo "无法进入项目目录"; exit 1; }

# 清空日志文件
> "$LOG_FILE"

# 记录开始时间
echo "[$(date)] 开始部署..." >> "$LOG_FILE"

# 构建项目静态文件
echo "[$(date)] 正在构建项目静态文件..." >> "$LOG_FILE"
pnpm build >> "$LOG_FILE" 2>&1
if [ $? -ne 0 ]; then
    echo "[$(date)] 项目构建失败，请检查日志。" >> "$LOG_FILE"
    exit 1
fi

# 同步文件到服务器
echo "[$(date)] 正在同步文件到服务器..." >> "$LOG_FILE"
rsync -avz --delete --chown=www-data:www-data \
    dist/ \
    -e "ssh -i $SSH_KEY_PATH" \
    "$REMOTE_USER@$REMOTE_HOST:$REMOTE_PATH" >> "$LOG_FILE" 2>&1

if [ $? -ne 0 ]; then
    echo "[$(date)] 文件同步失败，请检查日志。" >> "$LOG_FILE"
    exit 1
fi

# 记录结束时间
echo "[$(date)] 部署完成！" >> "$LOG_FILE"

# 输出成功信息
echo "部署已完成，详细日志请查看：$LOG_FILE"