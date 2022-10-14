import { FC, MouseEventHandler } from 'react';

interface Props {
  text?: string;
  onClick?: () => void;
}

const PrimaryButton: FC<Props> = ({ text, onClick }) => {
  return (
    <div className="flex flex-col">
      <button
        className="bg-[#FDC62D] py-2 border-black border-2 font-bold hover:shadow-3xl"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default PrimaryButton;
