import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export default function PieActiveArc({ noPositive, noNeutral, noNegative }) {
  const parsedNoPositive = parseInt(noPositive);
  const parsedNoNeutral = parseInt(noNeutral);
  const parsedNoNegative = parseInt(noNegative);

  const data = [
    {
      id: 0,
      value: parsedNoPositive,
      label: "Positive Tweets",
      color: "#15803d",
    },
    {
      id: 1,
      value: parsedNoNeutral,
      label: "Neutral Tweets",
      color: "#0369a1",
    },
    {
      id: 2,
      value: parsedNoNegative,
      label: "Negative Tweets",
      color: "#f43f5e",
    },
  ];

  return (
    <PieChart
      series={[
        {
          data,
          highlightScope: { faded: "global", highlighted: "item" },
          faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
        },
      ]}
      height={200}
    />
  );
}
