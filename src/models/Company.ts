/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Employee } from './Employee';
import type { Estate } from './Estate';
import type { Listing } from './Listing';
export type Company = {
    id?: string | null;
    company_Name?: string | null;
    company_Description?: string | null;
    employee_Count?: number;
    employees?: Array<Employee> | null;
    listings?: Array<Listing> | null;
    estates?: Array<Estate> | null;
    isDeleted?: boolean;
    deletedOn?: string | null;
};

