import { ActionTypes } from "../actionTypes";
import { Action } from "../actions";
import { Cell } from "../interfaces/cell";

interface State {
  loading: boolean;
  error: string | null;
  order: string[];
  data: {
    [key: string]: Cell
  };
}

const initialState: State = {
  loading: false,
  error: null,
  order: [],
  data: {},
};

const reducer = (state: State = initialState, action: Action): State => {
  switch(action.type) {
    case ActionTypes.UPDATE_CELL:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.id]: {
            ...state.data[action.payload.id],
            content: action.payload.content,
          },
        },
      };
    case ActionTypes.DELETE_CELL:
    case ActionTypes.MOVE_CELL:
    case ActionTypes.INSERT_CELL_BEFORE:
    default:
      return state;
  }
}

export default reducer;
