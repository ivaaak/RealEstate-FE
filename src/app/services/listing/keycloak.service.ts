/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import type { Resource } from '../../models/Resource';
import type { User } from '../../models/User';
import type { UserDto } from '../../models/UserDto';
import { OpenAPI } from '../../core/OpenAPI';
import { request as __request } from '../../core/request';
@Injectable({
    providedIn: 'root',
})
export class KeycloakService {
    constructor(public readonly http: HttpClient) {}
    /**
     * @param realm
     * @param requestBody
     * @returns UserDto Success
     * @throws ApiError
     */
    public postApiListingsKeycloakCreateUserInRealm(
        realm?: string,
        requestBody?: User,
    ): Observable<UserDto> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/api/listings/Keycloak/CreateUserInRealm',
            query: {
                'realm': realm,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param realm
     * @param requestBody
     * @returns UserDto Success
     * @throws ApiError
     */
    public postApiListingsKeycloakCreateResourceInRealm(
        realm?: string,
        requestBody?: Resource,
    ): Observable<UserDto> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/api/listings/Keycloak/CreateResourceInRealm',
            query: {
                'realm': realm,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param realm
     * @returns UserDto Success
     * @throws ApiError
     */
    public getApiListingsKeycloakGetAllUsersForRealm(
        realm?: string,
    ): Observable<UserDto> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/listings/Keycloak/GetAllUsersForRealm',
            query: {
                'realm': realm,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param realm
     * @param userId
     * @returns UserDto Success
     * @throws ApiError
     */
    public getApiListingsKeycloakGetUserForRealm(
        realm?: string,
        userId?: string,
    ): Observable<UserDto> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/listings/Keycloak/GetUserForRealm',
            query: {
                'realm': realm,
                'userId': userId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param realm
     * @returns UserDto Success
     * @throws ApiError
     */
    public getApiListingsKeycloakGetRealm(
        realm?: string,
    ): Observable<UserDto> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/listings/Keycloak/GetRealm',
            query: {
                'realm': realm,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param realm
     * @param resourceId
     * @returns UserDto Success
     * @throws ApiError
     */
    public getApiListingsKeycloakGetResource(
        realm?: string,
        resourceId?: string,
    ): Observable<UserDto> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/listings/Keycloak/GetResource',
            query: {
                'realm': realm,
                'resourceId': resourceId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param realm
     * @param name
     * @returns UserDto Success
     * @throws ApiError
     */
    public getApiListingsKeycloakSearchResourcesByName(
        realm?: string,
        name?: string,
    ): Observable<UserDto> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/listings/Keycloak/SearchResourcesByName',
            query: {
                'realm': realm,
                'name': name,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param realm
     * @param userId
     * @param requestBody
     * @returns UserDto Success
     * @throws ApiError
     */
    public putApiListingsKeycloakUpdateUser(
        realm?: string,
        userId?: string,
        requestBody?: User,
    ): Observable<UserDto> {
        return __request(OpenAPI, this.http, {
            method: 'PUT',
            url: '/api/listings/Keycloak/UpdateUser',
            query: {
                'realm': realm,
                'userId': userId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @returns string Success
     * @throws ApiError
     */
    public getApiListingsKeycloakGetHealth(): Observable<string> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/listings/Keycloak/getHealth',
        });
    }
}
