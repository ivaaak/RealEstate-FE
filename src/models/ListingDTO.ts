/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Category } from './Category';
import type { Employee } from './Employee';
import type { Estate_Type } from './Estate_Type';
export type ListingDTO = {
    id?: string | null;
    name?: string | null;
    description?: string | null;
    imageUrl?: string | null;
    year?: number;
    isPublic?: boolean;
    dateBuilt?: string;
    dateListed?: string;
    squareMeters?: number;
    estate_Type?: Estate_Type;
    categoryId?: number;
    category?: Category;
    employeeId?: number;
    employee?: Employee;
};

