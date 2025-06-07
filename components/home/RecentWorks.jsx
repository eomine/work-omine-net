import H3 from "../H3";
import Main from "../Main";
import RecentWorksItem from "./RecentWorksItem";

export default function RecentWorks({ data }) {
  return (
    <Main as="section">
      <H3 as="h2">
        Recent works
      </H3>
      <div className="h-8"></div>
      <div>
        { data.map(work => (
          <RecentWorksItem key={work.slug} data={work} />
        ))}
      </div>
    </Main>
  );
}
