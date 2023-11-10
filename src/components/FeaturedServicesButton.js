import { Children } from "react";

const FeaturedButton = ({ children }) => {
  return (
    <>
      <button className="featuredButton">{children}</button>
    </>
  );
};

export default FeaturedButton;
