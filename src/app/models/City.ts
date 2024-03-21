/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Country } from './Country';
import type { Estate } from './Estate';
export type City = {
    id?: string | null;
    city_Name?: string | null;
    country_Id?: number;
    country?: Country;
    estates?: Array<Estate> | null;
    isDeleted?: boolean;
    deletedOn?: string | null;
};

