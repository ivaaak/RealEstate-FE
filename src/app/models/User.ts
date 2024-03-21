/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Credential } from './Credential';
import type { FederatedIdentity } from './FederatedIdentity';
import type { UserConsent } from './UserConsent';
export type User = {
    access?: Record<string, boolean | null> | null;
    attributes?: Record<string, Array<string> | null> | null;
    clientConsents?: Array<UserConsent> | null;
    clientRoles?: Record<string, string> | null;
    createdTimestamp?: number | null;
    credentials?: Array<Credential> | null;
    disableableCredentialTypes?: Array<string> | null;
    email?: string | null;
    emailVerified?: boolean | null;
    enabled?: boolean | null;
    federatedIdentities?: Array<FederatedIdentity> | null;
    federationLink?: string | null;
    firstName?: string | null;
    groups?: Array<string> | null;
    id?: string | null;
    lastName?: string | null;
    notBefore?: number | null;
    origin?: string | null;
    realmRoles?: Array<string> | null;
    requiredActions?: Array<string> | null;
    self?: string | null;
    serviceAccountClientId?: string | null;
    username?: string | null;
    totp?: boolean | null;
};

