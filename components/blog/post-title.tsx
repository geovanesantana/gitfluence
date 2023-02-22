import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className='mb-12 px-5 text-center text-5xl font-bold leading-tight tracking-tighter text-light md:text-left md:text-7xl md:leading-none lg:text-8xl xl:px-0'>
      {children}
    </h1>
  );
};

export default PostTitle;
