import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import InputField from '../components/common/InputField';
import PrimaryButton from '../components/common/PrimaryButton';
import LoginBackground from '../components/view/LoginPage/LoginBackground';
import LoginForm from '../components/view/LoginPage/LoginForm';

// TODO: Task 1
// Build a basic log-in page with the design provided by Fresh.
// https://www.figma.com/file/x8bsnfDnTVRqW8mvSPZKYx/Fresh-Engineering-Intern?node-id=1%3A12

// TODO: Task 2
// Make sure the page is responsive.
// A mobile design will be provided for your reference.
// https://www.figma.com/file/x8bsnfDnTVRqW8mvSPZKYx/Fresh-Engineering-Intern?node-id=1%3A99
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex h-screen w-screen flex-row font-grotesk">
        <div className="flex-1 bg-black flex justify-center items-center">
          <LoginForm />
        </div>
        <LoginBackground />
      </div>
    </>
  );
};

export default Home;
