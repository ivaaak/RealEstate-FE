/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import type { Note } from '../../models/Note';
import { OpenAPI } from '../../core/OpenAPI';
import { request as __request } from '../../core/request';
@Injectable({
    providedIn: 'root',
})
export class NoteService {
    constructor(public readonly http: HttpClient) {}
    /**
     * @param userId
     * @returns any Success
     * @throws ApiError
     */
    public getApiContractsNoteGetNotesList(
        userId?: number,
    ): Observable<any> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/contracts/Note/GetNotesList',
            query: {
                'userId': userId,
            },
        });
    }
    /**
     * @param userId
     * @param noteId
     * @returns any Success
     * @throws ApiError
     */
    public deleteApiContractsNoteDeleteNote(
        userId?: number,
        noteId?: number,
    ): Observable<any> {
        return __request(OpenAPI, this.http, {
            method: 'DELETE',
            url: '/api/contracts/Note/DeleteNote',
            query: {
                'userId': userId,
                'noteId': noteId,
            },
        });
    }
    /**
     * @param userId
     * @param noteId
     * @returns any Success
     * @throws ApiError
     */
    public getApiContractsNoteCheckIfUserHasNote(
        userId?: number,
        noteId?: number,
    ): Observable<any> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/contracts/Note/CheckIfUserHasNote',
            query: {
                'userId': userId,
                'noteId': noteId,
            },
        });
    }
    /**
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public postApiContractsNoteValidateNote(
        requestBody?: Note,
    ): Observable<any> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/api/contracts/Note/ValidateNote',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param fileName
     * @returns string Success
     * @throws ApiError
     */
    public getApiContractsNoteGetContentType(
        fileName?: string,
    ): Observable<string> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/contracts/Note/GetContentType',
            query: {
                'fileName': fileName,
            },
        });
    }
    /**
     * @returns string Success
     * @throws ApiError
     */
    public getApiContractsNoteGetHealth(): Observable<string> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/contracts/Note/getHealth',
        });
    }
}
