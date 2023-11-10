import Images from "../img/ImgIndex";
import FeaturedButton from "./FeaturedServicesButton";

const FeaturedServices = () => {
  return (
    <section className="featuredServices">
      <div className="featuredServiceWrapper">
        <h1>FEATURED SERVICES</h1>
        <div className="featuredServiceBody">
          <div className="hormoneReplacementWrapper">
            <img
              src={Images.hormoneReplacement}
              alt="Hormone Replacement"
              className="featuredServiceImg"
            />
            <h2> HORMONE REPLACEMENT</h2>
            <ul className="serviceSubText">
              <li>Increase Energy</li>
              <li>Increase Weight Loss</li>
              <li>Hormone Pellet Therapy</li>
            </ul>
          </div>
          <div className="vaginalRejuvenationWrapper">
            <img
              src={Images.vaginalRejuvenation}
              alt="Vaginal Rejuvenation"
              className="featuredServiceImg"
            />
            <h2> VAGINAL REJUVENATION</h2>
            <ul className="serviceSubText">
              <li>Pain During Sex</li>
              <li>Vaginal Dryness</li>
              <li>Vaginal Tightening</li>
            </ul>
          </div>
          <div className="medicalWeightlossWrapper">
            <img
              src={Images.medicalWeightloss}
              alt="Medical Weightloss"
              className="featuredServiceImg"
            />
            <h2> MEDICAL WEIGHTLOSS</h2>
            <ul className="serviceSubText">
              <li>Lose Fat</li>
              <li>Improve Health</li>
              <li>Maintain Results</li>
            </ul>
          </div>
        </div>
        <div className="featuredServiceButtonContainer">
          <FeaturedButton>View All Services</FeaturedButton>
          <FeaturedButton>Request An Appointment</FeaturedButton>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
