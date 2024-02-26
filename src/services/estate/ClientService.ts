/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import { request as __request } from '../../core/request';
import { OpenAPI } from '../../core/OpenAPI';
import { Client } from '../../models/Client';

@Injectable({
    providedIn: 'root',
})
export class ClientService {
    constructor(public readonly http: HttpClient) {}

    /**
     * @returns Client Success
     * @throws ApiError
     */
    public getApiEstatesClientGetAllClients(): Observable<Array<Client>> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/estates/Client/GetAllClients',
            errors: {
                404: `Not Found`,
            },
        });
    }

    /**
     * @param clientId
     * @returns Client Success
     * @throws ApiError
     */
    public getApiEstatesClientGetClientById(
        clientId: string,
    ): Observable<Client> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/estates/Client/GetClientById/{clientId}',
            path: {
                'clientId': clientId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }

    /**
     * @param requestBody
     * @returns Client Created
     * @throws ApiError
     */
    public postApiEstatesClientAddClient(
        requestBody?: Client,
    ): Observable<Client> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/api/estates/Client/AddClient',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param clientId
     * @param requestBody
     * @returns Client Success
     * @throws ApiError
     */
    public putApiEstatesClientUpdateClient(
        clientId: string,
        requestBody?: Client,
    ): Observable<Client> {
        return __request(OpenAPI, this.http, {
            method: 'PUT',
            url: '/api/estates/Client/UpdateClient/{clientId}',
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
     * @returns void
     * @throws ApiError
     */
    public deleteApiEstatesClientDeleteClient(
        clientId: string,
    ): Observable<void> {
        return __request(OpenAPI, this.http, {
            method: 'DELETE',
            url: '/api/estates/Client/DeleteClient/{clientId}',
            path: {
                'clientId': clientId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
}
