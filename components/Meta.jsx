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
      <meta charSet="utf-8" />
      <meta name="keywords" content="eduardo, omine, frontend, development, html, css, javascript, js, react, angular, typescript" />
      <meta name="description" content="Eduardo Ōmine | Front-end Developer" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta property="og:description" content="Eduardo Ōmine | Front-end Developer"/>
      <meta property="og:site_name" content="work.omine.net"/>
      <meta property="og:title" content="Eduardo Ōmine | Front-end Developer"/>
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="http://work.omine.net/"/>

      <link rel="preconnect" href="https://fonts.gstatic.com"/>
    </Head>
  )
}
