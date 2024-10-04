import Image from 'next/image';

const Logo = () => {
  return (
    <div>
      <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
    </div>
  );
};

export default Logo;