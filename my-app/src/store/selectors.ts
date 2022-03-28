import _ from 'lodash';
import { createSelector } from 'reselect';

export const getRetailProductInfoAndStats = (state: any) => _.get(state, 'appState.retailProductInfoAndStats[0]');

export const getRetailProduct = creat

export const getProductTitle = createSelector(
    getRetailProductInfoAndStats, 
    retailProductInfoAndStats => {
        return _.get(retailProductInfoAndStats, '[0].title');
    }
)