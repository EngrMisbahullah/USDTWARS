import React, { ReactNode } from "react";

const Card = ({
  children,
  className,
  Pad,
}: {
  children: ReactNode | string;
  className: string;
  Pad?: boolean;
}) => {
  return (
    <div className={` rounded-md ${className} ${!Pad && "p-[0.75rem]"} `}>
      {children}
    </div>
  );
};

export default Card;
