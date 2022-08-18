// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { sfdxorgcreator } from './auth';
import {exec} from 'child_process';
import { fileFrom } from 'node-fetch';
export async function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('extension.sayHello',async (uri: vscode.Uri, event) => {
		let editor: any = vscode.window.activeTextEditor;
		let selectedText: any;
		let filename: any;

		let currentOpenedFilename: any = vscode.window.activeTextEditor?.document.fileName.replace(/^.*[\\\/]/, '').split('.')[0];
		let currentOpenedFilenamelength = currentOpenedFilename.length;
		let currentOpenedFilenamex: any = currentOpenedFilename?.includes('-') ? currentOpenedFilename.split('-')[0] : currentOpenedFilename;
		let currentOpenedFilenamexlength:any = currentOpenedFilenamex.length;
		if(currentOpenedFilenamexlength > currentOpenedFilenamelength){
			filename =  currentOpenedFilenamex;
		}else{
			filename = currentOpenedFilename;
		}
		if (!editor.selection.isEmpty) {
			selectedText = editor?.document.getText(editor.selection);
			console.log(selectedText);
			let outputString: any = filename + "." + selectedText;
			console.log(outputString);
			exec(`sfdx force:apex:test:run -u niteshorg -t "${outputString}" -r human`,
				function (error, stdout, stderr) {
					console.log(stdout);	
					if(stderr !== null){			
						console.log('stderr: ' + stderr);
				 }	
					if (error !== null) {
					  console.log('exec error: ' + error);
					}
				});
		} else {
			console.log("plese selete a public method");
		}
	});

	let disc = vscode.commands.registerCommand('extension.sayHi',async (uri:vscode.Uri,event) => {
		
				let editor:any =vscode.window.activeTextEditor;
		
			let selectedText:any;
			let filename: any;
			let outputString:any;

			let currentOpenedFilename: any = vscode.window.activeTextEditor?.document.fileName.replace(/^.*[\\\/]/, '').split('.')[0];
			let currentOpenedFilenamelength = currentOpenedFilename.length;
			let currentOpenedFilenamex: any = currentOpenedFilename?.includes('-') ? currentOpenedFilename.split('-')[0] : currentOpenedFilename;
			let currentOpenedFilenamexlength:any = currentOpenedFilenamex.length;
			if(currentOpenedFilenamexlength > currentOpenedFilenamelength){
				filename =  currentOpenedFilenamex;
			}else{
				filename = currentOpenedFilename;
			}
			
			outputString = filename;

		 exec(`sfdx force:apex:test:run -u niteshorg -n "${outputString}" -r human`,
			    function (error, stdout, stderr) {
					if(stdout !== null){	
						console.log(stdout);
					}
					if(stderr !== null){
						console.log('stderr: ' + stderr);
					}
				
				   if (error !== null) {
					   console.log('exec error: ' + error);
				   }
			   });
	
	});	
	}
export function deactivate(){}