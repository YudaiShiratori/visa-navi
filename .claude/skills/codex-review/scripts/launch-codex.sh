#!/bin/bash

# Claude Code - Codex Review Integration Script
# Runs Codex CLI non-interactively and returns output directly to Claude Code

set -eo pipefail

PROJECT_DIR="${CODEX_PROJECT_DIR:-$(pwd)}"

# Build the review prompt
build_prompt() {
    cat << 'EOF'
以下のコード変更をレビューしてください。

レビュー完了後、以下のフォーマットで結果を出力してください：

## 判定
APPROVED または FEEDBACK

## コメント
[レビューコメント]

---
EOF
    # Read request content from file argument or stdin
    if [[ -n "$1" ]]; then
        if [[ -f "$1" ]]; then
            cat "$1"
        else
            echo "Error: File not found: $1" >&2
            exit 1
        fi
    else
        cat
    fi
}

# Main: Run Codex exec (non-interactive) and return output via stdin
main() {
    # Build prompt and pipe to codex exec via stdin (using '-' for stdin input)
    build_prompt "$1" | codex exec -C "${PROJECT_DIR}" --sandbox workspace-write -
}

main "$@"
