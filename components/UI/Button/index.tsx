import React, { forwardRef, ForwardedRef } from "react";
import styles from "./styles.module.scss";

type Props = {
  children: React.ReactNode;
  variant: "primary" | "secondary";
  style?: React.CSSProperties;
  onClick?: (param?: any) => void;
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
};

const colorVariant: { [key: string]: string } = {
  primary: "bg-primary text-white border-primary",
  secondary: "bg-none text-primary border-primary",
};

const Button = React.forwardRef(function ButtonWrapper(
  {
    children,
    style,
    variant,
    disabled,
    className = "",
    onClick,
    isLoading,
    ...restProps
  }: Props,
  ref: ForwardedRef<HTMLButtonElement>,
): JSX.Element {
  const handleClick = () => {
    if (!disabled && !isLoading) {
      onClick && onClick();
    }
  };

  return (
    <button
      {...restProps}
      style={style}
      className={`${styles.button} outline-none min-w-full text-xxs font-bold px-16 py-6 border-2 rounded-base ${colorVariant[variant]}  ${className}`}
      disabled={disabled}
      onClick={handleClick}
      ref={ref}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
});

export default Button;
