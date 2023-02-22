import PostPreview from './post-preview';

type Author = {
  name: string;
  picture: string;
};

type Post = {
  slug: string;
  title: string;
  publishedAt: string;
  coverImage: string;
  author: Author;
  summary: string;
};

type Props = {
  posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      <h2 className='mb-8 text-5xl font-bold leading-tight tracking-tighter md:text-7xl'>More Stories</h2>
      <div className='mb-32 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32'>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            publishedAt={post.publishedAt}
            author={post.author}
            slug={post.slug}
            summary={post.summary}
          />
        ))}
      </div>
    </section>
  );
};

export default MoreStories;
