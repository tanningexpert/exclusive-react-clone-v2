const AestheticsServiceContainer = ({
  imgSrc,
  title,
  price,
  time,
  schedule,
  summary,
}) => {
  return (
    <div className="aestheticsRepeater">
      <div className="aestheticsContainer">
        <div className="aestheticsImageContainer">
          <img src={imgSrc} alt="" className="aestheticsImage" />
        </div>

        <div className="serviceDetailsContainer">
          <div className="serviceTitle">{title}</div>

          <div className="serviceDetails">
            <div className="servicePrice">{price}</div>
            <div className="serviceTime"> {time} </div>
            <div className="serviceSchedule">{schedule}</div>
          </div>
        </div>

        <div className="serviceSummary">{summary}</div>

        <div className="viewMoreBtnContainer">
          <button className="viewMoreBtn">View More</button>
        </div>
      </div>
    </div>
  );
};

export default AestheticsServiceContainer;
