import React from "react";

import ChartBar from "./ChartBar.js";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maximumValue = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            label={dataPoint.label}
            value={dataPoint.value}
            maxValue={maximumValue}
          />
        );
      })}
    </div>
  );
};

export default Chart;
