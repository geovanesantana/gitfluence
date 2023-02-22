import HeroPost from '@/components/blog/hero-post';
import MoreStories from '@/components/blog/more-stories';
import Layout from '@/components/layout';
import { allPosts, Post } from 'contentlayer/generated';
import type { GetStaticPropsResult, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { orderBy, sortBy } from 'lodash';
import Container from '@/components/blog/container';

console.log('allPosts', allPosts.length);

export async function getStaticProps(): Promise<GetStaticPropsResult<{ posts: Post[] }>> {
  return { props: { posts: allPosts } };
}

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ posts }) => {
  const postsOrderByDate = orderBy(posts, (post) => new Date(post.publishedAt), ['desc']);
  const heroPost = postsOrderByDate[0];
  const morePosts = postsOrderByDate.slice(1);

  return (
    <div>
      <Layout theme={'bg-slate'}>
        <Head>
          <title>{`Next.js Blog Example with `}</title>
        </Head>

        {/* <div className='absolute left-8 bottom-auto top-2 h-20 w-full -rotate-12 bg-hero-blog opacity-5 blur-3xl' /> */}
        <Container>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              publishedAt={heroPost.publishedAt}
              author={heroPost.author}
              slug={heroPost.slug}
              summary={heroPost.summary}
            />
          )}

          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </div>
  );
};

export default Home;
