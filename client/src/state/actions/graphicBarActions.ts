import { LOAD_GRAPHIC_BAR } from "../constants/graphicBarConstants";
import axios from "axios";
import { barData } from "../data-mock/bar-data-mock";

export const loadGraphicBarData = () => async (dispatch: any) => {
  // dispatch({
  //   type: LOADING_GRAPHICS,
  //   payload: { loading: true },
  // });

  const graphics = await axios.get(
    "http://localhost:5000/api/sales/office-one"
  );

  dispatch({
    type: LOAD_GRAPHIC_BAR,
    payload: graphics.data,
  });
};
