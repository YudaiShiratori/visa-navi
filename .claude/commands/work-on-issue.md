---
allowed-tools: Bash(git:*), Bash(gh:*), Read, Edit, Write, Glob, Grep, Task, TodoWrite
description: GitHub Issue に基づいて開発を行う
---

# Issue 対応: $ARGUMENTS

## 開発フロー

### 1. Issue 情報を確認

```bash
gh issue view $ARGUMENTS
```

### 2. 準備

```bash
gh issue edit $ARGUMENTS --add-assignee @me
git checkout -b fix/issue-$ARGUMENTS main
```

### 3. 調査（並列実行）

Task tool で以下を **並列実行**：

| subagent_type | タスク |
|---------------|--------|
| Explore | Issue の内容と関連コードを調査 |
| Explore | 関連するテストファイルを確認 |

調査完了後、Issue にコメント：

```bash
gh issue comment $ARGUMENTS --body "## 🔍 調査完了
**影響範囲:** [関連ファイル]
**対応方針:** [アプローチ]
作業を開始します。"
```

### 4. 実装

TodoWrite でタスク管理しながら TDD で実装。

### 5. 検証（subagent に委譲）

Task tool (subagent_type: general-purpose) で実行：

```
prompt: "実装の検証を行う。
1. bun run check:write でフォーマット修正
2. bun run typecheck で型チェック
3. bun run test でテスト実行
エラーがあれば修正し、全てパスするまで繰り返す。"
```

### 6. コミット & PR

```bash
git add . && git commit -m "fix: [内容]

Fixes #$ARGUMENTS"
git push origin fix/issue-$ARGUMENTS
```

`/create-pr` で PR 作成、または：

```bash
gh pr create --title "Fix #$ARGUMENTS: [タイトル]" --body "## 概要
Issue #$ARGUMENTS に対応
## 変更内容
- [変更点]
Fixes #$ARGUMENTS"
```

### 7. 完了報告

```bash
gh issue comment $ARGUMENTS --body "## ✅ 対応完了
PR: [PR リンク]
レビューをお願いします。"
```
