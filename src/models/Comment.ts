/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Listing } from './Listing';
export type Comment = {
    id?: string | null;
    comment_Title?: string | null;
    comment_Content?: string | null;
    comment_Rating?: string | null;
    date_Posted?: string;
    listing?: Listing;
    isDeleted?: boolean;
    deletedOn?: string | null;
};

