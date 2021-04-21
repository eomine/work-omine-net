import Link from 'next/link';

export default function Hero({ data }) {
  return (
    <section className="max-w-2xl xl:max-w-5xl px-6 py-12 md:p-24 xl:p-40">
      <h1 className="font-bold mb-2 md:mb-3 xl:mb-4 text-4xl md:text-6xl xl:text-8xl text-gray-50">
        Eduardo Ōmine
      </h1>
      <p className="leading-tight mb-4 md:mb-5 xl:mb-6 text-2xl md:text-4xl xl:text-6xl text-gray-100">
        Senior front-end developer with <em>15 years of professional experience.</em>
      </p>
      <Link href="/about">
        <a className="text-base md:text-lg xl:text-xl text-gray-300 tracking-widest uppercase">Read full profile</a>
      </Link>
    </section>
  );
}
