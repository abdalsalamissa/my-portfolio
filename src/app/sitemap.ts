import type { MetadataRoute } from "next";

const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: baseUrl,
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/projects`,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/experience`,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            changeFrequency: "monthly",
            priority: 0.8,
        },
    ];
}