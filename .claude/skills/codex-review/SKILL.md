# Codex Review Skill

OpenAI Codex CLIを使用してコード変更をレビューし、AI間の直接対話を実現するSkillです。

## 概要

Claude CodeがCodexを直接呼び出し、レビュー結果をCLI上で受け取ります。

```
Claude Code → codex コマンド実行 → Codexがレビュー → 結果をCLI出力 → Claude Codeが継続処理
```

## 使用方法

### コード変更をレビューする

```bash
echo "レビュー内容" | .claude/skills/codex-review/scripts/launch-codex.sh
```

または

```bash
.claude/skills/codex-review/scripts/launch-codex.sh request.md
```

### ワークフロー

1. Claude Codeがコード変更を生成
2. `launch-codex.sh` を実行してCodexにレビュー依頼
3. Codexが直接レビュー結果を出力
4. Claude Codeが結果を読み取り：
   - **APPROVED**: コミットを実行
   - **FEEDBACK**: 修正して再レビュー

## 出力フォーマット

Codexは以下のフォーマットで結果を出力します：

```
## 判定
APPROVED

## コメント
コードは問題ありません。
```

## 環境変数

- `CODEX_PROJECT_DIR`: プロジェクトディレクトリ（デフォルト: カレントディレクトリ）

## 前提条件

- OpenAI Codex CLIがインストールされていること (`codex` コマンドが使用可能)
