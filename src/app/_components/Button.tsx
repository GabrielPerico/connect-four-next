import { ButtonHTMLAttributes, FC, memo } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  color?: keyof typeof btnClasses;
  name?: string;
}

const btnClasses = {
  red: "bg-red-400 text-white",
  yellow: "bg-yellow-400 text-black",
  white: "bg-white text-black",
} as const;

const Button: FC<ButtonProps> = memo(({ children, color, name, ...props }) => {
  const bgColor = btnClasses[color || "red"];

  return (
    <button
      {...props}
      className={twMerge(
        // Idle state classes
        "default-shadow flex w-full items-center justify-start gap-24 rounded-3xl p-5 text-start text-2xl font-bold uppercase transition-all duration-200 ease-in-out",
        bgColor,

        // Hover state classes
        "hover:hover-shadow",

        props.className,
      )}
      name={name}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
