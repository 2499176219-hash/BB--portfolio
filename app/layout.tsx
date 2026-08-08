import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://baixinyue-portfolio.smart-lark-3693.chatgpt.site"),
  title: "柏欣悦｜内容与影像作品集",
  description: "柏欣悦的新媒体运营、文字创作、影像与项目策划档案。",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "柏欣悦｜内容与影像作品集",
    description: "新媒体运营、文字创作、影像与项目策划档案。",
    type: "website",
    locale: "zh_CN",
    images: [{ url: "/og.jpg", width: 1731, height: 909, alt: "柏欣悦新媒体运营作品集" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "柏欣悦｜内容与影像作品集",
    description: "新媒体运营、文字创作、影像与项目策划档案。",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
