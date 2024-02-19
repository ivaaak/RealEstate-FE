/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Company } from './Company';
import type { Estate } from './Estate';
import type { Listing } from './Listing';
export type Employee = {
    id?: string | null;
    userName?: string | null;
    normalizedUserName?: string | null;
    email?: string | null;
    normalizedEmail?: string | null;
    emailConfirmed?: boolean;
    passwordHash?: string | null;
    securityStamp?: string | null;
    concurrencyStamp?: string | null;
    phoneNumber?: string | null;
    phoneNumberConfirmed?: boolean;
    twoFactorEnabled?: boolean;
    lockoutEnd?: string | null;
    lockoutEnabled?: boolean;
    accessFailedCount?: number;
    employee_Id?: string | null;
    first_Name?: string | null;
    last_Name?: string | null;
    company?: Company;
    listings?: Array<Listing> | null;
    estates?: Array<Estate> | null;
    isDeleted?: boolean;
    deletedOn?: string | null;
};

