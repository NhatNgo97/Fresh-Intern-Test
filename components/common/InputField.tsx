import { FC, HTMLInputTypeAttribute } from 'react';

interface Props {
  name: string;
  type?: HTMLInputTypeAttribute;
  placeHolder: string;
  isRequired?: boolean;
}

const InputField: FC<Props> = ({ name, type, isRequired, placeHolder }) => {
  return (
    <div className="flex flex-col gap-2">
      <input
        type={type || 'text'}
        name={name}
        className=" w-full p-2 px-3 border-[1px] border-black focus:bg-white transition-all focus:text-black text-white focus:outline-[#fdc62d] hover:outline-[#fdc62d] hover:outline-2 outline-offset-1 bg-[#FCFCFD]"
        required={isRequired}
        placeholder={placeHolder}
      />
    </div>
  );
};

export default InputField;
