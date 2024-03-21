/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import type { ActionResult } from '../../models/ActionResult';
import type { Listing } from '../../models/Listing';
import type { ListingDTO } from '../../models/ListingDTO';
import { OpenAPI } from '../../core/OpenAPI';
import { request as __request } from '../../core/request';
@Injectable({
    providedIn: 'root',
})
export class ListingService {
    constructor(public readonly http: HttpClient) {}
    /**
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public postApiListingsListingCreate(
        requestBody?: Listing,
    ): Observable<any> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/api/listings/Listing/Create',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns ActionResult Success
     * @throws ApiError
     */
    public getApiListingsListingGetAll(): Observable<ActionResult> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/listings/Listing/GetAll',
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param id
     * @returns ActionResult Success
     * @throws ApiError
     */
    public getApiListingsListingGetByIdGetById(
        id: number,
    ): Observable<ActionResult> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/listings/Listing/GetById/GetById/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns ActionResult Success
     * @throws ApiError
     */
    public putApiListingsListingUpdateUpdateListing(
        id: number,
        requestBody?: ListingDTO,
    ): Observable<ActionResult> {
        return __request(OpenAPI, this.http, {
            method: 'PUT',
            url: '/api/listings/Listing/Update/UpdateListing/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param id
     * @returns ActionResult Success
     * @throws ApiError
     */
    public deleteApiListingsListingDeleteDelete(
        id: number,
    ): Observable<ActionResult> {
        return __request(OpenAPI, this.http, {
            method: 'DELETE',
            url: '/api/listings/Listing/Delete/Delete/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param id
     * @returns ActionResult Success
     * @throws ApiError
     */
    public deleteApiListingsListingHardDeleteHardDelete(
        id: number,
    ): Observable<ActionResult> {
        return __request(OpenAPI, this.http, {
            method: 'DELETE',
            url: '/api/listings/Listing/HardDelete/HardDelete/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param id
     * @returns ActionResult Success
     * @throws ApiError
     */
    public deleteApiListingsListingListingExistsListingExists(
        id: number,
    ): Observable<ActionResult> {
        return __request(OpenAPI, this.http, {
            method: 'DELETE',
            url: '/api/listings/Listing/ListingExists/ListingExists/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @returns string Success
     * @throws ApiError
     */
    public getApiListingsListingGetHealth(): Observable<string> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/listings/Listing/getHealth',
        });
    }
}
