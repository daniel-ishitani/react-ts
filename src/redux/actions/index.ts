import { ActionTypes } from "../actionTypes";
import { CellType } from '../interfaces/cell';

export type Direction = 'up' | 'down';

export interface MoveCellActions {
  type: ActionTypes.MOVE_CELL;
  payload: {
    id: string;
    direction: Direction;
  },
}

export interface DeleteCellAction {
  type: ActionTypes.DELETE_CELL;
  payload: string;
}

export interface InsertCellBeforeAction {
  type: ActionTypes.INSERT_CELL_BEFORE;
  payload: {
    id: string | null;
    type: CellType;
  }
}

export interface UpdateCellAction {
  type: ActionTypes.UPDATE_CELL;
  payload: {
    id: string;
    content: string;
  }
}

export type Action =
  MoveCellActions
  | DeleteCellAction
  | InsertCellBeforeAction
  | UpdateCellAction;
