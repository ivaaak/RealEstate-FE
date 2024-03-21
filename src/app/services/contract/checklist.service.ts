/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import type { Checklist } from '../../models/Checklist';
import { OpenAPI } from '../../core/OpenAPI';
import { request as __request } from '../../core/request';
@Injectable({
    providedIn: 'root',
})
export class ChecklistService {
    constructor(public readonly http: HttpClient) {}
    /**
     * @param userId
     * @returns any Success
     * @throws ApiError
     */
    public getApiContractsChecklistGetChecklistsList(
        userId?: number,
    ): Observable<any> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/contracts/Checklist/GetChecklistsList',
            query: {
                'userId': userId,
            },
        });
    }
    /**
     * @param userId
     * @param documentId
     * @returns any Success
     * @throws ApiError
     */
    public deleteApiContractsChecklistDeleteChecklist(
        userId?: number,
        documentId?: number,
    ): Observable<any> {
        return __request(OpenAPI, this.http, {
            method: 'DELETE',
            url: '/api/contracts/Checklist/DeleteChecklist',
            query: {
                'userId': userId,
                'documentId': documentId,
            },
        });
    }
    /**
     * @param userId
     * @param documentId
     * @returns any Success
     * @throws ApiError
     */
    public getApiContractsChecklistCheckIfUserHasChecklist(
        userId?: number,
        documentId?: number,
    ): Observable<any> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/contracts/Checklist/CheckIfUserHasChecklist',
            query: {
                'userId': userId,
                'documentId': documentId,
            },
        });
    }
    /**
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public postApiContractsChecklistValidateChecklist(
        requestBody?: Checklist,
    ): Observable<any> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/api/contracts/Checklist/ValidateChecklist',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param fileName
     * @returns string Success
     * @throws ApiError
     */
    public getApiContractsChecklistGetContentType(
        fileName?: string,
    ): Observable<string> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/contracts/Checklist/GetContentType',
            query: {
                'fileName': fileName,
            },
        });
    }
    /**
     * @returns string Success
     * @throws ApiError
     */
    public getApiContractsChecklistGetHealth(): Observable<string> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/contracts/Checklist/getHealth',
        });
    }
}
