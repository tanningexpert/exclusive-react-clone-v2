import FeaturedServices from "../components/FeaturedServices";
import Images from "../img/ImgIndex";

const Home = () => {
  return (
    <>
      <img src={Images.homeBanner} alt="Home Banner" className="homeBanner" />
      {/*TESTIMONIALS*/}
      <div className="testimonialWrapper">
        <p className="testimonialIntro">See what our patients are saying </p>
        <button className="testimonialButton">TESTIMONIALS</button>
      </div>
      {/*MANTRA*/}
      <h1 className="mantra">
        <span className="health">Health by Medicine</span>{" "}
        <span className="beauty">Beauty by Nature</span>
      </h1>
      <p className="intro">
        At Exclusively Gyn &amp; Aesthetics, we offer a wide range of services,
        from gynecological medicine, to non-invasive aesthetic procedures, that
        help our patients look and feel their best. Whether you want to improve
        your health, the quality of your skin or the shape of your body, our
        highly trained professionals will create a customized treatment plan
        that delivers superior results.
      </p>
      <FeaturedServices />
      {/*ABOUT US*/}
      <div className="aboutUsWrapper">
        <h1>About us</h1>
        <div className="aboutUsBody">
          <div className="aboutLeft">
            <img
              src={Images.physicianPhoto}
              className="providerPhoto"
              alt="Physician Photo"
            />
          </div>
          <div className="aboutRight">
            <p>
              <span className="aboutUsTitle">
                {" "}
                Jennifer C. Brooks MD, FACOG
              </span>
            </p>
            <p>
              What sets Dr. Brooks apart is her dedication to providing
              individualized services for every patient that enters her
              practice.
              <br />
              <br />
              Listening to her patients’ concerns, treating them with
              compassion, and collaborating with each patient to create a
              treatment plan according to their needs – that is her mission.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
