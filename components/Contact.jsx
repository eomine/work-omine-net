import Box from './Box';
import Link from './Link';

export default function Contact() {
  return (
    <Box>
      <ul>
        <li>
          eduardo.omine@gmail.com
        </li>
        <li>
          <Link href="https://linkedin.com/in/eomine" target="_blank" rel="noopener noreferrer">
            LinkedIn &rarr;
          </Link>
        </li>
        <li>
          <Link href="https://github.com/eomine" target="_blank" rel="noopener noreferrer">
            GitHub &rarr;
          </Link>
        </li>
      </ul>
    </Box>
  );
}
