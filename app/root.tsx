import { cssBundleHref } from "@remix-run/css-bundle";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import { getUser } from "~/session.server";
import stylesheet from "~/tailwind.css";
import leafletStyles from "leaflet/dist/leaflet.css";

import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: leafletStyles },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap",
  },
];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return json({ user: await getUser(request) });
};

export default function App() {
  useLoaderData<typeof loader>();

  return (
    <html lang="ja" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full bg-white">
        <div className="relative flex min-h-screen flex-col">
          <main className="flex-1">
            <Outlet />
          </main>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
