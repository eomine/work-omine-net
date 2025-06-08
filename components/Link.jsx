import NextLink from "next/link";

export default function Link(props) {
  return (
    <NextLink className="inline-block no-underline text-red-400" {...props} />
  );
}
