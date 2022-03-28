import { combineReducers } from "redux";
import { ActionTypes, GetRetailProductDataCompleted } from "./actions";
import { AppActionTypes, FetchStatus, RootState } from "./types";


const initialState: RootState = {
    fetchStatus: FetchStatus.Idle,
}

export const dataReducer = (state = initialState, action: AppActionTypes): RootState => {
    switch (action.type) {
        case ActionTypes.fetchRetailProductStart: 
            return {
                fetchStatus: FetchStatus.Pending,
            };
        case ActionTypes.fetchRetailProductCompleted: 
            return {
                fetchStatus: FetchStatus.Completed,
                retailProductInfoAndStats: (action as GetRetailProductDataCompleted).payload.retailProduct,
            };
        case ActionTypes.fetchRetailProductError: 
            return {
                fetchStatus: FetchStatus.Error,
            }    
        default: 
            return {
                fetchStatus: FetchStatus.Idle,
            }    
    }
}

const allReducers = combineReducers({
    data: dataReducer
  });
  
export default allReducers;