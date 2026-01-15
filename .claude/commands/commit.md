---
allowed-tools: Bash(git:*), Read, Glob, Grep, Task
description: 変更をコミット（日本語対応）
---

# コミット: $ARGUMENTS

## 現在の変更

- ステージ済み: !`git diff --cached --stat`
- 未ステージ: !`git diff --stat`

## 実行手順

### 1. 品質チェック（subagent に委譲）

Task tool (subagent_type: general-purpose) で実行：

```
prompt: "コミット前の品質チェックを行う。
1. bun run check:write でフォーマット修正
2. bun run typecheck で型チェック
エラーがあれば修正する。"
```

### 2. ステージ & コミット

```bash
git add .
git commit -m "<type>: <説明>

<詳細>

Refs #<Issue番号>"
```

**コミットタイプ:**
- `feat`: 新機能
- `fix`: バグ修正
- `refactor`: リファクタリング
- `docs`: ドキュメント
- `test`: テスト追加
- `chore`: 設定変更

## 例

```bash
git commit -m "feat: ユーザー認証機能を追加

- JWT 認証を実装
- ログイン API を追加

Refs #42"
```

## 注意事項

- 1コミット = 1つの論理的な変更
- WIP コミットは避ける
