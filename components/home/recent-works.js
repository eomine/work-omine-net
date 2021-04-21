import RecentWorksItem from "./recent-works-item";

export default function RecentWorks({ data }) {
  return (
    <section className="px-6 py-12 md:p-24 xl:p-40 dark:bg-gray-900">
      <div className="max-w-4xl">
        <h2 className="mb-8 text-xl md:text-3xl xl:text-5xl text-gray-400">
          Recent works
        </h2>
        <div>
          { data.map(work => <RecentWorksItem key={work.slug} data={work}/> )}
        </div>
      </div>
    </section>
  );
}
