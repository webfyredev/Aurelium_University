import { useRouter } from "next/router";
import { useEffect } from "react";

export default function HashScrollHandler() {
  const router = useRouter();

  useEffect(() => {
    if (!router.asPath.includes("#")) return;

    const hash = router.asPath.split("#")[1];
    const element = document.getElementById(hash);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [router.asPath]);

  return null;
}