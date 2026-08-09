import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://baixinyue-portfolio.smart-lark-3693.chatgpt.site"),
  title: "柏欣悦的个人作品集",
  description: "柏欣悦的新媒体运营、内容策划、影像、平面设计与摄影作品集。",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "柏欣悦的个人作品集",
    description: "运营案例、文字图像、影像创作与项目策划作品集。",
    type: "website",
    locale: "zh_CN",
    images: [{ url: "/og.jpg", width: 1731, height: 909, alt: "柏欣悦的个人作品集" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "柏欣悦的个人作品集",
    description: "运营案例、文字图像、影像创作与项目策划作品集。",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
