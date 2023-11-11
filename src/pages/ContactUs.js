import PrimaryButton from "../components/PrimaryButton";

const ContactUs = () => {
  return (
    <>
      <div className="contactUsWrapper">
        <div className="officeAddress">
          <h2>Office Address</h2>
          <p>
            1001 12th Avenue, Suite 150
            <br /> Fort Worth, TX 76104
            <br /> Fax: (817)-335-4328
          </p>
        </div>
        <div className="sendEmail">
          <h2>Get in touch</h2>
          <PrimaryButton>Send a Secure Email</PrimaryButton>
        </div>
        <div className="officeHours">
          <h2>Business Hours</h2>
          <table>
            <tr>
              <td>Mon:</td>
              <td>9 am - 5 pm</td>
            </tr>
            <tr>
              <td>Tues:</td>
              <td>9 am - 5 pm</td>
            </tr>
            <tr>
              <td>Wed:</td>
              <td>9 am - 5 pm</td>
            </tr>
            <tr>
              <td>Thurs:</td>
              <td>9 am - 5 pm</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
