export function Gallery(props) {
  return (
    <div className="mb-4 md:mb-6 xl:mb-8 xl:columns-2 xl:gap-6" {...props} />
  )
}

export function GalleryImage(props) {
  return <img className="mb-4 md:mb-6 xl:mb-8" {...props} />
}
