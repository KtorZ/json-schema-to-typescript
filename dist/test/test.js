"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testCLI_1 = require("./testCLI");
var testCompileFromFile_1 = require("./testCompileFromFile");
var testE2E_1 = require("./testE2E");
var testLinker_1 = require("./testLinker");
var testNormalizer_1 = require("./testNormalizer");
var testUtils_1 = require("./testUtils");
testE2E_1.run();
if (!testE2E_1.hasOnly()) {
    testCompileFromFile_1.run();
    testCLI_1.run();
    testLinker_1.run();
    testNormalizer_1.run();
    testUtils_1.run();
}
//# sourceMappingURL=test.js.map