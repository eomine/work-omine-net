import Link from 'next/link';

export default function RecentWorksItem({ data }) {
  return (
    <Link href="/works/[slug]" as={`/works/${data.slug}`}>
      <a className="block font-bold mb-2 py-2 text-7xl">
        { data.title }
      </a>
    </Link>
  );
}
