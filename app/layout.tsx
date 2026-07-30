import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "柏欣悦｜新媒体运营作品集",
  description: "柏欣悦的新媒体运营、内容策划、影像、平面设计与摄影作品集。",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
