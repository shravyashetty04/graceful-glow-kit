import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shravya Shetty — Software Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Shravya Shetty, software engineer — experience, projects, skills and an interactive drivable 3D intro.",
      },
      { property: "og:title", content: "Shravya Shetty — Software Engineer" },
      {
        property: "og:description",
        content:
          "Portfolio of Shravya Shetty, software engineer — experience, projects, skills and an interactive drivable 3D intro.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/portfolio.html"
      title="Shravya Shetty — Software Engineer"
      className="fixed inset-0 h-full w-full border-0"
    />
  );
}
