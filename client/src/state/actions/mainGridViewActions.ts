import { LOAD_MAIN_GRID_VIEW_LIST } from "../constants/mainGridViewConstants";
import axios from "axios";

export const loadMainGridViewList = () => async (dispatch: any) => {
  const graphics = await axios.get(
    "http://localhost:5000/api/sales/list"
  );

  console.log(graphics);

  dispatch({
    type: LOAD_MAIN_GRID_VIEW_LIST,
    payload: graphics.data,
  });
};
