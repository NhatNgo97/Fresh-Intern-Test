import { FC } from 'react';
import { text } from 'stream/consumers';
import InputField from '../../common/InputField';
import PrimaryButton from '../../common/PrimaryButton';
import textStroke from './text-stroke.module.css';

const LoginForm: FC<{}> = () => {
  return (
    <div className="bg-white max-w-[90%] shadow-login w-[424px] h-[580px] flex flex-col p-12 justify-evenly border-black border-2">
      <div className="font-mono text-5xl font-semibold">
        <h2 className={textStroke.welcome}>WELCOME</h2>
        <h2>BACK</h2>
      </div>
      <form className="flex flex-col gap-4">
        <InputField name="email" placeHolder="Email" />
        <InputField name="password" type="password" placeHolder="Password " />
        <a href="#" className="hover:underline">
          Forget your password ?
        </a>
        <PrimaryButton text="Log in ->"></PrimaryButton>
      </form>
      <div className="flex justify-center">
        <h3>
          Don't have an account?
          <span> </span>
          <a href="#" className="hover:underline">
            Sign Up
          </a>
        </h3>
      </div>
    </div>
  );
};

export default LoginForm;
