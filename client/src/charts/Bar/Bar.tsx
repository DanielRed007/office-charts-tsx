import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { loadGraphicBarData } from "../../state/actions/graphicBarActions";
import {
  calculateFifthColorAverage,
  calculateTriColorAverage,
} from "../../utils/color-functions";

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

const GraphicBar = ({ data = null }) => {
  // const dispatch = useDispatch();

  // const graphicBar = useSelector((state: any) => state.graphicBar);
  // const { data: bar } = graphicBar;

  const calculateGraphicData = () => {
    let calculatedData: any = [];
    // let colorSet = [];
    console.log(data);
    calculatedData = [65, 12, 35, 94, 72, 55, 40];
    // calculatedData Should come from a state action (backend)
    const finalColorSet = () => {
      // return calculatedData.map((set: number) => {
      //   return calculateTriColorAverage(set);
      // });
      return calculatedData.map((set: number) => {
        return calculateFifthColorAverage(set);
      });
    };

    return {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: finalColorSet(),
          borderColor: "#383838",
          borderWidth: 4,
          hoverBackgroundColor: "#505050",
          hoverBorderColor: "#909090",
          data: calculatedData,
        },
      ],
    };
  };

  useEffect(() => {
    // dispatch(loadGraphicBarData());
    // console.log(bar);
  }, [data]);

  return (
    <>
      <div>
        <h2>Bar Example (custom size)</h2>
        <Bar
          width={200}
          height={100}
          // options={{ maintainAspectRatio: false }}
          type="bar"
          data={calculateGraphicData}
        />
      </div>
    </>
  );
};

export default GraphicBar;
