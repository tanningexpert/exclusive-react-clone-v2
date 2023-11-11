import Images from "../img/ImgIndex";
import PrimaryButton from "../components/PrimaryButton";
import FeaturedServices from "../components/FeaturedServices.js";

const PatientResources = () => {
  return (
    <>
      <div className="patientResourcesImageContainer">
        <img src={Images.patientResources} className="patientResourcesImage" />
      </div>
      <h1 className="paperWorkTitle">Complete Your Paperwork Online</h1>
      <div className="formButtonContainer">
        <PrimaryButton>New Patient Forms</PrimaryButton>
        <PrimaryButton>Established Patient Forms</PrimaryButton>
        <PrimaryButton>Medical Records Release</PrimaryButton>
        <PrimaryButton>Notice of Privacy Practices</PrimaryButton>
      </div>

      <div className="instructionButtonContainer">
        <PrimaryButton>Pre & Post Care Instructions</PrimaryButton>
      </div>

      <FeaturedServices />
    </>
  );
};

export default PatientResources;
