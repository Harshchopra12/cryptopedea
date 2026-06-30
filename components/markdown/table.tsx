import type { ComponentPropsWithoutRef } from "react";

function Table(props: ComponentPropsWithoutRef<"table">) {
  return (
    <div className="my-6 overflow-x-auto">
      <table
        className="w-full border-collapse rounded-lg border border-zinc-800 text-left"
        {...props}
      />
    </div>
  );
}

function Head(props: ComponentPropsWithoutRef<"thead">) {
  return (
    <thead
      className="bg-zinc-900"
      {...props}
    />
  );
}

function Body(props: ComponentPropsWithoutRef<"tbody">) {
  return (
    <tbody
      className="divide-y divide-zinc-800"
      {...props}
    />
  );
}

function Row(props: ComponentPropsWithoutRef<"tr">) {
  return (
    <tr
      className="hover:bg-zinc-900/50 transition-colors"
      {...props}
    />
  );
}

function Header(props: ComponentPropsWithoutRef<"th">) {
  return (
    <th
      className="border border-zinc-800 px-4 py-3 font-semibold text-white"
      {...props}
    />
  );
}

function Cell(props: ComponentPropsWithoutRef<"td">) {
  return (
    <td
      className="border border-zinc-800 px-4 py-3 text-gray-300"
      {...props}
    />
  );
}

const TableComponent = {
  Table,
  Head,
  Body,
  Row,
  Header,
  Cell,
};

export default TableComponent;