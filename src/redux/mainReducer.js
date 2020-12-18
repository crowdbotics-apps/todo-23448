import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import Dashboard22186622Reducer from '../features/Dashboard22186622/redux/reducers'
import EmailAuth3186621Reducer from '../features/EmailAuth3186621/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
Dashboard22186622: Dashboard22186622Reducer,
EmailAuth3186621: EmailAuth3186621Reducer,

});