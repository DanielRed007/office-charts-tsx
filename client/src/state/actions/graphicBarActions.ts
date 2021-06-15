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
          data: null,
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
          data: null,
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
          data: null,
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
