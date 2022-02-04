#!/usr/bin/env node 
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* CreateStarterTSNode() creates a new folder and file structure for a TypeScript project.

createStarterPackageJson() creates a package.json file in the new project.

createStarterFileAndFolder() creates a file and folder in the new project.

createReadMeFile() creates a readme.md file in the new project. */
var creatorFunctions_1 = require("./creatorFunctions");
/**
 * This function will be called for global npm when user enters in the command line:
 * "create-ts-node-starter-by-captain-jack"
 */
function createAllFiles() {
    (0, creatorFunctions_1.createStarterTSNode)();
    (0, creatorFunctions_1.createStarterPackageJson)();
    (0, creatorFunctions_1.createStarterFileAndFolder)();
    (0, creatorFunctions_1.createReadMeFile)();
}
createAllFiles();
