import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const PostBody = ({ children }: Props) => {
  return <div className='prose-base mx-auto min-h-screen max-w-2xl px-5 text-light xl:px-0'>{children}</div>;
};

export default PostBody;
