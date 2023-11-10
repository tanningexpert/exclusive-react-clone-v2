import { Children } from "react";

const PrimaryButton = ({ children }) => {
  return (
    <>
      <button className="primaryButton">{children}</button>
    </>
  );
};

export default PrimaryButton;
