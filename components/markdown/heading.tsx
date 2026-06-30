import type { ComponentPropsWithoutRef } from "react";

type HeadingProps = ComponentPropsWithoutRef<"h1">;

function H1(props: HeadingProps) {
  return (
    <h1
      className="mt-10 mb-6 text-4xl font-extrabold tracking-tight text-white"
      {...props}
    />
  );
}

function H2(props: ComponentPropsWithoutRef<"h2">) {
  return (
    <h2
      className="mt-10 mb-4 text-3xl font-bold text-white"
      {...props}
    />
  );
}

function H3(props: ComponentPropsWithoutRef<"h3">) {
  return (
    <h3
      className="mt-8 mb-3 text-2xl font-semibold text-white"
      {...props}
    />
  );
}

const Heading = {
  H1,
  H2,
  H3,
};

export default Heading;