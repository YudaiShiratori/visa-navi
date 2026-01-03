---
allowed-tools: Bash(git:*), Read, Edit, Write, Glob, Grep, Task, TodoWrite
description: コードをリファクタリング
---

# リファクタリング: $ARGUMENTS

## 現在の状態

- ブランチ: !`git branch --show-current`
- 変更状態: !`git status --short`

## 実行手順

### 1. 分析（並列実行）

Task tool で以下を **並列実行**：

| subagent_type | タスク |
|---------------|--------|
| Explore | 対象コードのファイル構造・依存関係を分析 |
| Explore | 関連するテストファイルを確認 |
| general-purpose | `bun run typecheck && bun run check` を実行し現状確認 |

⚠️ チェックが失敗している場合は、先に修正してください。

### 2. リファクタリング実行

TodoWrite でタスク管理しながら実装。

**原則:**
- 🔄 小さな変更を繰り返す
- 📝 機能変更は含めない

### 3. 検証（subagent に委譲）

Task tool (subagent_type: general-purpose) で以下を実行：

```
prompt: "リファクタリング後の検証を行う。
1. bun run check:write でフォーマット修正
2. bun run typecheck で型チェック
3. bun run test で関連テスト実行
エラーがあれば修正し、全てパスするまで繰り返す。"
```

### 4. コミット

```bash
git add .
git commit -m "refactor: [リファクタリング内容]

- [変更点1]
- [変更点2]

機能変更なし"
```

## 注意事項

- リファクタリングと機能変更は別コミット
- テストがない場合は先にテストを追加
