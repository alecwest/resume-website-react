/* tslint:disable */
/* eslint-disable */
/**
 * resume-data
 * API for managing my resume data
 *
 * The version of the OpenAPI document: 2023-01-16T13:44:13Z
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ResumeEntry,
  UserData,
} from '../models/index';
import {
    ResumeEntryFromJSON,
    ResumeEntryToJSON,
    UserDataFromJSON,
    UserDataToJSON,
} from '../models/index';

export interface GetEntriesByUserRequest {
    user: string;
}

export interface PutEntryRequest {
    user: string;
    resumeEntry: ResumeEntry;
}

export interface ResumeUserOptionsRequest {
    user: string;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     */
    async getEntriesByUserRaw(requestParameters: GetEntriesByUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserData>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling getEntriesByUser.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // api_key authentication
        }

        const response = await this.request({
            path: `/resume/{user}`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserDataFromJSON(jsonValue));
    }

    /**
     */
    async getEntriesByUser(requestParameters: GetEntriesByUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserData> {
        const response = await this.getEntriesByUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async putEntryRaw(requestParameters: PutEntryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling putEntry.');
        }

        if (requestParameters.resumeEntry === null || requestParameters.resumeEntry === undefined) {
            throw new runtime.RequiredError('resumeEntry','Required parameter requestParameters.resumeEntry was null or undefined when calling putEntry.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // api_key authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // resume-website-api-gateway-authorizer authentication
        }

        const response = await this.request({
            path: `/resume/{user}`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ResumeEntryToJSON(requestParameters.resumeEntry),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async putEntry(requestParameters: PutEntryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.putEntryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async resumeUserOptionsRaw(requestParameters: ResumeUserOptionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling resumeUserOptions.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/resume/{user}`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'OPTIONS',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async resumeUserOptions(requestParameters: ResumeUserOptionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.resumeUserOptionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
