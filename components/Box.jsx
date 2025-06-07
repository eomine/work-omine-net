export default function Box({ children, as = 'div', ...props }) {
  const Element = as;
  return (
    <Element className="px-12 py-6 md:px-14 md:py-8 xl:px-16 xl:py-12 leading-tight text-gray-900 dark:text-gray-100 [&>h1,&>p,&_li]:mb-1" {...props}>{children}</Element>
  )
}
