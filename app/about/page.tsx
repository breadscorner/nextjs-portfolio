import { Navigation } from "../components/nav";

export default function Example() {
  return (
    <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 h-full">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl pb-16 border-b border-zinc-800">
          About
        </h1>
        <div className="text-zinc-400 mt-4 px-20 w-full">
          <p>
            I am interested in the world of development as it provides an
            interesting and rewarding process of solving real-life problems
            through technology. There is an appreciation for witnessing the
            tangible impact of well-crafted UI/UX designs, knowing they enhance
            user experiences. My enthusiasm for web development is drawn from
            the constant learning required to grow in this field. Moreover, the
            possibilities and opportunities in side projects excite me, offering
            more opportunities to apply and expand my skills in creative new
            ways.
          </p>{" "}
          <br />
          <p>
            I will complete my Full Stack Web Development program at the British
            Columbia Institute of Technology (BCIT) in April 2024. I have a
            comprehensive understanding of web development, covering both
            front-end and back-end technologies, while also expanding my design
            knowledge. Development in Express.js, Node.js, C#, Blazor and .Net
            are among the backend languages I am familiar with. In frontend,
            React.js, Next.js, Tailwind CSS, TypeScript, JavaScript, HTML and
            CSS. I have used MySQL, PostgreSQL, Drizzle ORM and NeonDB databases
            so far.
          </p>
          <br />
          <p>
            In addition to my professional pursuits, I have a broad range of
            interests that contribute to my personal growth. I find solace and
            inspiration through reading, constantly expanding my knowledge and
            exploring new perspectives. Fitness is another integral part of my
            healthy lifestyle, and I regularly exercise and participate in
            various sports throughout the seasons. Additionally, I am constantly
            seeking new adventures. I have always enjoyed exploring new places,
            whether on the road with my trailer - exploring Washington, Oregon,
            California, and Nevada - or by air to somewhere further away like
            Belize or somewhere in Europe.
          </p>
        </div>
      </div>
    </div>
  );
}
