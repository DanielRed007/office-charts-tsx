import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";

interface DataSetLabelProps {
  labels: any[];
  datasets: any[];
}

const colorCategory = {
  veryLow: [1, "#B61900"],
  low: [2, "#FA1900"],
  medium: [3, "#E8B20C"],
  high: [4, "#21B500"],
  veryHigh: [5, "#198A00"],
};

const GraphicBar = () => {
  const calculateGraphicData = () => {
    let calculatedData = [];
    calculatedData = [65, 12, 35, 94, 72, 55, 40];

    return {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "#f6f6f6",
          borderColor: "#383838",
          borderWidth: 4,
          hoverBackgroundColor: "#505050",
          hoverBorderColor: "#909090",
          data: calculatedData,
        },
      ],
    };
  };

  useEffect(() => {}, []);

  return (
    <>
      <div>
        <h2>Bar Example (custom size)</h2>
        <Bar height={400} width={800} type="bar" data={calculateGraphicData} />
      </div>
    </>
  );
};

export default GraphicBar;
