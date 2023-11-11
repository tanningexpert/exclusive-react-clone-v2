import FeaturedButton from "./FeaturedServicesButton.js";

const ProcedureContainer = ({
  treatmentCost,
  treatmentLength,
  treatmentSchedule,
  downtime,
}) => {
  return (
    <div className="procedureContainer">
      <h2>Plan Your Procedure</h2>
      <table className="treatmentTable">
        <tr>
          <th>Average Cost</th>
          <td>{treatmentCost}</td>
        </tr>
        <tr>
          <th>Treatment Length</th>
          <td>{treatmentLength}</td>
        </tr>
        <tr>
          <th>Treatment Schedule</th>
          <td>{treatmentSchedule}</td>
        </tr>
        <tr>
          <th>Downtime</th>
          <td>{downtime}</td>
        </tr>
      </table>
      <h2>Schedule Your Consult</h2>
      <div className="treatmentAppointmentRequestButton">
        <FeaturedButton>Request An Appointment</FeaturedButton>
      </div>
    </div>
  );
};

export default ProcedureContainer;
