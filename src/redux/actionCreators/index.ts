import { ActionTypes } from "../actionTypes";
import {
  UpdateCellAction,
  DeleteCellAction,
  MoveCellActions,
  InsertCellBeforeAction,
  Direction,
} from "../actions";
import { CellType } from "../interfaces/cell";

export const updateCell = (id: string, content: string): UpdateCellAction => {
  return {
    type: ActionTypes.UPDATE_CELL,
    payload: {
      id,
      content,
    },
  };
};

export const deleteCell = (id: string): DeleteCellAction => {
  return {
    type: ActionTypes.DELETE_CELL,
    payload: id,
  };
};

export const moveCell = (id: string, direction: Direction): MoveCellActions => {
  return {
    type: ActionTypes.MOVE_CELL,
    payload: {
      id,
      direction,
    },
  };
};

export const insertCellBefore = (id: string, type: CellType): InsertCellBeforeAction => {
  return {
    type: ActionTypes.INSERT_CELL_BEFORE,
    payload: {
      id,
      type,
    },
  };
};
