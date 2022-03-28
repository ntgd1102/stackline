import { retailProductInfoAndStats, RootState } from "./types";
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

export enum ActionTypes {
    fetchRetailProductStart = 'FETCH_RETAIL_PRODUCT_START',
    fetchRetailProductCompleted = 'FETCH_RETAIL_PRODUCT_COMPLETED',
    fetchRetailProductError = 'FETCH_RETAIL_PRODUCT_ERROR',
}

export const getRetailProductDataStart = () => ({
    type: ActionTypes.fetchRetailProductStart,
})
export type GetRetailProductDataStart = ReturnType<typeof getRetailProductDataStart>;

export const getRetailProductDataCompleted = (retailProduct: retailProductInfoAndStats) => ({
    type: ActionTypes.fetchRetailProductCompleted,
    payload: { retailProduct },
});
export type GetRetailProductDataCompleted = ReturnType<typeof getRetailProductDataCompleted>;

export const getRetailProductDataError = () => ({
    type: ActionTypes.fetchRetailProductError,
});
export type GetRetailProductDataError = ReturnType<typeof getRetailProductDataError>;

const fetchApi = async () => {
    return await fetch('https://api.jsonbin.io/b/623fac5fa703bb67493518ce')
    .then((res) => res.json())
    .then((json) => {
      return json;
    })
  };
  

export const getApiData = (): ThunkAction<void, RootState, null, Action<string>> => async (dispatch) => {
  dispatch(getRetailProductDataStart());
  try {
    const data = await fetchApi();
    dispatch(getRetailProductDataCompleted(data));
  } catch (err) {
    dispatch(getRetailProductDataError);
    throw err;
  }
};