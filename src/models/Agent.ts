/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Agency } from './Agency';
import type { Contact } from './Contact';
import type { Contract } from './Contract';
import type { Listing } from './Listing';
export type Agent = {
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
    agent_Id?: string | null;
    agent_Name?: string | null;
    agent_Address?: string | null;
    contact_Person?: string | null;
    phone?: string | null;
    mobile?: string | null;
    eMail?: string | null;
    agent_Details?: string | null;
    time_Created?: string;
    contact?: Contact;
    contracts?: Array<Contract> | null;
    agency?: Agency;
    listings?: Array<Listing> | null;
    isDeleted?: boolean;
    deletedOn?: string | null;
};

