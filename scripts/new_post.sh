#!/bin/bash

# Check for correct number of arguments
# ./new_post.sh "Estimate the number of washing machines sold in 2025 in India" "Guesstimate" "Sales, Top Down"
if [ "$#" -ne 3 ]; then
    echo "Usage: $0 \"Post Title\" \"Category1,Category2\" \"Tag1,Tag2\""
    exit 1
fi

TITLE=$1
CATEGORIES=$2
TAGS=$3

# Get the directory of the script
SCRIPT_DIR=$(dirname "$0")
# Assume the script is in a 'scripts' directory, so the project root is one level up.
PROJECT_ROOT=$(cd "$SCRIPT_DIR/.." && pwd)

# Generate filename
DATE=$(date +%Y-%m-%d)
SLUG=$(echo "$TITLE" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g' | sed 's/-\{2,\}/-/g' | sed 's/^-//' | sed 's/-$//')
FILENAME="${PROJECT_ROOT}/_posts/${DATE}-${SLUG}.md"

# Create and populate the file
if cat << EOF > "$FILENAME"
---
title: "$TITLE"
categories:
$(echo "$CATEGORIES" | tr ',' '\n' | sed 's/^/  - /')
tags:
$(echo "$TAGS" | tr ',' '\n' | sed 's/^/  - /')
date: $(date +%Y-%m-%d)
hidden: false
---

EOF
then
    echo "Created new post: $FILENAME"
else
    echo "Error: Failed to create post at $FILENAME"
    exit 1
fi
