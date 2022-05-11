// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { AsyncLocalStorage } from 'async_hooks';
import { worker } from 'cluster';
import * as vscode from 'vscode';
import { InputBoxOptions } from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Register the key to recognize the user
	let registerKey = vscode.commands.registerCommand('keepwithmestatus.registerKey', () => {
		
		const options : InputBoxOptions = {
			placeHolder: "Enter the registration key"
		};

		const keyTextField = vscode.window.showInputBox(options).then((key) => {

			if (key != null){
				// TODO, Save the key into local storage
				//new AsyncLocalStorage().enterWith({"RegistrationKey" : key})
			}

		});
	});

	let viewRegisterKey = vscode.commands.registerCommand('keepwithmestatus.viewRegisterKey', () => {
		let workspaceName = vscode.workspace.name;
	
		if (workspaceName == undefined)
			workspaceName = "idling";

		// TODO, Retrive key from local storage	

	});


	let workspaceName = vscode.workspace.name;
		
	if (workspaceName == undefined)
		workspaceName = "idling";

	// TODO, Send the name to the API	

	context.subscriptions.push(registerKey);
	context.subscriptions.push(viewRegisterKey);
}

// this method is called when your extension is deactivated
export function deactivate() {
	// TODO, Send the deactivation to the API
}
