import Link from 'next/link';
import common from '../../styles/common.module.css';
import styles from '../../styles/recent-works-item.module.css';

export default function RecentWorksItem({ data }) {
  return (
    <div className={styles.wrapper}>
      <div className={common.h1}>
        <Link href="/works/[slug]" as={`/works/${data.slug}`}>
          { data.title }
        </Link>
      </div>
      { data.tech.map(item => (
        <span key={item} className={common.tag}>
          { item }
        </span>
      )) }
    </div>
  );
}
