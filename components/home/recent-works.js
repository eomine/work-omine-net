import RecentWorksItem from "./recent-works-item";
import common from '../../styles/common.module.css';

export default function RecentWorks({ data }) {
  return (
    <section className={common.main}>
      <h2 className={common.h3}>
        Recent works
      </h2>
      <div className="h-4"></div>
      <div>
        { data.map(work => (
          <RecentWorksItem key={work.slug} data={work} />
        ))}
      </div>
    </section>
  );
}
