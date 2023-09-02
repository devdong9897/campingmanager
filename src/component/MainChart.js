import React from "react";
import { ResponsivePieCanvas } from "@nivo/pie";

const   MainChart = () => {
  const data = [
    {
      id: "gold",
      label: "gold",
      value: 100,
    },
    {
      id: "skyblue",
      label: "skyblue",
      value: 20,
    },
  ];
  return (
    <div className="pie_wrapper">
      <ul className="pie_list">
        <li>
          <ResponsivePieCanvas
            data={data}
            keys={["value"]}
            indexBy="country"
            enableGridY={true}
            enableLabel={false}
          />
        <p>회원 성별 비율</p>
        </li>
        <li>
          <ResponsivePieCanvas
            data={data}
            keys={["value"]}
            indexBy="country"
            enableGridY={true}
            enableLabel={false}
          />
        <p>회원 나이 비율</p>
        </li>
      </ul>
    </div>
  );
};

export default MainChart;
