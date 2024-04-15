import type { Project } from "@/.contentlayer/generated";
import Link from "next/link";

type Props = {
  project: Project;
  views: number;
};

export const Article: React.FC<Props> = ({ project }) => {
  console.log(project.languages);

  const bgColorClass = project.projectType === "individual" ? "bg-[#302943]" : "bg-emerald-900";
  const hoverBgColorClass = project.projectType === "individual" ? "hover:bg-[#3a3153]" : "hover:bg-emerald-800";

  return (
    <Link href={`/projects/${project.slug}`}>
      <article className={`p-4 md:p-8 ${bgColorClass} ${hoverBgColorClass} h-full `}>
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
