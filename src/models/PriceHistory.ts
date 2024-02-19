/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Listing } from './Listing';
export type PriceHistory = {
    id?: string | null;
    priceHistoryTouples?: Record<string, number | null> | null;
    rentHistoryTouples?: Record<string, number | null> | null;
    offersHistoryTouples?: Record<string, number | null> | null;
    searchesHistoryTouples?: Record<string, number | null> | null;
    viewsHistoryTouples?: Record<string, number | null> | null;
    listing?: Listing;
    listing_Id?: string | null;
};

