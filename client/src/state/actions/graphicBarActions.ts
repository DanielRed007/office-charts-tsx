import { LOAD_GRAPHIC_BAR } from "../constants/graphicBarConstants";
import { barData } from "../data-mock/bar-data-mock";

export const loadGraphicBarData = () => async (dispatch: any) => {
  dispatch({
    type: LOAD_GRAPHIC_BAR,
    payload: barData,
  });
};
