/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import type { Project } from '../../models/Project';
import { OpenAPI } from '../../core/OpenAPI';
import { request as __request } from '../../core/request';
@Injectable({
    providedIn: 'root',
})
export class ProjectService {
    constructor(public readonly http: HttpClient) {}
    /**
     * @param userId
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public postApiContractsProjectUploadProject(
        userId?: number,
        requestBody?: Project,
    ): Observable<any> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/api/contracts/Project/UploadProject',
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
    public getApiContractsProjectGetProjectsList(
        userId?: number,
    ): Observable<any> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/contracts/Project/GetProjectsList',
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
    public deleteApiContractsProjectDeleteProject(
        userId?: number,
        documentId?: number,
    ): Observable<any> {
        return __request(OpenAPI, this.http, {
            method: 'DELETE',
            url: '/api/contracts/Project/DeleteProject',
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
    public getApiContractsProjectCheckIfUserHasProject(
        userId?: number,
        documentId?: number,
    ): Observable<any> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/contracts/Project/CheckIfUserHasProject',
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
    public postApiContractsProjectValidateProject(
        requestBody?: Project,
    ): Observable<any> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/api/contracts/Project/ValidateProject',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param fileName
     * @returns string Success
     * @throws ApiError
     */
    public getApiContractsProjectGetContentType(
        fileName?: string,
    ): Observable<string> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/contracts/Project/GetContentType',
            query: {
                'fileName': fileName,
            },
        });
    }
    /**
     * @returns string Success
     * @throws ApiError
     */
    public getApiContractsProjectGetHealth(): Observable<string> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/contracts/Project/getHealth',
        });
    }
}
