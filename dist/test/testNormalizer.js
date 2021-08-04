"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
var ava_1 = __importDefault(require("ava"));
var fs_1 = require("fs");
var lodash_1 = require("lodash");
var path_1 = require("path");
var src_1 = require("../src");
var linker_1 = require("../src/linker");
var normalizer_1 = require("../src/normalizer");
var normalizerDir = __dirname + '/../../test/normalizer';
function run() {
    fs_1.readdirSync(normalizerDir)
        .filter(function (_) { return /^.*\.json$/.test(_); })
        .map(function (_) { return path_1.join(normalizerDir, _); })
        .map(function (_) { return [_, require(_)]; })
        .forEach(function (_a) {
        var filename = _a[0], json = _a[1];
        var params = { filename: filename };
        ava_1.default(json.name, function (t) {
            var normalized = normalizer_1.normalize(linker_1.link(json.in), filename, json.options || src_1.DEFAULT_OPTIONS);
            t.snapshot(lodash_1.template(toString(normalized))(params));
            t.deepEqual(json.out, normalized);
        });
    });
}
exports.run = run;
function toString(json) {
    return JSON.stringify(json, null, 2);
}
//# sourceMappingURL=testNormalizer.js.map