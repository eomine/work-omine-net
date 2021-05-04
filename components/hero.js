import Link from 'next/link';
import styles from '../styles/hero.module.css';

export default function Hero() {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.h1}>
        Eduardo Ōmine
      </h1>
      <p className={styles.text}>
        Senior front-end developer working with React, Redux, Angular, Typescript
      </p>
      <Link href="/about">
        <a className={styles.link}>Read full profile</a>
      </Link>
    </section>
  );
}
