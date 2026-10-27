import type { Metadata } from "next";
import { notFound } from "next/navigation";

import BlogArticleView from "@/components/marketing/blogs/blog-article-view";
import { getBlogArticle } from "@/content/blogs/articles";

type BlogArticlePageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateMetadata({
    params,
}: BlogArticlePageProps): Promise<Metadata> {
    const { slug } = await params;
    const article = getBlogArticle(slug);

    return article
        ? { title: article.title, description: article.title }
        : { title: "Blog article not found" };
}

export default async function BlogArticlePage({
    params,
}: BlogArticlePageProps) {
    const { slug } = await params;
    const article = getBlogArticle(slug);

    if (!article) notFound();

    return <BlogArticleView article={article} />;
}
