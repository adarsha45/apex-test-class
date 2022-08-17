import * as vscode from 'vscode';
import {exec} from 'child_process';
const path = require('path');
const fs = require('fs');
export async function sfdxorgcreator(uri:any) { 
    exec(`sfdx force:apex:test:run --synchronous --classnames TestA`,
    function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if(error !== null) {
             console.log('exec error: ' + error);
        }
    });  


 }