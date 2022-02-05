import { combineReducers } from "redux";

import cells from './cells';

const reducers = combineReducers({
  cells,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
