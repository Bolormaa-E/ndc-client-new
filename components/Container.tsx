import React, { ReactElement } from "react";
interface Props {
  children: ReactElement;
}

const Container = ({ children }: Props) => {
  return <div className="max-w-screen-2xl mx-auto md:px-6">{children}</div>;
};

export default Container;