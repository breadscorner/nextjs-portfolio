import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Redis } from "@upstash/redis";
import { Eye } from "lucide-react";

const redis = Redis.fromEnv();

export const revalidate = 60;
export default async function ProjectsPage() {
  const views = (
    await redis.mget<number[]>(
      ...allProjects.map((p) => ["pageviews", "projects", p.slug].join(":"))
    )
  ).reduce((acc, v, i) => {
    acc[allProjects[i].slug] = v ?? 0;
    return acc;
  }, {} as Record<string, number>);

  const featured = allProjects.find((project) => project.slug === "sst-social-app")!;
  const top2 = allProjects.find((project) => project.slug === "travelmeet")!;
  const top3 = allProjects.find((project) => project.slug === "laravel-live-scores")!;
  const sorted = allProjects
    .filter((p) => p.published)
    // .sort(
    //   (a, b) =>
    //     new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
    //     new Date(a.date ?? Number.POSITIVE_INFINITY).getTime()
    // );

  // Filter out the featured projects
  const featuredProjects = sorted.filter((project) =>
    [featured.slug, top2.slug, top3.slug].includes(project.slug)
  );

  // Filter out the remaining projects
  const remainingProjects = sorted.filter(
    (project) => ![featured.slug, top2.slug, top3.slug].includes(project.slug)
  );

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            This is a collection of my personal projects, some of which I have
            worked on with others. I hope you find something interesting here.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        {/* Display the first row with the featured projects */}
        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <Card key={project.slug}>
              <Article project={project} views={views[project.slug] ?? 0} />
            </Card>
          ))}
        </div>

        {/* Display the remaining projects */}
        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-2 lg:grid-cols-3">
          {remainingProjects.map((project) => (
            <Card key={project.slug}>
              <Article project={project} views={views[project.slug] ?? 0} />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
