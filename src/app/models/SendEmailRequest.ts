/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Stream } from './Stream';
export type SendEmailRequest = {
    from?: string | null;
    to?: string | null;
    subject?: string | null;
    htmlContent?: string | null;
    fileStream?: Stream;
    fileName?: string | null;
    header?: Record<string, string | null> | null;
};

