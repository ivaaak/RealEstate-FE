/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import type { ActionResult } from '../../models/ActionResult';
import type { SendEmailRequest } from '../../models/SendEmailRequest';
import { OpenAPI } from '../../core/OpenAPI';
import { request as __request } from '../../core/request';
@Injectable({
    providedIn: 'root',
})
export class EmailService {
    constructor(public readonly http: HttpClient) {}
    /**
     * @param requestBody
     * @returns ActionResult Success
     * @throws ApiError
     */
    public postApiMessagingEmailSendEmail(
        requestBody?: SendEmailRequest,
    ): Observable<ActionResult> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/api/messaging/Email/SendEmail',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param requestBody
     * @returns ActionResult Success
     * @throws ApiError
     */
    public postApiMessagingEmailSendEmailWithAttachment(
        requestBody?: SendEmailRequest,
    ): Observable<ActionResult> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/api/messaging/Email/SendEmailWithAttachment',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param requestBody
     * @returns ActionResult Success
     * @throws ApiError
     */
    public postApiMessagingEmailSendEmailWithCustomHeader(
        requestBody?: SendEmailRequest,
    ): Observable<ActionResult> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/api/messaging/Email/SendEmailWithCustomHeader',
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
    public getApiMessagingEmailGetHealth(): Observable<string> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/messaging/Email/getHealth',
        });
    }
}
