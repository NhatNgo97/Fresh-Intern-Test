import React from 'react';
import Image from 'next/image';
import LoginBackgroundImg from '../../../assets/Illustration.png';

const LoginBackground: React.FC<{}> = (props) => {
  return (
    <div className="lg:w-[30%] md:w-[35%] hidden md:flex h-full relative">
      <Image objectFit="cover" layout="fill" src={LoginBackgroundImg} alt="" />
    </div>
  );
};

export default LoginBackground;
