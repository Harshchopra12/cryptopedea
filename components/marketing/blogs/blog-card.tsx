import type { BlogCardData } from "./blog.types";

export default function BlogCard({
  title,
  image,
  backgroundColor,
}: BlogCardData) {
  return (
    <article
      className="
        box-border
        h-[379px]
        w-[370px]
        overflow-hidden
        border-[2px]
        border-[#000926]
        shadow-[5px_5px_0_#000926]
      "
      style={{
        backgroundColor,
      }}
    >
      <div className="p-[10px]">
        <img
          src={image}
          alt=""
          className="
            block
            h-[235px]
            w-full
            border-[2px]
            border-[#000926]
            object-cover
          "
        />
      </div>

      <div className="px-[15px] pb-[15px]">
        <h3
          className="
            m-0
            font-[var(--cp-font-display)]
            text-[17px]
            font-bold
            leading-[1.3]
            text-[#000926]
          "
        >
          {title}
        </h3>
      </div>
    </article>
  );
}