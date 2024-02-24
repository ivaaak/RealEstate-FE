/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import type { DocumentModel } from '../../models/DocumentModel';
import { OpenAPI } from '../../core/OpenAPI';
import { request as __request } from '../../core/request';
@Injectable({
    providedIn: 'root',
})
export class DocumentService {
    constructor(public readonly http: HttpClient) {}
    /**
     * @param userId
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public postApiContractsDocumentUploadDocument(
        userId?: number,
        requestBody?: DocumentModel,
    ): Observable<any> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/api/contracts/Document/UploadDocument',
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
    public getApiContractsDocumentGetDocumentsList(
        userId?: number,
    ): Observable<any> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/contracts/Document/GetDocumentsList',
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
    public getApiContractsDocumentDownloadDocumentDownloadDocument(
        userId: number,
        documentId: number,
    ): Observable<any> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/contracts/Document/DownloadDocument/DownloadDocument/{userId}/{documentId}',
            path: {
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
    public deleteApiContractsDocumentDeleteDocument(
        userId?: number,
        documentId?: number,
    ): Observable<any> {
        return __request(OpenAPI, this.http, {
            method: 'DELETE',
            url: '/api/contracts/Document/DeleteDocument',
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
    public getApiContractsDocumentCheckIfUserHasDocument(
        userId?: number,
        documentId?: number,
    ): Observable<any> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/contracts/Document/CheckIfUserHasDocument',
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
    public postApiContractsDocumentValidateDocument(
        requestBody?: DocumentModel,
    ): Observable<any> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/api/contracts/Document/ValidateDocument',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param fileName
     * @returns string Success
     * @throws ApiError
     */
    public getApiContractsDocumentGetContentType(
        fileName?: string,
    ): Observable<string> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/contracts/Document/GetContentType',
            query: {
                'fileName': fileName,
            },
        });
    }
    /**
     * @returns string Success
     * @throws ApiError
     */
    public getApiContractsDocumentGetHealth(): Observable<string> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/contracts/Document/getHealth',
        });
    }
}
