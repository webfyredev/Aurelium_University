import type { Metadata } from "next";
import About_Us from "./aboutClient";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Aurelium | About",
};

export default function AboutPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <About_Us />
    </Suspense>
  )
}