import Content from "../../components/Content";
import { Gallery, GalleryImage } from "../../components/Gallery";
import H1 from "../../components/H1";
import Link from "../../components/Link";
import Main from "../../components/Main";
import Meta from "../../components/Meta";
import Tag from "../../components/Tag";
import { getPostBySlug, getPostsSlugs } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";

export default function Work({ images, tech, title, content }) {
  return (
    <>
      <Meta title={title} />
      <Main>
        <Link href="/">&larr; Home</Link>
        <div className="h-8"></div>
        <H1>{title}</H1>
        <div className="mb-8">
          {tech.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </div>
        <Content content={content}></Content>
        <div className="h-8"></div>
        <Gallery>
          {images.map((image) => (
            <GalleryImage key={image} alt="" src={`/${image}`} />
          ))}
        </Gallery>
        <Link href="/">&larr; Home</Link>
      </Main>
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug("works", params.slug);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      ...post,
      content,
    },
  };
}

export async function getStaticPaths() {
  const slugs = getPostsSlugs("works");

  return {
    paths: slugs.map((slug) => {
      return {
        params: {
          slug: slug,
        },
      };
    }),
    fallback: false,
  };
}
