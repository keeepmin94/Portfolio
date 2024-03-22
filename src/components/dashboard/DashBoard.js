import React from "react";
import { Chart } from "react-google-charts";
export default function DashBoard({ data, options, chartType }) {
  return (
    <Chart
      chartType={chartType}
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
