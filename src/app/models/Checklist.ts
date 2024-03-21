/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Client } from './Client';
export type Checklist = {
    id?: string | null;
    title?: string | null;
    description?: string | null;
    client_Id?: string | null;
    client?: Client;
    employee_Id?: string | null;
    start_Date?: string;
    end_Date?: string;
    transaction_Id?: number;
    isDeleted?: boolean;
    deletedOn?: string | null;
};

