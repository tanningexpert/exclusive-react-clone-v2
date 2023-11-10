import FeaturedServices from "../components/FeaturedServices";
import Images from "../img/ImgIndex";

const Home = () => {
  return (
    <>
      <img src={Images.homeBanner} alt="Home Banner" className="homeBanner" />
      <FeaturedServices />
    </>
  );
};

export default Home;
