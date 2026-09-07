import { GoogleTagManager } from "@next/third-parties/google"
import type { Metadata, Viewport } from "next"
import "../styles/globals.css"

export const metadata: Metadata = {
  title: "TaterBoom",
  description: "TaterBoom’s projects and links.",
  icons: { icon: "/favicon.ico" },
}

export const viewport: Viewport = { colorScheme: "dark", themeColor: "#090b0d" }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <GoogleTagManager gtmId="GTM-KKSZHSL" />
      </body>
    </html>
  )
}
