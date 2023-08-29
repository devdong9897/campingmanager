import React from "react";
import { ResponsivePieCanvas } from "@nivo/pie";

const MainChart = () => {
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
        </li>
        <li>
          <ResponsivePieCanvas
            data={data}
            keys={["value"]}
            indexBy="country"
            enableGridY={true}
            enableLabel={false}
          />
        </li>
        <li>
          <ResponsivePieCanvas
            data={data}
            keys={["value"]}
            indexBy="country"
            enableGridY={true}
            enableLabel={false}
          />
        </li>
      </ul>
    </div>
  );
};

export default MainChart;
