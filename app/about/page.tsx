import type { Metadata } from "next";
import About_Us from "./aboutClient";

export const metadata: Metadata = {
  title: "Aurelium | About",
};

export default function AboutPage() {
  return <About_Us />;
}