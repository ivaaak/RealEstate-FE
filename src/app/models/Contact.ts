/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Client } from './Client';
export type Contact = {
    id?: string | null;
    applicationUserId?: string | null;
    employee_Id?: number;
    estate_Id?: number;
    contact_Time?: string;
    contact_Details?: string | null;
    client?: Client;
    client_Id?: string | null;
    applicationUser_Id?: string | null;
    isDeleted?: boolean;
    deletedOn?: string | null;
};

