/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import type { AttributeListDto } from '../../models/AttributeListDto';
import type { UserDto } from '../../models/UserDto';
import { OpenAPI } from '../../core/OpenAPI';
import { request as __request } from '../../core/request';
@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(public readonly http: HttpClient) {}
    /**
     * @returns UserDto Success
     * @throws ApiError
     */
    public getApiEstatesUserGetCurrentlyLoggedInUser(): Observable<UserDto> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/estates/User/GetCurrentlyLoggedInUser',
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param userId
     * @returns UserDto Success
     * @throws ApiError
     */
    public getApiEstatesUserGetUserById(
        userId: string,
    ): Observable<UserDto> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/estates/User/GetUserById/{userId}',
            path: {
                'userId': userId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @returns AttributeListDto Success
     * @throws ApiError
     */
    public getApiEstatesUserGetCurrentAttributes(): Observable<AttributeListDto> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/estates/User/GetCurrentAttributes',
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param userId
     * @returns AttributeListDto Success
     * @throws ApiError
     */
    public getApiEstatesUserGetAttributesNyId(
        userId: string,
    ): Observable<AttributeListDto> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/estates/User/GetAttributesNyId/{userId}',
            path: {
                'userId': userId,
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
    public getApiEstatesUserGetHealth(): Observable<string> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/estates/User/getHealth',
        });
    }
}
