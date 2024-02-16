/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Estate } from './Estate';
export type Category = {
    id?: string | null;
    name: string;
    description?: string | null;
    estates?: Array<Estate> | null;
    estate?: Estate;
    estate_Id?: number;
    isDeleted?: boolean;
    deletedOn?: string | null;
};

