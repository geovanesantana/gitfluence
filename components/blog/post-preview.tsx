import Avatar from './avatar';
import DateFormatter from './date-formatter';
import CoverImage from './cover-image';
import Link from 'next/link';

type Author = {
  name: string;
  picture: string;
};

type Props = {
  title: string;
  coverImage: string;
  publishedAt: string;
  summary: string;
  author: Author;
  slug: string;
};

const PostPreview = ({ title, coverImage, publishedAt, summary, author, slug }: Props) => {
  return (
    <div>
      <div className='mb-5'>
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className='mb-3 text-3xl leading-snug'>
        <Link as={slug} href='/blog/[slug]' className='hover:underline'>
          {title}
        </Link>
      </h3>
      <div className='mb-4 text-lg'>
        <DateFormatter dateString={publishedAt} />
      </div>
      <p className='mb-4 text-lg leading-relaxed'>{summary}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
};

export default PostPreview;
