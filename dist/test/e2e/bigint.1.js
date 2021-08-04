"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = exports.input = void 0;
var src_1 = require("../../src");
exports.input = {
    title: 'Example Schema -- BigInt Disabled',
    type: 'object',
    additionalProperties: false,
    properties: {
        secondsSinceDawnOfTime: {
            type: 'integer'
        },
        reasonablySizedNumber: {
            type: 'integer',
            maximum: 42
        }
    }
};
exports.options = __assign(__assign({}, src_1.DEFAULT_OPTIONS), { enableBigInt: false });
//# sourceMappingURL=bigint.1.js.map