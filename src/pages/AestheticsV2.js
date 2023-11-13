import { aestheticsServices } from "../data.js";

const AestheticsV2 = () => {
  //   const aestheticsServiceList = aestheticsServices.map((aestheticService) => (
  //     <ul>
  //       <li>{aestheticService.title}</li>
  //     </ul>
  //   ));

  return (
    <>
      <h1>Test</h1>
      {/* {aestheticsServiceList()} */}
      <ul>
        {aestheticsServices.map((aestheticService) => (
          <li>{aestheticService.title}</li>
        ))}
      </ul>
    </>
  );
};

export default AestheticsV2;
