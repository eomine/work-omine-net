import Box from "./Box";
import H3 from "./H3";
import Link from "./Link";

export default function Hero() {
  return (
    <Box as="section">
      <H3 as="h1">Eduardo Ōmine</H3>
      <p>
        Senior front-end developer
        <br />
        React, Redux, Typescript
      </p>
      <p>
        <Link href="/about">About &rarr;</Link>
      </p>
      <p>
        <Link href="/cv-eduardo-omine-2025.pdf">CV &rarr;</Link>
      </p>
    </Box>
  );
}
