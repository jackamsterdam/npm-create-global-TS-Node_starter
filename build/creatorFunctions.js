#!/usr/bin/env node 
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReadMeFile = exports.createStarterFileAndFolder = exports.createStarterPackageJson = exports.createStarterTSNode = void 0;
var promises_1 = __importDefault(require("fs/promises"));
var fs_1 = require("fs");
/**
 * The `tsconfig.json` file is a configuration file for the TypeScript compiler.
 * The code below tells the TypeScript compiler to create the JavaScript files in the `build` folder.
 * The code below also tells the TypeScript compiler to target ES5.
 * The code below also tells the TypeScript compiler to enable ES modules and enable interoperability between Es modules
 */
var tsconfigfileContent = {
    "compilerOptions": {
        "outDir": "build",
        "target": "ES5",
        "esModuleInterop": true,
    }
};
/* The package.json file is a file that contains information about your project.
It contains information about the version of your project, the author, the license, and the scripts
that are run when you start your project.
It's used by npm (Node Package Manager) to install your project's dependencies.
It's also used by TypeScript to compile your project.

The package.json file contains a "scripts" property.
The scripts section is where you can specify the commands that are run when you start your project
and when you run your tests.

The "scripts" property is an object that contains a key-value pair.
Use either of the two following scripts:
The key is "start" and the value is "ts-node src/app.ts".
The key is "dev" and the value is "nodemon --exec ts-node src/app.ts".
This key-value pair tells npm to run the app.ts file
*/
var packageJsonFileContent = {
    "name": "Type name of your project here",
    "version": "1.0.0",
    "description": "",
    "scripts": {
        "start": "ts-node src/app.ts",
        "dev": "nodemon --exec ts-node src/app.ts"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "devDependencies": {
        "@types/node": "^17.0.14"
    }
};
/**
 * Create a file called tsconfig.json in the current directory
 */
function createStarterTSNode() {
    return __awaiter(this, void 0, void 0, function () {
        var path, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    path = './tsconfig.json';
                    return [4 /*yield*/, promises_1.default.writeFile(path, JSON.stringify(tsconfigfileContent, null, 4))];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    console.log(err_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.createStarterTSNode = createStarterTSNode;
/**
 * Create a package.json file in the current directory
 */
function createStarterPackageJson() {
    return __awaiter(this, void 0, void 0, function () {
        var path, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    path = './package.json';
                    return [4 /*yield*/, promises_1.default.writeFile(path, JSON.stringify(packageJsonFileContent, null, 4))];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    err_2 = _a.sent();
                    console.log(err_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.createStarterPackageJson = createStarterPackageJson;
/**
 * Create a folder called src and a file called app.ts in the src folder
 */
function createStarterFileAndFolder() {
    return __awaiter(this, void 0, void 0, function () {
        var path, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    if (!!(0, fs_1.existsSync)('./src')) return [3 /*break*/, 2];
                    return [4 /*yield*/, promises_1.default.mkdir('./src')];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    path = './src/app.ts';
                    return [4 /*yield*/, promises_1.default.writeFile(path, '')];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    err_3 = _a.sent();
                    console.log(err_3);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.createStarterFileAndFolder = createStarterFileAndFolder;
/**
 * Create a file called README.md in the current directory
 */
function createReadMeFile() {
    return __awaiter(this, void 0, void 0, function () {
        var path, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    path = './README.md';
                    return [4 /*yield*/, promises_1.default.writeFile(path, '')];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    err_4 = _a.sent();
                    console.log(err_4);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.createReadMeFile = createReadMeFile;
