import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kerubim SM — Full Stack Web Developer Portfolio",
    short_name: "Kerubim SM",
    description:
      "Kerubim SM is a Full Stack Web Developer & Software Engineer from Indonesia crafting high-performance web applications and digital experiences.",
    start_url: "/",
    display: "standalone",
    background_color: "#0c0c0e",
    theme_color: "#0c0c0e",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
