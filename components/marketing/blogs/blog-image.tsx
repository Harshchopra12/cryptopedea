interface BlogImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function BlogImage({
  src,
  alt,
  className = "",
}: BlogImageProps) {
  return (
    <div className={`cp-blog-image-wrapper ${className}`}>
      <img
        src={src}
        alt={alt}
        className="cp-blog-image"
      />
    </div>
  );
}