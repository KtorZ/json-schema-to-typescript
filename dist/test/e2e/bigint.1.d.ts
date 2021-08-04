/// <reference path="../../../types/json-schema-ref-parser.d.ts" />
export declare const input: {
    title: string;
    type: string;
    additionalProperties: boolean;
    properties: {
        secondsSinceDawnOfTime: {
            type: string;
        };
        reasonablySizedNumber: {
            type: string;
            maximum: number;
        };
    };
};
export declare const options: {
    enableBigInt: boolean;
    bannerComment: string;
    cwd: string;
    declareExternallyReferenced: boolean;
    enableConstEnums: boolean;
    format: boolean;
    ignoreMinAndMaxItems: boolean;
    strictIndexSignatures: boolean;
    style: import("prettier").Options;
    unreachableDefinitions: boolean;
    unknownAny: boolean;
    $refOptions: import("json-schema-ref-parser").Options;
};
