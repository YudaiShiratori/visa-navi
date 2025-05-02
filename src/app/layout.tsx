import "~/styles/globals.css";

import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
	title: "Next.js App",
	description: "Next.js App",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const notoSansJP = Noto_Sans_JP({
	subsets: ["latin"],
	variable: "--font-noto-sans-jp",
	display: "swap",
	weight: ["400", "500", "700"],
});

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="ja" className={`${notoSansJP.variable}`}>
			<body>
				<TRPCReactProvider>{children}</TRPCReactProvider>
			</body>
		</html>
	);
}
