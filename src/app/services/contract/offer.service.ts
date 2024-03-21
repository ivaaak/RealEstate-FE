/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import type { Offer } from '../../models/Offer';
import { OpenAPI } from '../../core/OpenAPI';
import { request as __request } from '../../core/request';
@Injectable({
    providedIn: 'root',
})
export class OfferService {
    constructor(public readonly http: HttpClient) {}
    /**
     * @param userId
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public postApiContractsOfferUploadOffer(
        userId?: number,
        requestBody?: Offer,
    ): Observable<any> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/api/contracts/Offer/UploadOffer',
            query: {
                'userId': userId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param userId
     * @returns any Success
     * @throws ApiError
     */
    public getApiContractsOfferGetOffersList(
        userId?: number,
    ): Observable<any> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/contracts/Offer/GetOffersList',
            query: {
                'userId': userId,
            },
        });
    }
    /**
     * @param userId
     * @param offerId
     * @returns any Success
     * @throws ApiError
     */
    public getApiContractsOfferDownloadOfferDownloadOffer(
        userId: number,
        offerId: number,
    ): Observable<any> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/contracts/Offer/DownloadOffer/DownloadOffer/{userId}/{offerId}',
            path: {
                'userId': userId,
                'offerId': offerId,
            },
        });
    }
    /**
     * @param userId
     * @param offerId
     * @returns any Success
     * @throws ApiError
     */
    public deleteApiContractsOfferDeleteOffer(
        userId?: number,
        offerId?: number,
    ): Observable<any> {
        return __request(OpenAPI, this.http, {
            method: 'DELETE',
            url: '/api/contracts/Offer/DeleteOffer',
            query: {
                'userId': userId,
                'offerId': offerId,
            },
        });
    }
    /**
     * @param userId
     * @param offerId
     * @returns any Success
     * @throws ApiError
     */
    public getApiContractsOfferCheckIfUserHasOffer(
        userId?: number,
        offerId?: number,
    ): Observable<any> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/contracts/Offer/CheckIfUserHasOffer',
            query: {
                'userId': userId,
                'offerId': offerId,
            },
        });
    }
    /**
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public postApiContractsOfferValidateOffer(
        requestBody?: Offer,
    ): Observable<any> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/api/contracts/Offer/ValidateOffer',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param fileName
     * @returns string Success
     * @throws ApiError
     */
    public getApiContractsOfferGetContentType(
        fileName?: string,
    ): Observable<string> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/contracts/Offer/GetContentType',
            query: {
                'fileName': fileName,
            },
        });
    }
    /**
     * @returns string Success
     * @throws ApiError
     */
    public getApiContractsOfferGetHealth(): Observable<string> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/contracts/Offer/getHealth',
        });
    }
}
