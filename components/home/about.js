import Link from 'next/link';

export default function About({ data }) {
  return (
    <section>
      <h2>
        About
      </h2>
      <p>
        Senior front-end developer with 15 years of professional experience.
      </p>
      <Link href="/about">
        Read more
      </Link>
    </section>
  );
}
