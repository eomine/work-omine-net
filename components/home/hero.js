import Link from 'next/link';

export default function Hero({ data }) {
  return (
    <section className="max-w-6xl p-40">
      <h1 className="font-bold mb-4 text-8xl text-gray-50">
        Eduardo Ōmine
      </h1>
      <p className="leading-tight mb-6 text-6xl text-gray-100">
        Senior front-end developer with <em>15 years of professional experience.</em>
      </p>
      <Link href="/about">
        <a className="text-xl text-gray-300 tracking-widest uppercase">Read full profile</a>
      </Link>
    </section>
  );
}
