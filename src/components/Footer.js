const Footer = () => {
  return (
    <div className="footer">
      <div className="footerWrapper">
        <div className="footerLeft">
          <p className="footerInfo">Office Location</p>
          <p>
            1001 12th Avenue Suite 150
            <br />
            Fort Worth, TX 76104
          </p>
          <br />
          <br />
          <p className="footerInfo">Business Hours</p>
          <p>
            Mon - Thurs
            <br />
            9:00 AM - 4:30 PM
          </p>
          <br />
          <br />
          <p className="footerInfo">Office Phone</p>
          <p>817-334-0562</p>
        </div>
        <div className="footerCenter">
          <p>
            <span className="freezeTitle">NEW PATIENT "FREEZE"</span>
            <br />
            Unfortunately, due to our high volume of established patients, we
            are not able to schedule new patients.
            <br />
            <br />
            We hope to re-open our patient list soon. To be placed on our
            waiting list, please fill out our RSVP form and we will happily
            reach out to you when appointments come available.
          </p>
        </div>
        <div className="footerRight">
          <p>
            Follow us for general health recommendations, updates, and exclusive
            discounts on our services
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
