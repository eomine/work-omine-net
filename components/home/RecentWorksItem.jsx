import Link from "next/link";
import H1 from "../H1";
import Tag from "../Tag";

export default function RecentWorksItem({ data }) {
  return (
    <div className="block mb-6 md:mb-8 xl:mb-10">
      <H1 as="div">
        <Link href={`/works/${data.slug}`}>{data.title}</Link>
      </H1>
      {data.tech.map((item) => (
        <Tag key={item}>{item}</Tag>
      ))}
    </div>
  );
}
