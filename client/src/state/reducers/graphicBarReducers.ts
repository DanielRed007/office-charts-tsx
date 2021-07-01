import { LOAD_GRAPHIC_BAR } from "../constants/graphicBarConstants";

export const graphicBarReducer = (state = {}, action: any) => {
  switch (action.type) {
    case LOAD_GRAPHIC_BAR:
      return { data: action.payload || {} };
    default:
      return state;
  }
};
