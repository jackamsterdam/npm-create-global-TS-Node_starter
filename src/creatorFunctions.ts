#!/usr/bin/env node 
import fs from 'fs/promises'
import { existsSync } from 'fs'


/**
 * The `tsconfig.json` file is a configuration file for the TypeScript compiler. 
 * The code below tells the TypeScript compiler to create the JavaScript files in the `build` folder.
 * The code below also tells the TypeScript compiler to target ES5.
 * The code below also tells the TypeScript compiler to enable ES modules and enable interoperability between Es modules 
 */
const tsconfigfileContent = {
    "compilerOptions": {
        "outDir": "build",
        "target": "ES5",
        "esModuleInterop": true,
    }
}

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
const packageJsonFileContent = 
{
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
  }



/**
 * Create a file called tsconfig.json in the current directory
 */
export async function createStarterTSNode() {
   
    try {
        const path = './tsconfig.json'

        await fs.writeFile(path, JSON.stringify(tsconfigfileContent))
    }
    catch(err: any) {
        console.log(err)
    }

}



/**
 * Create a package.json file in the current directory
 */
export async function createStarterPackageJson() {
   
    try {
        const path = './package.json'

        await fs.writeFile(path, JSON.stringify(packageJsonFileContent))
    }
    catch(err: any) {
        console.log(err)
    }

}


/**
 * Create a folder called src and a file called app.ts in the src folder
 */
export async function createStarterFileAndFolder() {
   
    try {
        
        if (!existsSync('./src')) 
        await fs.mkdir('./src')

        const path = './src/app.ts'

        await fs.writeFile(path, '')
    }
    catch(err: any) {
        console.log(err)
    }

}

export async function createReadMeFile() {
   
    try {
        
     
        const path = './README.md'

        await fs.writeFile(path, '')

    }
    catch(err: any) {
        console.log(err)
    }

}


