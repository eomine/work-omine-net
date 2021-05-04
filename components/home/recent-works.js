import RecentWorksItem from "./recent-works-item";
import styles from '../../styles/recent-works.module.css';

export default function RecentWorks({ data }) {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.h2}>
        Recent works
      </h2>
      <div>
        { data.map(work => <RecentWorksItem key={work.slug} data={work}/> )}
      </div>
    </section>
  );
}
