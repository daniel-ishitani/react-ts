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

export interface InsertCellAfterAction {
  type: ActionTypes.INSERT_CELL_AFTER;
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
  | InsertCellAfterAction
  | UpdateCellAction;
