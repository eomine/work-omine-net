import Link from 'next/link';

export default function RecentWorksItem({ data }) {
  return (
    <Link href="/works/[slug]" as={`/works/${data.slug}`}>
      <a className="block mb-8 py-2">
        <span className="block font-bold mb-2 text-7xl">
          { data.title }
        </span>
        { data.tech.map(item => <span className="mr-4">{ item }</span>) }
      </a>
    </Link>
  );
}
