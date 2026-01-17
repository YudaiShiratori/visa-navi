# Codex Review Skill

PR作成前にOpenAI Codex CLIでブランチ全体の変更をレビューするSkillです。

## ワークフロー

```
開発フェーズ（Codexレビューなし）
  │
  ├─ コード変更 → コミット
  ├─ コード変更 → コミット
  └─ コード変更 → コミット
  │
  ▼
PRレビューフェーズ
  │
  ├─ /codex-review 実行
  ├─ Codex: ブランチ全体をレビュー
  │
  ├─ APPROVED → PR作成
  └─ FEEDBACK → 修正して再レビュー
```

## 使用方法

### PR作成前にレビューを実行

```bash
.claude/skills/codex-review/scripts/launch-codex.sh
```

### レビュー内容

- `git log main..HEAD` - ブランチのコミット一覧
- `git diff main...HEAD` - ブランチ全体の差分

## 出力フォーマット

```
## 判定
APPROVED

## コメント
[レビューコメント]
```

## 環境変数

- `CODEX_PROJECT_DIR`: プロジェクトディレクトリ（デフォルト: カレントディレクトリ）
- `CODEX_BASE_BRANCH`: ベースブランチ（デフォルト: main）

## 使うタイミング

- **使う:** PR作成前
- **使わない:** 各コミット時（開発中は自由にコミット）
