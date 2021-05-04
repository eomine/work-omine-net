import Link from 'next/link';
import styles from '../../styles/recent-works-item.module.css';

export default function RecentWorksItem({ data }) {
  return (
    <Link href="/works/[slug]" as={`/works/${data.slug}`}>
      <a className={styles.wrapper}>
        <span className={styles.title}>
          { data.title }
        </span>
        { data.tech.map(item => <span className="mr-4">{ item }</span>) }
      </a>
    </Link>
  );
}
