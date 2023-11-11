import PrimaryButton from "../components/PrimaryButton";
import AestheticsServiceContainer from "../components/AestheticsServiceContainer";
import Images from "../img/ImgIndex.js";
import * as data from "../data.js";

const Aesthetics = () => {
  return (
    <>
      <h1 className="aestheticsTitle">Aesthetic Services</h1>
      <p className="aestheticsParagraph">
        Offering medical grade skin care and advanced non-surgical solutions
        that are safe for ALL skin types.
      </p>
      <h2 className="aestheticsScheduleTitle">Schedule Your Consult</h2>
      <div className="primaryButtonContainer">
        <PrimaryButton>Call / Text 214-702-6581</PrimaryButton>
        <PrimaryButton>Request An Appointment</PrimaryButton>
      </div>

      <div className="aestheticsServiceGrid">
        <AestheticsServiceContainer
          imgSrc={Images.footDetox}
          title="Foot Detox Bath"
          price="$50"
          time="30 mins"
          schedule="1 - 6 Sessions"
          summary="A relaxing and rejuvenating spa service that aims to promote overall well-being by helping to rid the body of toxins and impurities through the feet."
        />
        <AestheticsServiceContainer
          imgSrc={Images.vaginalRejuvenation}
          title={data.vaginalRejuvenation.title}
          price={data.vaginalRejuvenation.price}
          time={data.vaginalRejuvenation.length}
          schedule={data.vaginalRejuvenation.schedule}
          summary="Isn't it time you enjoyed sex again? Vaginal rejuvenation can help restore vaginal tightness, reverse vaginal dryness, improve bladder control and give plumper labial appearance without surgery or significant downtime."
        />
        <AestheticsServiceContainer
          imgSrc={Images.celluliteReduction}
          title="Cellulite Reduction Non Invasive"
          price="$100"
          time="90 mins"
          schedule="4 - 8 Sessions"
          summary="Getting rid of cellulite can be expensive and painful, but we have an affordable alternative! Our non-invasive skin tightening treatment uses the latest in RF technology to improve skin tone, texture, and firmness for results that last up to 12 months."
        />
        <AestheticsServiceContainer
          imgSrc={Images.celluliteReductionRf}
          title="Cellulite Reduction RF Microneedling"
          price="$300"
          time="90 mins"
          schedule="1 - 3 Sessions"
          summary="We all want a body free from lumps and bumps- so get rid of your cellulite with our revolutionary new treatment! This RF Microneedling treatment melts the fat and increases collagen production to help leave the skin on your thighs, hips an butt smooth, firm and cellulite free."
        />
        <AestheticsServiceContainer
          imgSrc={Images.hormonePellet}
          title="Hormone Pellet Therapy For Women"
          price="$250"
          time="30 mins"
          schedule="Every 3-4 months"
          summary="Hormone Pellet Therapy for women offers relief from symptoms like hot flashes, vaginal dryness and mood swings without the risks or side effects of conventional hormone replacement therapy (HRT). This treatment consists of inserting small pellets under your skin that deliver consistent levels of hormones to the body for 3-4 months."
        />
        <AestheticsServiceContainer
          imgSrc={Images.vitaminB12}
          title="Vitamin B12"
          price="$25"
          time="10 mins"
          schedule="Every 1-2 weeks"
          summary="Eating a healthy diet and exercising regularly is the best way to keep your body in good shape, but sometimes you just need that extra boost. A vitamin B12 injection is a fast way to get your body back on track with weight loss, increased energy levels, better skin health and more!"
        />
        <AestheticsServiceContainer
          imgSrc={Images.skinnyShot}
          title="Skinny Shot"
          price="$35"
          time="10 mins"
          schedule="Every 1-2 weeks"
          summary="Struggling to rid yourself of a few extra pounds? The Skinny Shot is specially formulated to help suppress appetite, boost energy levels and maximize the liver's fat burning functions. It is highly effective for people who want to lose 30-50 pounds and for anyone who has hit a plateau in their attempts to lose weight."
        />
        <AestheticsServiceContainer
          imgSrc={Images.stretchMarkRemoval}
          title="Stretch Mark Removal"
          price="$350"
          time="90 mins"
          schedule="1 - 3 Sessions"
          summary="Showcase your curves like never before with the most innovative, cutting-edge technology for eliminating stretch marks."
        />
      </div>
    </>
  );
};

export default Aesthetics;
