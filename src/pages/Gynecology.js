import FeaturedServices from "../components/FeaturedServices.js";
import Images from "../img/ImgIndex.js";

const Gynecology = () => {
  return (
    <>
      <div className="gynecologyPage">
        <div className="gynecologyIntro">
          <img
            src={Images.gynecology}
            alt="Physician consulting patient"
            className="gynecologyLogoImg"
          />
          <p>
            From puberty through menopause and beyond - we are here for you. We
            are committed to excellence in women's health care and, whether
            you're here for a routine well woman exam or to discuss gynecologic
            surgery, we will always make the time to discuss your concerns, your
            lifestyle and your health needs with you.
            <br />
            <br />
            Because we are an independent healthcare clinic that makes your
            health and well-being our top priority, everything we do is aimed
            towards providing the best care for our patients.
            <br />
            <br />
            To schedule an appointment call our office at (817) 334-0562.
          </p>
        </div>
        <div className="gynecologyServices">
          <div className="gynecologyServiceContent">
            <h2>Wellness Screening and Contraception​</h2>
            <ul>
              <li>Annual Well Woman Exams</li>
              <li>STD Screening & Treatment</li>
              <li>Hormone Replacement Therapy</li>
              <li>Birth Control Pills</li>
              <li>Depo-Provera</li>
              <li>Mirena IUD</li>
              <li>Paragard IUD</li>
              <li>Nexplanon</li>
              <li>Weight Loss</li>
            </ul>
            <h2>Major / Minor Procedures</h2>
            <ul>
              <li>Colposcopy</li>
              <li>Cryosurgery</li>
              <li>Endometrial Ablation</li>
              <li>Hysterectomy</li>
              <li>Hysteroscopy</li>
              <li>IUD Placement & Removal</li>
              <li>LEEP</li>
              <li>Tubal Ligation</li>
            </ul>
          </div>
          <div className="gynecologyServiceContent">
            <h2>Common GYN Concerns</h2>
            <ul>
              <li>Abnormal Bleeding</li>
              <li>Abnormal Pap Smear</li>
              <li>Endometriosis</li>
              <li>Fibroids</li>
              <li>HPV</li>
              <li>Heavy Cycles</li>
              <li>Menopause</li>
              <li>Ovarian Cyst</li>
              <li>Pain During Sex</li>
              <li>Pelvic Pain</li>
              <li>Polycystic Ovarian Syndrome (PCOS)</li>
              <li>Urinary Incontinence</li>
              <li>Vaginal Dryness</li>
            </ul>
          </div>
        </div>
      </div>
      <FeaturedServices />
    </>
  );
};

export default Gynecology;
