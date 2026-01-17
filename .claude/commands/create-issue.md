---
allowed-tools: Bash(gh:*), Read, Glob, Grep, Task
description: GitHub Issue を作成
---

# GitHub Issue 作成: $ARGUMENTS

## 実行手順

### 1. 事前調査（並列実行）

Task tool で以下を **並列実行**：

| subagent_type | タスク |
|---------------|--------|
| Explore | 類似 Issue を `gh issue list --search "$ARGUMENTS"` で検索 |
| Explore | 関連コードやファイルをコードベースから特定 |

### 2. Issue 作成

タイプを判断（bug / enhancement / docs / chore）して作成：

```bash
gh issue create --title "[タイトル]" --body "## 概要
[問題または要望]

## 受け入れ基準
- [ ] [完了条件]

## 関連情報
- 関連ファイル: [パス]"
```

### 3. メタデータ設定

```bash
gh issue edit [番号] --add-label "[タイプ]"
```

## 出力

Issue 番号・URL を報告。着手する場合は `/work-on-issue [番号]` を提案。
