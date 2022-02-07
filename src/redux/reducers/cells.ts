import produce from 'immer';

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

const randomId = () => {
  return Math.random().toString(36).substring(2, 5);
};

const reducer = produce((state: State = initialState, action: Action) => {
  switch(action.type) {
    case ActionTypes.UPDATE_CELL:
      const { id, content } = action.payload;

      state.data[id].content = content;

      return state;
    case ActionTypes.DELETE_CELL:
      delete state.data[action.payload];
      state.order = state.order.filter(id => id !== action.payload);

      return state;
    case ActionTypes.MOVE_CELL:
      const { direction } = action.payload;
      const index = state.order.findIndex(id => id === action.payload.id);
      const targetIndex = direction === 'up' ? index - 1 : index + 1;

      if (targetIndex < 0 || targetIndex > state.order.length - 1) {
        return state;
      }

      state.order[index] = state.order[targetIndex];
      state.order[targetIndex] = action.payload.id;

      return state;
    case ActionTypes.INSERT_CELL_BEFORE:
      const cell: Cell = {
        content: '',
        type: action.payload.type,
        id: randomId(),
      };
      state.data[cell.id] = cell;
      
      const orderIndex = state.order.findIndex(id => id ===action.payload.id);

      if (orderIndex < 0) {
        state.order.push(cell.id);
      }
      else {
        state.order.splice(orderIndex, 0, cell.id);
      }

      return state;
    default:
      return state;
  }
}, initialState);

export default reducer;
