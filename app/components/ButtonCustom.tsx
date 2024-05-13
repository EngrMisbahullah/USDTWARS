import React, { ReactElement } from "react";

const ButtonCustom = ({
  children,
  className,
  color,
}: {
  children: ReactElement | string;
  className: string;
  color: string;
}) => {
  return (
    <button className={`btn ${className} ${color}`} type="button">
      {children}
    </button>
  );
};

export default ButtonCustom;
