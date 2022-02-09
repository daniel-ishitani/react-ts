import { combineReducers } from 'redux';

import cells from './cells';
import bundles from './bundles';

const reducers = combineReducers({
  cells,
  bundles,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
