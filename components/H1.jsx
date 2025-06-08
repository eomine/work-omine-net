export default function H1({ children, as = "h1", ...props }) {
  const Element = as;
  return (
    <Element
      className="font-bold mb-0.5 md:mb-1 xl:mb-2 text-2xl md:text-3xl text-gray-900 dark:text-gray-100"
      {...props}
    >
      {children}
    </Element>
  );
}
