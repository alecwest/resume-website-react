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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ConsumedCapacity
 */
export interface ConsumedCapacity {
    /**
     * 
     * @type {string}
     * @memberof ConsumedCapacity
     */
    tableName: string;
    /**
     * 
     * @type {number}
     * @memberof ConsumedCapacity
     */
    capacityUnits: number;
}

/**
 * Check if a given object implements the ConsumedCapacity interface.
 */
export function instanceOfConsumedCapacity(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "tableName" in value;
    isInstance = isInstance && "capacityUnits" in value;

    return isInstance;
}

export function ConsumedCapacityFromJSON(json: any): ConsumedCapacity {
    return ConsumedCapacityFromJSONTyped(json, false);
}

export function ConsumedCapacityFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConsumedCapacity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tableName': json['TableName'],
        'capacityUnits': json['CapacityUnits'],
    };
}

export function ConsumedCapacityToJSON(value?: ConsumedCapacity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'TableName': value.tableName,
        'CapacityUnits': value.capacityUnits,
    };
}
