import Box from "./Box";

export default function Footer() {
  return (
    <Box as="footer">
      <span className="text-xs text-gray-500">
        Built with{" "}
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>{" "}
        and{" "}
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
          Next.js
        </a>
      </span>
    </Box>
  );
}
