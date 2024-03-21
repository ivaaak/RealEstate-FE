/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';

import { OpenAPI } from '../../core/OpenAPI';
import { request as __request } from '../../core/request';
import { Estate } from '../../models/Estate';
import { EstateDTO } from '../../models/EstateDTO';
import { SearchCriteriaObject } from '../../models/SearchCriteriaObject';
import { EstateDTOPagedResult } from '../../models/EstateDTOPagedResult';
@Injectable({
    providedIn: 'root',
})
export class EstateService {
    constructor(public readonly http: HttpClient) {}

    /**
     * @param requestBody
     * @returns Estate Success
     * @throws ApiError
     */
    public postApiEstatesEstateCreate(
        requestBody?: Estate,
    ): Observable<Estate> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/api/estates/estate/create',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not Found`,
            },
        });
    }

    /**
     * @returns EstateDTO Success
     * @throws ApiError
     */
    public getApiEstatesEstateGetall(): Observable<Array<EstateDTO>> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/estates/estate/getall',
            errors: {
                404: `Not Found`,
            },
        });
    }

    /**
     * @param id
     * @returns EstateDTO Success
     * @throws ApiError
     */
    public getApiEstatesEstateGetbyid(
        id: number,
    ): Observable<EstateDTO> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/estates/estate/getbyid/{id}',
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
     * @returns boolean Success
     * @throws ApiError
     */
    public putApiEstatesEstateUpdate(
        id: number,
        requestBody?: EstateDTO,
    ): Observable<boolean> {
        return __request(OpenAPI, this.http, {
            method: 'PUT',
            url: '/api/estates/estate/update/{id}',
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
     * @returns boolean Success
     * @throws ApiError
     */
    public deleteApiEstatesEstateDelete(
        id: number,
    ): Observable<boolean> {
        return __request(OpenAPI, this.http, {
            method: 'DELETE',
            url: '/api/estates/estate/delete/{id}',
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
     * @returns boolean Success
     * @throws ApiError
     */
    public deleteApiEstatesEstateHarddelete(
        id: number,
    ): Observable<boolean> {
        return __request(OpenAPI, this.http, {
            method: 'DELETE',
            url: '/api/estates/estate/harddelete/{id}',
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
     * @returns boolean Success
     * @throws ApiError
     */
    public getApiEstatesEstateExists(
        id: number,
    ): Observable<boolean> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/estates/estate/exists/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }

    /**
     * @param searchTerm
     * @returns EstateDTO Success
     * @throws ApiError
     */
    public getApiEstatesEstateSearch(
        searchTerm: string,
    ): Observable<Array<EstateDTO>> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/estates/estate/search/{searchTerm}',
            path: {
                'searchTerm': searchTerm,
            },
        });
    }

    /**
     * @param requestBody
     * @returns EstateDTOPagedResult Success
     * @throws ApiError
     */
    public postApiEstatesEstateSearch(
        requestBody?: SearchCriteriaObject,
    ): Observable<EstateDTOPagedResult> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/api/estates/estate/search',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns string Success
     * @throws ApiError
     */
    public getApiEstatesEstateHealth(): Observable<string> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/estates/estate/health',
        });
    }
}
