import PrimaryButton from "../components/PrimaryButton";

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
        <PrimaryButton>Text 214...</PrimaryButton>
        <PrimaryButton />
      </div>
    </>
  );
};

export default Aesthetics;
