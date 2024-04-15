/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import type { ActionResult } from '../../models/ActionResult';
import { OpenAPI } from '../../core/OpenAPI';
import { request as __request } from '../../core/request';
@Injectable({
    providedIn: 'root',
})
export class MediatRSearchService {
    constructor(public readonly http: HttpClient) {}
    /**
     * @param query
     * @returns ActionResult Success
     * @throws ApiError
     */
    public getApiListingsMediatRSearchSearch(
        query?: string,
    ): Observable<ActionResult> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/listings/MediatRSearch/Search',
            query: {
                'query': query,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param query
     * @returns ActionResult Success
     * @throws ApiError
     */
    public getApiListingsMediatRSearchClient(
        query?: string,
    ): Observable<ActionResult> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/listings/MediatRSearch/Client',
            query: {
                'query': query,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param query
     * @returns ActionResult Success
     * @throws ApiError
     */
    public getApiListingsMediatRSearchEstate(
        query?: string,
    ): Observable<ActionResult> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/listings/MediatRSearch/Estate',
            query: {
                'query': query,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param query
     * @returns ActionResult Success
     * @throws ApiError
     */
    public getApiListingsMediatRSearchListing(
        query?: string,
    ): Observable<ActionResult> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/listings/MediatRSearch/Listing',
            query: {
                'query': query,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param city
     * @param minPrice
     * @param maxPrice
     * @param id
     * @param name
     * @param sort
     * @returns ActionResult Success
     * @throws ApiError
     */
    public getApiListingsMediatRSearchByParameters(
        city?: string,
        minPrice?: number,
        maxPrice?: number,
        id?: string,
        name?: string,
        sort?: string,
    ): Observable<ActionResult> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/listings/MediatRSearch/ByParameters',
            query: {
                'city': city,
                'minPrice': minPrice,
                'maxPrice': maxPrice,
                'id': id,
                'name': name,
                'sort': sort,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
}
