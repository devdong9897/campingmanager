import React from "react";
import { ResponsivePieCanvas } from "@nivo/pie";

const MainChart = ({ manDataResult, womanDateResult, ageDataResult }) => {
  console.log(manDataResult, womanDateResult);

  const customColors = ["#06D98D", "#3366FF", "#FF7B01"]
  const genderData = [
    {
      id: "Man",
      label: "남자",
      value: parseInt(manDataResult),
    },
    {
      id: "Woman",
      labeld: "여자",
      value: parseInt(womanDateResult),
    },
  ];

  const ageData = [
    {
      id: "10세",
      label: "0~10세",
      value: ageDataResult[0]?.length || 0,
    },
    {
      id: "20세",
      label: "10~20세",
      value: ageDataResult[1]?.length || 0,
    },
    {
      id: "30세",
      label: "20~30세",
      value: ageDataResult[2]?.length || 0,
    },
    {
      id: "Woman",
      label: "그 외",
      value: ageDataResult[3]?.length || 0,
    },
  ];
  return (
    <div className="pie_wrapper">
      <ul className="pie_list">
        <li>
          <ResponsivePieCanvas
            data={genderData}
            keys={["value"]}
            indexBy="country"
            enableGridY={true}
            enableLabel={false}
            colors={customColors}
  
          />
          <p>회원 성별 비율</p>
        </li>
        <li>
          <ResponsivePieCanvas
            data={ageData}
            keys={["value"]}
            indexBy="country"
            enableGridY={true}
            enableLabel={false}
            colors={customColors}
          />
          <p>회원 나이 비율</p>
        </li>
      </ul>
    </div>
  );
};

export default MainChart;
