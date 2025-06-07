export default function H3({ children, as = 'h3', ...props }) {
  const Element = as;
  return (
    <Element className="text-gray-700 dark:text-gray-300" {...props}>{children}</Element>
  )
}
