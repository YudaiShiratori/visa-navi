#!/bin/bash

# Claude Code - Codex Review Integration Script
# Reviews entire branch changes before PR creation

set -eo pipefail

PROJECT_DIR="${CODEX_PROJECT_DIR:-$(pwd)}"
BASE_BRANCH="${CODEX_BASE_BRANCH:-main}"

# Get branch diff and commit summary
get_branch_changes() {
    cd "${PROJECT_DIR}"

    echo "# PR Review Request"
    echo ""
    echo "## Commits in this branch"
    echo '```'
    git log "${BASE_BRANCH}..HEAD" --oneline 2>/dev/null || echo "(no commits yet)"
    echo '```'
    echo ""
    echo "## Changes"
    echo '```diff'
    git diff "${BASE_BRANCH}...HEAD" 2>/dev/null || git diff HEAD 2>/dev/null || echo "(no changes)"
    echo '```'
}

# Build the review prompt
build_prompt() {
    cat << 'EOF'
以下のPR（ブランチ全体の変更）をレビューしてください。

確認ポイント:
- コード品質
- セキュリティ
- ベストプラクティス
- テストの有無

レビュー完了後、以下のフォーマットで結果を出力してください：

## 判定
APPROVED または FEEDBACK

## コメント
[レビューコメント]

---
EOF
    get_branch_changes
}

# Main: Run Codex exec (non-interactive) and return output
main() {
    build_prompt | codex exec -C "${PROJECT_DIR}" --sandbox workspace-write -
}

main "$@"
