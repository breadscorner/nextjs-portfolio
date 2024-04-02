import React, { Suspense } from "react";
import SuspenseLoader from "../components/loading";

export default function ProjectsLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="relative min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900 ">
        <Suspense fallback={<SuspenseLoader />}>{children}</Suspense>
		</div>
	);
}
