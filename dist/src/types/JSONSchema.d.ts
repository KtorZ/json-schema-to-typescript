/// <reference types="lodash" />
import { JSONSchema4, JSONSchema4Type, JSONSchema4TypeName } from 'json-schema';
export declare type SchemaType = 'ALL_OF' | 'UNNAMED_SCHEMA' | 'ANY' | 'ANY_OF' | 'BOOLEAN' | 'NAMED_ENUM' | 'NAMED_SCHEMA' | 'NULL' | 'NUMBER' | 'BIGINT' | 'STRING' | 'OBJECT' | 'ONE_OF' | 'TYPED_ARRAY' | 'REFERENCE' | 'UNION' | 'UNNAMED_ENUM' | 'UNTYPED_ARRAY' | 'CUSTOM_TYPE';
export declare type JSONSchemaTypeName = JSONSchema4TypeName;
export declare type JSONSchemaType = JSONSchema4Type;
export interface JSONSchema extends JSONSchema4 {
    /**
     * schema extension to support numeric enums
     */
    tsEnumNames?: string[];
    /**
     * schema extension to support custom types
     */
    tsType?: string;
}
export declare const Parent: unique symbol;
export interface LinkedJSONSchema extends JSONSchema {
    /**
     * A reference to this schema's parent node, for convenience.
     * `null` when this is the root schema.
     */
    [Parent]: LinkedJSONSchema | null;
    additionalItems?: boolean | LinkedJSONSchema;
    additionalProperties: boolean | LinkedJSONSchema;
    items?: LinkedJSONSchema | LinkedJSONSchema[];
    definitions?: {
        [k: string]: LinkedJSONSchema;
    };
    properties?: {
        [k: string]: LinkedJSONSchema;
    };
    patternProperties?: {
        [k: string]: LinkedJSONSchema;
    };
    dependencies?: {
        [k: string]: LinkedJSONSchema | string[];
    };
    allOf?: LinkedJSONSchema[];
    anyOf?: LinkedJSONSchema[];
    oneOf?: LinkedJSONSchema[];
    not?: LinkedJSONSchema;
}
export interface NormalizedJSONSchema extends LinkedJSONSchema {
    additionalItems?: boolean | NormalizedJSONSchema;
    additionalProperties: boolean | NormalizedJSONSchema;
    extends?: string[];
    items?: NormalizedJSONSchema | NormalizedJSONSchema[];
    definitions?: {
        [k: string]: NormalizedJSONSchema;
    };
    properties?: {
        [k: string]: NormalizedJSONSchema;
    };
    patternProperties?: {
        [k: string]: NormalizedJSONSchema;
    };
    dependencies?: {
        [k: string]: NormalizedJSONSchema | string[];
    };
    allOf?: NormalizedJSONSchema[];
    anyOf?: NormalizedJSONSchema[];
    oneOf?: NormalizedJSONSchema[];
    not?: NormalizedJSONSchema;
    required: string[];
}
export interface EnumJSONSchema extends NormalizedJSONSchema {
    enum: any[];
}
export interface NamedEnumJSONSchema extends NormalizedJSONSchema {
    tsEnumNames: string[];
}
export interface SchemaSchema extends NormalizedJSONSchema {
    properties: {
        [k: string]: NormalizedJSONSchema;
    };
    required: string[];
}
export interface JSONSchemaWithDefinitions extends NormalizedJSONSchema {
    definitions: {
        [k: string]: NormalizedJSONSchema;
    };
}
export interface CustomTypeJSONSchema extends NormalizedJSONSchema {
    tsType: string;
}
export declare const getRootSchema: ((schema: LinkedJSONSchema) => LinkedJSONSchema) & import("lodash").MemoizedFunction;
export declare function isPrimitive(schema: LinkedJSONSchema | JSONSchemaType): schema is JSONSchemaType;
export declare function isCompound(schema: JSONSchema): boolean;
