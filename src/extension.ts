// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { sfdxorgcreator } from './auth';
import {exec} from 'child_process';


export async function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('extension.sayHello',async (uri: vscode.Uri, event) => {
		let editor: any = vscode.window.activeTextEditor;
		let selectedText: any;
		let currentOpenedFilename: any = vscode.window.activeTextEditor?.document.fileName.replace(/^.*[\\\/]/, '').split('.')[0];
		console.log(currentOpenedFilename);
		let currentOpenedFilenamex: any = currentOpenedFilename?.includes('-') ? currentOpenedFilename.split('-')[0] : currentOpenedFilename;
		console.log(currentOpenedFilenamex);
		if (!editor.selection.isEmpty) {
			selectedText = editor?.document.getText(editor.selection);
			let outputString: any = currentOpenedFilename + "." + selectedText;
			exec(`sfdx force:apex:test:run -u niteshorg --tests "${outputString} -r human"`,
				function (error, stdout, stderr) {
					let text: any = stdout.split(/(["])/);
					exec(`${text[2]}`,
						function (error, stdout, stderr) {
							console.log('stdout: ' + stdout);
							console.log('stderr: ' + stderr);
							if (error !== null) {
								console.log('exec error: ' + error);
							}
						});
					console.log('stderr: ' + stderr);
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
			let currentOpenedFilename: any = vscode.window.activeTextEditor?.document.fileName.replace(/^.*[\\\/]/, '').split('.')[0];
			console.log(currentOpenedFilename);
			let currentOpenedFilenamex:any = currentOpenedFilename?.includes('-') ? currentOpenedFilename.split('-')[0] : currentOpenedFilename;
		console.log(currentOpenedFilenamex);
		if (!editor.selection.isEmpty){
				let outputString: any = currentOpenedFilename ;
		console.log(outputString);
		 exec(`sfdx force:apex:test:run -u niteshorg -n "${outputString}" -r human`,
				 function (error, stdout:any, stderr) {
					if(stdout ! = null){
					let text: any = stdout.split(/(["])/);
					 exec(`${text[2]}`,
						 function (error, stdout, stderr) {
							console.log('stdout: ' + stdout);
							console.log('stderr: ' + stderr);
							if (error !== null) {
								console.log('exec error: ' + error);
							}
						});}
					console.log('stderr: ' + stderr);
					if (error !== null) {
						console.log('exec error: ' + error);
					}
				});
			} else {
				console.log("plese selete a public method");
			}
	});	
}
export function deactivate(){}