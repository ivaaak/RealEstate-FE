/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Listing } from './Listing';
export type Review = {
    id?: string | null;
    review_Title?: string | null;
    review_Content?: string | null;
    review_Rating?: string | null;
    date_Posted?: string;
    listing_Id?: string | null;
    listing?: Listing;
    isDeleted?: boolean;
    deletedOn?: string | null;
};

