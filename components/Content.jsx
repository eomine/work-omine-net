export default function Content({ content, ...props }) {
  return (
    <div className="xl:text-2xl text-gray-900 dark:text-gray-100 [&_p]:mb-4 [&_p]:md:mb-6 [&_p]:xl:mb-8 [&_a]:text-red-400 [&_a]:underline [&>ul]:list-disc"  dangerouslySetInnerHTML={{ __html: content }} {...props} />
  )
}
