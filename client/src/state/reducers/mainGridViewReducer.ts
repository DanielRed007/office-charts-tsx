import { LOAD_MAIN_GRID_VIEW_LIST } from "../constants/mainGridViewConstants";

export const mainGridViewReducer = (state = {}, action: any) => {
  switch (action.type) {
    case LOAD_MAIN_GRID_VIEW_LIST:
      return { list: action.payload || [] };
    default:
      return state;
  }
};