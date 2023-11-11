const ProcedureContainer = ({
  treatmentCost,
  treatmentLength,
  treatmentSchedule,
  downtime,
}) => {
  return (
    <div className="procedureContainer">
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
    </div>
  );
};

export default ProcedureContainer;
