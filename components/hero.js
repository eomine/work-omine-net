import Link from 'next/link';
import common from '../styles/common.module.css';

export default function Hero() {
  return (
    <section className={common.box}>
      <h1 className={common.h3}>
        Eduardo Ōmine
      </h1>
      <p className={common.text}>
        Senior front-end developer<br/>
        React, Redux, Typescript
      </p>
      <p>
        <Link href="/about">
          <a className={common.link}>About &rarr;</a>
        </Link>
      </p>
      <p>
        <Link href="/cv.pdf">
          <a className={common.link}>CV &rarr;</a>
        </Link>
      </p>
    </section>
  );
}
