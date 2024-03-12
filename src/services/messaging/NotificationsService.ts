/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import type { Estate } from '../../models/Estate';
import type { Listing } from '../../models/Listing';
import { OpenAPI } from '../../core/OpenAPI';
import { request as __request } from '../../core/request';
@Injectable({
    providedIn: 'root',
})
export class NotificationsService {
    constructor(public readonly http: HttpClient) {}
    /**
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public postApiMessagingNotificationsMediatRPostEstateNotification(
        requestBody?: Estate,
    ): Observable<any> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/api/messaging/Notifications/MediatRPostEstateNotification',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public postApiMessagingNotificationsMediatRPostListingNotification(
        requestBody?: Listing,
    ): Observable<any> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/api/messaging/Notifications/MediatRPostListingNotification',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public postApiMessagingNotificationsIPublisherPostEstateNotification(
        requestBody?: Estate,
    ): Observable<any> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/api/messaging/Notifications/IPublisherPostEstateNotification',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public postApiMessagingNotificationsIPublisherPostListingNotification(
        requestBody?: Listing,
    ): Observable<any> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/api/messaging/Notifications/IPublisherPostListingNotification',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public postApiMessagingNotificationsMassTransitPostEstateNotification(
        requestBody?: Estate,
    ): Observable<any> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/api/messaging/Notifications/MassTransitPostEstateNotification',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public postApiMessagingNotificationsMassTransitPostListingNotification(
        requestBody?: Listing,
    ): Observable<any> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/api/messaging/Notifications/MassTransitPostListingNotification',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
