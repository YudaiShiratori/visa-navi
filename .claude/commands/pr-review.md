---
allowed-tools: Task, Skill
description: Pull Request をレビュー（スキル優先、subagent フォールバック）
---

# PR レビュー: $ARGUMENTS

## 実行手順

### 1. code-review スキルを使用（推奨）

Skill tool で実行：

```
skill: "code-review:code-review"
args: "$ARGUMENTS"
```

### 2. フォールバック（スキルが利用不可の場合）

Task tool (subagent_type: general-purpose) で実行：

```
prompt: "PR #$ARGUMENTS をレビューしてください。

1. `gh pr view $ARGUMENTS` で PR 情報を取得
2. `gh pr diff $ARGUMENTS` で差分を取得
3. 以下の観点でコードをレビュー：
   - ロジックの正確性
   - エラーハンドリング
   - 型安全性
   - セキュリティリスク
   - テストの有無

4. レビュー結果を投稿：
   - 問題なし → `gh pr review $ARGUMENTS --approve`
   - 修正必要 → `gh pr review $ARGUMENTS --request-changes`
   - コメント → `gh pr review $ARGUMENTS --comment`

5. サマリーを報告"
```
