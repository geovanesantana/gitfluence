import Image from 'next/image';

type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className='flex items-center px-5 xl:px-0'>
      <Image src={picture} className='mr-4 h-12 w-12 rounded-full' alt={name} width={48} height={48} />
      <div className='text-xl font-bold text-gray'>{name}</div>
    </div>
  );
};

export default Avatar;
