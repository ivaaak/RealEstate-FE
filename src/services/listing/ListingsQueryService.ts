/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import type { ListingDTO } from '../../models/ListingDTO';
import type { ListingDTOPagedResult } from '../../models/ListingDTOPagedResult';
import type { SearchCriteriaObject } from '../../models/SearchCriteriaObject';
import { OpenAPI } from '../../core/OpenAPI';
import { request as __request } from '../../core/request';
@Injectable({
    providedIn: 'root',
})
export class ListingsQueryService {
    constructor(public readonly http: HttpClient) {}
    /**
     * @param searchTerm
     * @returns ListingDTO Success
     * @throws ApiError
     */
    public getApiListingsListingsQuerySearchSearch(
        searchTerm: string,
    ): Observable<Array<ListingDTO>> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/listings/ListingsQuery/Search/search/{searchTerm}',
            path: {
                'searchTerm': searchTerm,
            },
        });
    }
    /**
     * @param requestBody
     * @returns ListingDTOPagedResult Success
     * @throws ApiError
     */
    public postApiListingsListingsQuerySearchSearch(
        requestBody?: SearchCriteriaObject,
    ): Observable<ListingDTOPagedResult> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/api/listings/ListingsQuery/Search/search',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
