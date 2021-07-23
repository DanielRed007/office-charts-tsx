import { LOAD_GRAPHIC_BAR } from "../constants/graphicBarConstants";
import axios from "axios";

export const loadGraphicBarData = () => async (dispatch: any) => {
  const graphics = await axios.get(
    "http://localhost:5000/api/sales/office-one"
  );

  console.log(graphics);

  dispatch({
    type: LOAD_GRAPHIC_BAR,
    payload: graphics.data,
  });
};
