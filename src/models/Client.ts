/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Contact } from './Contact';
import type { Contract } from './Contract';
import type { Estate } from './Estate';
import type { IdentityRole } from './IdentityRole';
import type { Listing } from './Listing';
export type Client = {
    id?: string | null;
    client_Name?: string | null;
    client_Address?: string | null;
    contact_Person?: string | null;
    phone?: string | null;
    mobile?: string | null;
    eMail?: string | null;
    client_Details?: string | null;
    time_Created?: string;
    contact?: Contact;
    contracts?: Array<Contract> | null;
    roles?: Array<IdentityRole> | null;
    estates?: Array<Estate> | null;
    listings?: Array<Listing> | null;
    isDeleted?: boolean;
    deletedOn?: string | null;
};

