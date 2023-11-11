const AppointmentRequest = () => {
  return (
    <>
      <p className="apptRequestIntro">
        To begin, please complete the form below
      </p>
      <div className="appointmentRequestWrapper">
        <div className="caldendarWrapper">
          <h1>Request Appointment</h1>
        </div>
        <div className="apptRequestFormWrapper">
          <form className="apptRequestForm">
            <p className="formHeader">Enter patient information</p>
            <div className="firstLastNameInput">
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
              />
              <input
                type="text"
                id="lastName"
                name="lanstName"
                placeholder="Last Name"
              />
            </div>

            <div className="patientDetailsInput">
              <input
                type="text"
                id="birthDate"
                name="birthDate"
                placeholder="Date of Birth"
              />
              <select id="gender" name="gender">
                <option value="" disabled selected>
                  Choose gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="patientContactInfo">
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone Number"
              />
              <input type="email" id="email" name="email" placeholder="Email" />
            </div>

            <select id="visitType" name="visitType">
              <option value="" disabled selected>
                Preferred visit type
              </option>
              <option value="office">In-office</option>
              <option value="telehealth">Telehealth</option>
            </select>

            <textarea
              id="reason"
              name="reason"
              placeholder="Reason for visit"
            />

            <p className="formHeader">Payment Method</p>
            <select id="paymentMethod" name="paymentMethod">
              <option value="" disabled selected>
                Select payment method
              </option>
              <option value="insurance">Insurance</option>
              <option value="selfpay">Self-Pay</option>
            </select>
            <input
              type="text"
              id="insuranceCompany"
              name="insuranceCompany"
              placeholder="Insurance Company"
            />
            <input type="submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default AppointmentRequest;
