import _ from 'lodash';
import { createSelector } from 'reselect';

export const getRetailProductInfoAndStats = (state: any) => _.get(state, 'appState.retailProductInfoAndStats[0]');

export const getRetailProductInfo = createSelector(
    getRetailProductInfoAndStats,
    (retailProductInfoAndStats) => ({
        image: retailProductInfoAndStats?.image,
        title: retailProductInfoAndStats?.title,
        subtitle: retailProductInfoAndStats?.subtitle,
        tags: retailProductInfoAndStats?.tags,
    })
);

export const getRetailProductSalesStats = createSelector(
    getRetailProductInfoAndStats,
    (retailProductInfoAndStats) => retailProductInfoAndStats?.sales
);
