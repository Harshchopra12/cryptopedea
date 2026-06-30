import type { ComponentPropsWithoutRef } from "react";

function Unordered(props: ComponentPropsWithoutRef<"ul">) {
  return (
    <ul
      className="my-5 ml-6 list-disc space-y-2 text-gray-300"
      {...props}
    />
  );
}

function Ordered(props: ComponentPropsWithoutRef<"ol">) {
  return (
    <ol
      className="my-5 ml-6 list-decimal space-y-2 text-gray-300"
      {...props}
    />
  );
}

function Item(props: ComponentPropsWithoutRef<"li">) {
  return (
    <li
      className="leading-7 marker:text-emerald-400"
      {...props}
    />
  );
}

const List = {
  Unordered,
  Ordered,
  Item,
};

export default List;