/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Agent } from './Agent';
import type { Listing } from './Listing';
export type Agency = {
    agency_Id?: string | null;
    name?: string | null;
    description?: string | null;
    imageURL?: string | null;
    website?: string | null;
    phone_Number?: string | null;
    address?: string | null;
    agents?: Array<Agent> | null;
    listings?: Array<Listing> | null;
};

