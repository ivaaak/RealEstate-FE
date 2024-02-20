/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Client } from './Client';
export type Project = {
    id?: string | null;
    title?: string | null;
    description?: string | null;
    text_Content?: string | null;
    isPublic?: boolean;
    isCompleted?: boolean;
    client_Id?: string | null;
    client?: Client;
    employee_Id?: string | null;
    start_Date?: string;
    end_Date?: string;
    transaction_Id?: number;
    isDeleted?: boolean;
    deletedOn?: string | null;
};

