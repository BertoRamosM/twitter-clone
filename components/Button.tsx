import React from "react";
interface ButtonProps {
  label?: string;
  secondary?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  outline?: boolean;
}

const Button = ({
  label,
  secondary,
  fullWidth,
  large,
  onClick,
  disabled,
  outline,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`disabled:opacity-70 disabled:cursor-not-allowed rounded-full font-semibold hover:opacity-80 transition border-2 
      ${fullWidth ? `w-full` : `w-fit`}
      ${secondary ? "bg-white" : "bg-sky-500"}
      ${secondary ? `text-black border-black` : `text-white border-sky-500`}
       ${secondary ? ` border-black` : `border-sky-500`}
       ${large ? "text-xl" : "text-md "}
       ${large ? " p-5" : "px-4"}
       ${large ? "py-4" : "py-2"}
       ${outline ? `bg-transparent` : ``}
        ${outline ? `border-white ` : ``}
         ${outline ? ` text-white` : ``}
    `}
    >
      {label}
    </button>
  );
};

export default Button;
