import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getPostBySlug, getAllPosts } from "lib/api";
import markdownToHtml from "lib/markdownToHtml";
import Article from "components/Articles/Article";

const path = "nasze-realizacje/akwaria-slodkowodne";

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return <Article {...post} />;
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(
    "slodkowodne",
    [
      "title",
      "date",
      "slug",
      "author",
      "content",
      "ogImage",
      "coverImage",
      "excerpt",
    ],
    path
  );

  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

// export async function getStaticPaths() {
//   const posts = getAllPosts(["slug"], path);

//   return {
//     paths: posts.map((post) => {
//       return {
//         params: {
//           slug: post.slug,
//         },
//       };
//     }),
//     fallback: false,
//   };
// }
