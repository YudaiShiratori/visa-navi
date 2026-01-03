---
allowed-tools: Read, Glob, Grep, Task
description: コードベースを分析（subagent 並列実行）
---

# コードベース分析: $ARGUMENTS

## 実行手順

### 1. 並列調査

Task tool で以下を **並列実行**：

| subagent_type | タスク |
|---------------|--------|
| Explore | "$ARGUMENTS" に関連するファイルとディレクトリ構造を調査 |
| Explore | "$ARGUMENTS" の依存関係（import/export）を分析 |
| Explore | "$ARGUMENTS" の使用箇所を検索 |
| Explore | 関連するテストファイルを確認 |

### 2. 結果統合

各調査結果を以下の形式で報告：

```
## 分析結果: [対象]

### 📁 ファイル構造
[関連ファイル一覧]

### 🔗 依存関係
- 依存先: [import]
- 依存元: [使用箇所]

### 🧪 テスト状況
[テストファイル・カバレッジ]

### 💡 改善提案
[リファクタリング候補]
```

## 使用例

```
/analyze src/components/Button.tsx
/analyze 認証機能
/analyze src/lib/
```

## 関連コマンド

- `/refactor-code [対象]` - リファクタリング実行
- `/create-issue [内容]` - Issue 化
