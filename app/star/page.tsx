import type { Metadata, Viewport } from "next"
import HoloCard from "@/components/HoloCard/HoloCard"

export const metadata: Metadata = {
  title: "Star Moment · Holo Card",
  description: "An interactive holographic card — drag to rotate, tap to flip.",
  // Unlisted: reachable by link only, and kept out of search results.
  robots: { index: false, follow: false },
}

export const viewport: Viewport = { colorScheme: "dark", themeColor: "#101113" }

export default function StarCardPage() {
  return <HoloCard />
}
