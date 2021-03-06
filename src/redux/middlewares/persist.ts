import { Dispatch } from "react";

import { Action } from "../actions";
import { ActionTypes } from "../actionTypes";
import { saveCells } from "../actionCreators"; 
import { RootState } from "..";

export const persist = ({
  dispatch,
  getState,
}: { dispatch: Dispatch<Action>, getState: () => RootState }) => {
  let timer: any;

  return (next: (action: Action) => void) => {
    return (action: Action) => {
      next(action);

      if ([
        ActionTypes.MOVE_CELL,
        ActionTypes.UPDATE_CELL,
        ActionTypes.INSERT_CELL_AFTER,
        ActionTypes.DELETE_CELL
      ].includes(action.type)) {
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
          saveCells()(dispatch, getState);
        }, 250);
      } 
    };
  };
};
