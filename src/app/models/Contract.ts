/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Client } from './Client';
export type Contract = {
    id?: string | null;
    client_Id?: string | null;
    client?: Client;
    employee_Id?: string | null;
    contract_Type_Id?: number;
    contract_Details?: string | null;
    payment_Frequency_Id?: number;
    number_Of_Invoices?: number;
    payment_Amount?: number;
    fee_Percentage?: number;
    fee_Amount?: number;
    date_Signed?: string;
    start_Date?: string;
    end_Date?: string;
    transaction_Id?: number;
    isDeleted?: boolean;
    deletedOn?: string | null;
};

