#!/bin/bash
# 新建文章脚本
# 用法: ./new-post.sh

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
POSTS_DIR="$SCRIPT_DIR/_posts"

echo "=== 新建文章 ==="
echo ""

# 获取标题
read -p "文章标题: " title
if [ -z "$title" ]; then
    echo "错误: 标题不能为空"
    exit 1
fi

# 获取日期（默认今天）
read -p "日期 (YYYY-MM-DD，回车默认今天): " date
if [ -z "$date" ]; then
    date=$(date +%Y-%m-%d)
fi

# 获取分类
echo ""
echo "常用分类: 学习, 项目, 笔记, 总结"
read -p "分类 (多个用空格分隔): " categories_input

# 获取标签
echo ""
echo "常用标签: STM32, PID, 嵌入式, Linux, C, RoboMaster, FreeRTOS"
read -p "标签 (多个用空格分隔): " tags_input

# 生成文件名（拼音/英文）
echo ""
read -p "文件名英文/拼音 (如 robomaster-summary): " slug
if [ -z "$slug" ]; then
    # 自动从标题生成（简单处理）
    slug=$(echo "$title" | tr ' ' '-' | tr '[:upper:]' '[:lower:]')
fi

filename="${date}-${slug}.md"
filepath="$POSTS_DIR/$filename"

# 检查文件是否已存在
if [ -f "$filepath" ]; then
    echo "错误: 文件已存在 $filename"
    exit 1
fi

# 生成 front matter
categories_block=""
if [ -n "$categories_input" ]; then
    categories_block="categories:"
    for cat in $categories_input; do
        categories_block="$categories_block
  - $cat"
    done
fi

tags_block=""
if [ -n "$tags_input" ]; then
    tags_block="tags:"
    for tag in $tags_input; do
        tags_block="$tags_block
  - $tag"
    done
fi

# 写入文件
cat > "$filepath" << EOF
---
title: "${title}"
date: ${date}
${categories_block}
${tags_block}
---

在这里写文章摘要，显示在首页列表中。

<!--more-->

正文内容从这里开始。

## 小节标题

写你的内容...
EOF

echo ""
echo "✓ 文章已创建: $filepath"
echo ""

# 尝试用编辑器打开
if command -v code &> /dev/null; then
    read -p "用 VS Code 打开? (y/n): " open_editor
    if [ "$open_editor" = "y" ] || [ "$open_editor" = "Y" ]; then
        code "$filepath"
    fi
elif command -v nano &> /dev/null; then
    read -p "用 nano 编辑? (y/n): " open_editor
    if [ "$open_editor" = "y" ] || [ "$open_editor" = "Y" ]; then
        nano "$filepath"
    fi
fi

echo ""
echo "写完后运行以下命令发布:"
echo "  cd $SCRIPT_DIR && git add . && git commit -m 'post: ${title}' && git push"
