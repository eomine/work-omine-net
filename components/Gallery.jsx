export function Gallery(props) {
  return (
    <div className="mb-4 md:mb-6 xl:mb-8 xl:columns-2 xl:gap-6" {...props} />
  );
}

export function GalleryImage({ alt = "", ...props }) {
  /* can't use next/image component with output: 'export' */
  /* eslint-disable-next-line @next/next/no-img-element */
  return <img className="mb-4 md:mb-6 xl:mb-8" alt={alt} {...props} />;
}
