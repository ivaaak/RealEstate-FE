/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import type { Estate } from '../../models/Estate';
import type { Listing } from '../../models/Listing';
import { OpenAPI } from '../../core/OpenAPI';
import { request as __request } from '../../core/request';
@Injectable({
    providedIn: 'root',
})
export class FavoriteService {
    constructor(public readonly http: HttpClient) {}
    /**
     * @param clientId
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public postApiEstatesFavoriteAddEstateToClientAddEstateToClient(
        clientId: string,
        requestBody?: Estate,
    ): Observable<any> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/api/estates/Favorite/AddEstateToClient/AddEstateToClient/{clientId}',
            path: {
                'clientId': clientId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param estateId
     * @param clientId
     * @returns any Success
     * @throws ApiError
     */
    public postApiEstatesFavoriteAddExistingEstateToClientAddExistingEstateToClient(
        estateId: string,
        clientId: string,
    ): Observable<any> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/api/estates/Favorite/AddExistingEstateToClient/AddExistingEstateToClient/{estateId}/{clientId}',
            path: {
                'estateId': estateId,
                'clientId': clientId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param estateId
     * @param clientId
     * @returns any Success
     * @throws ApiError
     */
    public deleteApiEstatesFavoriteRemoveEstateFromClientRemoveEstateFromClient(
        estateId: string,
        clientId: string,
    ): Observable<any> {
        return __request(OpenAPI, this.http, {
            method: 'DELETE',
            url: '/api/estates/Favorite/RemoveEstateFromClient/RemoveEstateFromClient/{estateId}/{clientId}',
            path: {
                'estateId': estateId,
                'clientId': clientId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param estateId
     * @param clientId
     * @returns boolean Success
     * @throws ApiError
     */
    public getApiEstatesFavoriteClientHasEstateClientHasEstate(
        estateId: string,
        clientId: string,
    ): Observable<boolean> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/estates/Favorite/ClientHasEstate/ClientHasEstate/{estateId}/{clientId}',
            path: {
                'estateId': estateId,
                'clientId': clientId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param clientId
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public postApiEstatesFavoriteAddListingToClientAddListingToClient(
        clientId: string,
        requestBody?: Listing,
    ): Observable<any> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/api/estates/Favorite/AddListingToClient/AddListingToClient/{clientId}',
            path: {
                'clientId': clientId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param clientId
     * @param listingId
     * @returns any Success
     * @throws ApiError
     */
    public deleteApiEstatesFavoriteRemoveListingFromClientListing(
        clientId: string,
        listingId: string,
    ): Observable<any> {
        return __request(OpenAPI, this.http, {
            method: 'DELETE',
            url: '/api/estates/Favorite/RemoveListingFromClient/listing/{clientId}/{listingId}',
            path: {
                'clientId': clientId,
                'listingId': listingId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param clientId
     * @param listingId
     * @returns boolean Success
     * @throws ApiError
     */
    public getApiEstatesFavoriteClientHasListingClientHasListing(
        clientId: string,
        listingId: string,
    ): Observable<boolean> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/estates/Favorite/ClientHasListing/ClientHasListing/{clientId}/{listingId}',
            path: {
                'clientId': clientId,
                'listingId': listingId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
}
