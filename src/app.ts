#!/usr/bin/env node 

/* CreateStarterTSNode() creates a new folder and file structure for a TypeScript project.

createStarterPackageJson() creates a package.json file in the new project.

createStarterFileAndFolder() creates a file and folder in the new project.

createReadMeFile() creates a readme.md file in the new project. */
import {createStarterTSNode, createStarterPackageJson, createStarterFileAndFolder, createReadMeFile} from './creatorFunctions'


/**
 * This function will be called for global npm when user enters in the command line: 
 * "create-ts-node-starter-by-captain-jack"
 */
function createAllFiles() {
  createStarterTSNode()
  createStarterPackageJson()
  createStarterFileAndFolder()
  createReadMeFile()
}



createAllFiles() 


