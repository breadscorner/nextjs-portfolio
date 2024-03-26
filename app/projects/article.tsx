import type { Project } from "@/.contentlayer/generated";
import Link from "next/link";
// import { Eye, View } from "lucide-react";

type Props = {
  project: Project;
  views: number;
};

export const Article: React.FC<Props> = ({ project, views }) => {
  console.log(project.languages);

  const bgColorClass = project.projectType === "individual" ? "bg-[#302943]" : "bg-emerald-900";
  const hoverBgColorClass = project.projectType === "individual" ? "hover:bg-[#3a3153]" : "hover:bg-emerald-800";

  return (
    <Link href={`/projects/${project.slug}`}>
      <article className={`p-4 md:p-8 ${bgColorClass} ${hoverBgColorClass} h-full `}>
        {/* <div className="flex justify-between gap-2 items-center"> */}
          {/* <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
						{project.date ? (
							<time dateTime={new Date(project.date).toISOString()}>
								{Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
									new Date(project.date),
								)}
							</time>
						) : (
							<span>SOON</span>
						)}
					</span> */}
        {/* </div> */}
        <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
          {project.title}
        </h2>
        <p className="z-20 mt-4 text-xs  duration-1000 text-zinc-400 group-hover:text-zinc-200 ">
          {project.languages}
        </p>
        <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-200 group-hover:text-zinc-200 ">
          {project.description}
        </p>
      </article>
    </Link>
  );
};
