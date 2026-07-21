import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return {
    name: `${profile.name} Portfolio`,
    short_name: "NB Portfolio",
    description: "Dynamics 365 CRM and Power Platform developer portfolio.",
    start_url: basePath ? `${basePath}/` : "/",
    display: "standalone",
    background_color: "#080b12",
    theme_color: "#080b12",
    icons: [
      {
        src: `${basePath}/icons/apple-touch-icon.svg`,
        sizes: "180x180",
        type: "image/svg+xml"
      }
    ]
  };
}
