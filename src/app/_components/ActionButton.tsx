import { ButtonHTMLAttributes } from "react";

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const ActionButton: React.FC<ActionButtonProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button
      className="flex rounded-full bg-purple-300 px-5 py-2.5 text-base font-bold uppercase text-white transition hover:bg-red-400"
      {...props}
    >
      {children}
    </button>
  );
};

export default ActionButton;
