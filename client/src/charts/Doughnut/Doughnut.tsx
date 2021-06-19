import React from "react";
import { Doughnut } from "react-chartjs-2";

interface DataSetLabelProps {
  labels: any[];
  datasets: any[];
}

const data: DataSetLabelProps = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const GraphicDoughnut = () => {
  return (
    <Doughnut type="doughnut" data={data} />
  );
};

export default GraphicDoughnut;
