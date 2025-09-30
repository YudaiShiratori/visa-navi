import {
  BookOpen,
  Box,
  Code,
  ExternalLink,
  Palette,
  Ruler,
  Sparkles,
  Type,
  Zap,
} from "lucide-react";
import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import {
  PageCard,
  PageGrid,
  PageHero,
  PageSection,
  PageTemplate,
} from "~/components/templates/page-template";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <PageTemplate
        description="Next.js フルスタック開発テンプレート - T3 Stack with デザインシステム"
        title="Sun Next.js Template"
      >
        {/* ヒーローセクション */}
        <PageHero
          actions={
            <>
              <Link href="/design-system">
                <Button className="shadow-md" size="lg">
                  <Box className="mr-2 size-4" />
                  デザインシステムを見る
                </Button>
              </Link>
              <Link href="https://create.t3.gg" target="_blank">
                <Button size="lg" variant="outline">
                  <BookOpen className="mr-2 size-4" />
                  ドキュメント
                  <ExternalLink className="ml-2 size-3" />
                </Button>
              </Link>
            </>
          }
          badges={[
            {
              label: "フルスタックテンプレート",
              icon: <Sparkles className="size-3" />,
              variant: "secondary",
              className: "bg-primary/20 text-primary",
            },
            {
              label: "T3 Stack",
              icon: <Zap className="size-3" />,
              variant: "secondary",
              className: "bg-secondary/20 text-secondary-foreground",
            },
          ]}
          description={
            <>
              TypeScript、tRPC、Tailwind CSSを統合した
              <br />
              エンタープライズグレードのNext.jsテンプレート
            </>
          }
          gradient="primary"
          title={
            <>
              モダンな開発体験を
              <br />
              すぐに始められる
            </>
          }
        />

        {/* デザインシステムセクション */}
        <PageSection
          description="アプリケーション全体で一貫性のあるデザインを実現"
          title="デザインシステム"
        >
          <PageGrid cols={2} gap="lg">
            <Link className="group" href="/design-system/colors">
              <PageCard
                description="OKLCH色空間による美しいカラーパレット"
                title="カラーシステム"
                variant="elevated"
              >
                <div className="flex items-center justify-between">
                  <Palette className="size-10 text-primary transition-transform group-hover:scale-110" />
                  <div className="flex gap-1.5">
                    <div className="size-8 rounded-md bg-primary shadow-sm" />
                    <div className="size-8 rounded-md bg-secondary shadow-sm" />
                    <div className="size-8 rounded-md bg-accent shadow-sm" />
                  </div>
                </div>
              </PageCard>
            </Link>
            <Link className="group" href="/design-system/typography">
              <PageCard
                description="読みやすさを追求したタイポグラフィシステム"
                title="タイポグラフィ"
                variant="elevated"
              >
                <div className="flex items-center justify-between">
                  <Type className="size-10 text-primary transition-transform group-hover:scale-110" />
                  <div className="space-y-1 text-right">
                    <div className="font-bold text-foreground text-lg">Aa</div>
                    <div className="text-muted-foreground text-xs">
                      Noto Sans JP
                    </div>
                  </div>
                </div>
              </PageCard>
            </Link>
            <Link className="group" href="/design-system/spacing">
              <PageCard
                description="統一された余白設計による調和のとれたレイアウト"
                title="スペーシング"
                variant="elevated"
              >
                <div className="flex w-full items-center justify-between">
                  <Ruler className="size-10 text-primary transition-transform group-hover:scale-110" />
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-2 rounded bg-muted" />
                    <div className="h-8 w-4 rounded bg-muted" />
                    <div className="h-8 w-6 rounded bg-muted" />
                    <div className="h-8 w-8 rounded bg-primary" />
                  </div>
                </div>
              </PageCard>
            </Link>
            <Link className="group" href="/design-system/components">
              <PageCard
                description="再利用可能なUIコンポーネントライブラリ"
                title="コンポーネント"
                variant="elevated"
              >
                <div className="flex w-full items-center justify-between">
                  <Code className="size-10 text-primary transition-transform group-hover:scale-110" />
                  <div className="flex flex-col gap-1.5">
                    <div className="h-6 w-16 rounded-md border bg-background shadow-sm" />
                    <div className="h-6 w-20 rounded-md border-2 border-primary/20 bg-primary/10" />
                  </div>
                </div>
              </PageCard>
            </Link>
          </PageGrid>
        </PageSection>

        {/* T3 スタックリソース */}
        <PageSection
          description="強力なフルスタック開発のためのツールとドキュメント"
          title="リソース"
        >
          <PageGrid cols={2} gap="lg">
            <Link
              className="group"
              href="https://create.t3.gg/en/usage/first-steps"
              target="_blank"
            >
              <PageCard
                description="データベースと認証のセットアップガイド"
                title="First Steps"
                variant="elevated"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-2.5 transition-transform group-hover:scale-110">
                      <BookOpen className="size-6 text-primary" />
                    </div>
                    <Badge variant="outline">ガイド</Badge>
                  </div>
                  <ExternalLink className="size-5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </PageCard>
            </Link>
            <Link
              className="group"
              href="https://create.t3.gg/en/introduction"
              target="_blank"
            >
              <PageCard
                description="T3 Stackの詳細ドキュメント"
                title="Documentation"
                variant="elevated"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-secondary/10 p-2.5 transition-transform group-hover:scale-110">
                      <BookOpen className="size-6 text-secondary-foreground" />
                    </div>
                    <Badge variant="outline">ドキュメント</Badge>
                  </div>
                  <ExternalLink className="size-5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </PageCard>
            </Link>
          </PageGrid>
        </PageSection>

        {/* tRPC デモ */}
        <PageSection
          description="サーバーとクライアント間の型安全な通信"
          title="tRPC デモ"
        >
          <PageGrid cols={2} gap="lg">
            <PageCard
              description="tRPCによるエンドツーエンドの型安全性を体験"
              title="サーバー通信テスト"
              variant="elevated"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Badge
                    className="bg-primary/10 text-primary"
                    variant="secondary"
                  >
                    <Zap className="mr-1 size-3" />
                    型安全
                  </Badge>
                  <span className="text-muted-foreground text-xs">
                    TypeScript
                  </span>
                </div>
                <div className="rounded-lg border bg-muted/30 p-4 shadow-inner">
                  <div className="space-y-2">
                    <div className="font-medium text-foreground text-xs">
                      Response:
                    </div>
                    <p className="font-mono text-primary text-sm">
                      {hello ? hello.greeting : "Loading tRPC query..."}
                    </p>
                  </div>
                </div>
              </div>
            </PageCard>

            {/* 最新投稿 */}
            <LatestPost />
          </PageGrid>
        </PageSection>
      </PageTemplate>
    </HydrateClient>
  );
}
