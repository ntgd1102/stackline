import { GetRetailProductDataCompleted, GetRetailProductDataError, GetRetailProductDataStart } from "./actions";

export enum FetchStatus {
    Idle = 'IDLE',
    Pending = 'PENDING',
    Error = 'ERROR',
    Completed = 'COMPLETED',
}

export interface ISale {
    weekEnding: string;
    retailSales: number;
    wholesaleSales: number;
    unitsSold: number;
    retailerMargin: number;
}

export interface Review {
    customer: string;
    review: string;
    score: number;
}
  
export interface retailProductInfoAndStats {
    id: string;
    title: string;
    image: string;
    subtitle: string;
    brand: string;
    reviews: Review[];
    details: string[];
    tags: string[];
    sales: ISale[];
}

export type AppActionTypes = GetRetailProductDataStart | GetRetailProductDataCompleted | GetRetailProductDataError;

export interface RootState {
    fetchStatus: FetchStatus,
    retailProductInfoAndStats?: retailProductInfoAndStats,
}