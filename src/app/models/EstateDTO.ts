/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { City } from './City';
import type { Estate_Type } from './Estate_Type';
import type { Listing } from './Listing';
export type EstateDTO = {
    id?: string | null;
    estate_Name?: string | null;
    city_Id?: number;
    city?: City;
    estate_Type_Id?: number;
    floor_Space?: number;
    number_Of_Balconies?: number;
    balconies_Space?: number;
    number_Of_Bedrooms?: number;
    number_Of_Bathrooms?: number;
    number_Of_Garages?: number;
    number_Of_Parking_Spaces?: number;
    pets_Allowed?: boolean;
    estate_Description?: string | null;
    estate_Status_Id?: string | null;
    estate_ImageUrl?: string | null;
    estate_Year_Built?: number;
    estate_Year_Listed?: number;
    listing?: Listing;
    estate_Type?: Estate_Type;
};

