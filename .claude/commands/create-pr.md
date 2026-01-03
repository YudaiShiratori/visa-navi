---
allowed-tools: Bash(git:*), Bash(gh:*), Read, Glob, Grep, Task
description: 現在の変更から Pull Request を作成
---

# Pull Request 作成: $ARGUMENTS

## 現在の状態

- ブランチ: !`git branch --show-current`
- 変更ファイル数: !`git diff --name-only main...HEAD | wc -l`

## 実行手順

### 1. 確認（並列実行）

Task tool で以下を **並列実行**：

| subagent_type | タスク |
|---------------|--------|
| Explore | `git diff main...HEAD --stat` と `git log main..HEAD --oneline` で変更概要を取得 |
| general-purpose | `bun run check:write && bun run typecheck && bun run test` を実行し品質確認。エラーがあれば修正。 |

⚠️ チェックが失敗した場合は PR 作成を中断し、修正を優先。

### 2. プッシュ & PR 作成

```bash
git push origin $(git branch --show-current)

gh pr create --title "[タイトル]" --body "$(cat << 'EOF'
## 概要
[変更の説明]

## 変更内容
- [変更点]

## 変更の種類
- [ ] 🐛 バグ修正
- [ ] ✨ 新機能
- [ ] ♻️ リファクタリング

## テスト
- [ ] テストがパス

## 関連 Issue
Fixes #[番号]
EOF
)"
```

### 3. メタデータ設定

```bash
gh pr edit --add-assignee @me
```

## 出力

PR 作成後、PR 番号と URL を報告。
