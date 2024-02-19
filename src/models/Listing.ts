/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Address } from './Address';
import type { Agent } from './Agent';
import type { Category } from './Category';
import type { Comment } from './Comment';
import type { Employee } from './Employee';
import type { Estate } from './Estate';
import type { Estate_Type } from './Estate_Type';
import type { ListingStats } from './ListingStats';
import type { PriceHistory } from './PriceHistory';
import type { Review } from './Review';
export type Listing = {
    id?: string | null;
    name?: string | null;
    description?: string | null;
    estate?: Estate;
    estate_Id?: string | null;
    price?: number;
    pricePerSquareMeter?: number;
    is_From_An_Agency?: boolean;
    imageUrl?: string | null;
    comments?: Array<Comment> | null;
    isPublic?: boolean;
    dateBuilt?: string;
    dateListed?: string;
    estate_Type?: Estate_Type;
    categoryId?: number;
    category?: Category;
    address?: Address;
    listingStats?: ListingStats;
    employeeId?: number;
    employee?: Employee;
    agent_Id?: string | null;
    agent?: Agent;
    priceHistory?: PriceHistory;
    priceHistories?: Array<PriceHistory> | null;
    reviews?: Array<Review> | null;
    isDeleted?: boolean;
    deletedOn?: string | null;
};

