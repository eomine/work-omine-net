import Link from 'next/link';

export default function RecentWorks({ data }) {
  return (
    <section>
      <h2>
        Recent works
      </h2>
      <div>
        { data.map(work => (
          <div key={work.slug}>
            <h2>{ work.title }</h2>
            <Link href="/works/[slug]" as={`/works/${work.slug}`}>
              View more
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
