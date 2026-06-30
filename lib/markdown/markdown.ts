import { readFile } from "fs/promises";
import path from "path";

import { remark } from "remark";
import html from "remark-html";

export async function getMarkdownContent(
  fileName: string,
): Promise<string> {
  const filePath = path.join(
    process.cwd(),
    "content",
    "lessons",
    fileName,
  );

  const markdown = await readFile(
    filePath,
    "utf8",
  );

  const processed = await remark()
    .use(html)
    .process(markdown);

  return processed.toString();
}