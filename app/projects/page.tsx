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

  const featured = allProjects.find(
    (project) => project.slug === "sst-social-app"
  )!;
  const top2 = allProjects.find((project) => project.slug === "travelmeet")!;
  const top3 = allProjects.find(
    (project) => project.slug === "laravel-live-scores"
  )!;
  const sorted = allProjects.filter((p) => p.published);
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
    <div className="relative pb-16 mx-[100px]">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 lg:px-8 md:space-y-16 md:pt-12 lg:pt-24">
        <div className="mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <div className="flex items-center">
            <div className="mr-4 mt-8 w-full">
              <img
                className="h-full mt-4"
                src="https://streak-stats.demolab.com?user=breadscorner&theme=dracula"
                alt="GitHub Streak"
              />
            </div>
            <div className="flex flex-col items-center mt-8">
              <p className="text-zinc-400 mb-4">
                I have challenged myself to 100 days of coding. Upon successful
                completion, I will be writing about my experience to share with
                other developers.
              </p>
              <p className="text-zinc-400">
                Below are some of the projects I have worked on throughout this
                personal campaign.
              </p>
            </div>
          </div>
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
