import Link from 'next/link';
import common from '../styles/common.module.css';

export default function Hero() {
  return (
    <section className={common.box}>
      <h1 className={common.h3}>
        Eduardo Ōmine
      </h1>
      <p>
        Senior front-end developer<br/>
        React, Redux, Typescript
      </p>
      <p>
        <Link href="/about" className={common.link}>
          About &rarr;
        </Link>
      </p>
      <p>
        <Link href="/cv-eduardo-omine-2025.pdf" className={common.link}>
          CV &rarr;
        </Link>
      </p>
    </section>
  );
}
