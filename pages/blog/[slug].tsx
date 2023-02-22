import Container from '@/components/blog/container';
import PostHeader from '@/components/blog/post-header';
import PostTitle from '@/components/blog/post-title';
import Layout from '@/components/layout';
import { allPosts, Post } from 'contentlayer/generated';
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Head from 'next/head';
import Link from 'next/link';
import router, { useRouter } from 'next/router';
import { title } from 'process';
import ErrorPage from 'next/error';
import PostBody from '@/components/blog/post-body';

// Generate static paths for all posts
export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const paths = allPosts.map((post) => post.slug);
  return {
    paths,
    fallback: false,
  };
}

// Find post with matching slug and return it as props to the page
export async function getStaticProps({ params }: GetStaticPropsContext): Promise<GetStaticPropsResult<{ post: Post }>> {
  const post = allPosts.find((post) => post._raw.flattenedPath === params?.slug);

  // Redirect to homepage if post not found
  return typeof post === 'undefined'
    ? {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    : {
        props: {
          post,
        },
      };
}

const PostLayout: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ post }) => {
  // Get MDX component for post
  const Component = useMDXComponent(post.body.code);
  const router = useRouter();
  const title = `${post.title} | Next.js Blog Example with `;
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Layout theme={'bg-slate'}>
        <Container>
          {router.isFallback ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <>
              <article className='mb-32'>
                <Head>
                  <title>{title}</title>
                  <meta property='og:image' content={post.coverImage} />
                </Head>
                <PostHeader
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.publishedAt}
                  author={post.author}
                />
                <PostBody>
                  <Component />
                </PostBody>
              </article>
            </>
          )}
        </Container>
      </Layout>
    </>
  );
};

export default PostLayout;
