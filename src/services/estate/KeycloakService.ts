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
    public postApiEstatesKeycloakCreateUserInRealm(
        realm?: string,
        requestBody?: User,
    ): Observable<UserDto> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/api/estates/Keycloak/CreateUserInRealm',
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
    public postApiEstatesKeycloakCreateResourceInRealm(
        realm?: string,
        requestBody?: Resource,
    ): Observable<UserDto> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/api/estates/Keycloak/CreateResourceInRealm',
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
    public getApiEstatesKeycloakGetAllUsersForRealm(
        realm?: string,
    ): Observable<UserDto> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/estates/Keycloak/GetAllUsersForRealm',
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
    public getApiEstatesKeycloakGetUserForRealm(
        realm?: string,
        userId?: string,
    ): Observable<UserDto> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/estates/Keycloak/GetUserForRealm',
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
    public getApiEstatesKeycloakGetRealm(
        realm?: string,
    ): Observable<UserDto> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/estates/Keycloak/GetRealm',
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
    public getApiEstatesKeycloakGetResource(
        realm?: string,
        resourceId?: string,
    ): Observable<UserDto> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/estates/Keycloak/GetResource',
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
    public getApiEstatesKeycloakSearchResourcesByName(
        realm?: string,
        name?: string,
    ): Observable<UserDto> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/estates/Keycloak/SearchResourcesByName',
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
    public putApiEstatesKeycloakUpdateUser(
        realm?: string,
        userId?: string,
        requestBody?: User,
    ): Observable<UserDto> {
        return __request(OpenAPI, this.http, {
            method: 'PUT',
            url: '/api/estates/Keycloak/UpdateUser',
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
    public getApiEstatesKeycloakGetHealth(): Observable<string> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/estates/Keycloak/getHealth',
        });
    }
}
