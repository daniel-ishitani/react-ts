import produce from 'immer';

import { ActionTypes } from '../actionTypes';
import { Action } from '../actions';

interface BundlesState {
  [key: string]: {
    loading: boolean;
    code: string;
    err: string;
  } | undefined;
}

const initialState: BundlesState = {};

const bundles = produce((state: BundlesState = initialState, action: Action): BundlesState => {
  switch(action.type){
    case ActionTypes.BUNDLE_START:
      state[action.payload.cellId] = {
        loading: true,
        code: '',
        err: '',
      };

      return state;
    case ActionTypes.BUNDLE_COMPLETE:
      state[action.payload.cellId] = {
        ...action.payload.bundle,
        loading: false,
      };

      return state;
    default:
      return state;
  }
}, initialState);

export default bundles;
