import { LOAD_GRAPHIC_BAR } from "../constants/graphicBarConstants";

export const loadGraphicBarData = () => async (dispatch: any) => {
  const barData = [
    {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: null,
          borderColor: "#383838",
          borderWidth: 4,
          hoverBackgroundColor: "#505050",
          hoverBorderColor: "#909090",
          data: [65, 12, 35, 94, 72, 55, 40],
        },
      ],
    },
    {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: null,
          borderColor: "#383838",
          borderWidth: 4,
          hoverBackgroundColor: "#505050",
          hoverBorderColor: "#909090",
          data: [83, 7, 51, 22, 82, 47, 96],
        },
      ],
    },
    {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: null,
          borderColor: "#383838",
          borderWidth: 4,
          hoverBackgroundColor: "#505050",
          hoverBorderColor: "#909090",
          data: [65, 12, 35, 94, 72, 55, 40],
        },
      ],
    },
  ];

  try {
    await dispatch({
      type: LOAD_GRAPHIC_BAR,
      payload: barData,
    });
  } catch (error) {}
};
