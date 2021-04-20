import Head from 'next/head';

export default function Meta({ title }) {
  const baseTitle = 'Eduardo Ōmine > Front-end Developer';
  const fullTitle = title
    ? `${title} > ${baseTitle}`
    : baseTitle;

  return (
    <Head>
      <title>
        { fullTitle }
      </title>
      <meta
        name="description"
        content=""
      />
    </Head>
  )
}
