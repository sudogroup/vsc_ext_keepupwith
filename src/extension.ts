// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { InputBoxOptions } from 'vscode';
import {Connection} from "./connection";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Register the key to recognize the user
	let registerKey = vscode.commands.registerCommand('keepwithmestatus.registerKey', () => {
		
		const options : InputBoxOptions = {
			placeHolder: "Enter the registration key"
		};

		const keyTextField = vscode.window.showInputBox(options).then((key) => {

			if (key != null)
				context.workspaceState.update("RegistrationKey",key);
			

		});
	});

	let viewRegisterKey = vscode.commands.registerCommand('keepwithmestatus.viewRegisterKey', () => {
		let workspaceName = vscode.workspace.name;
	
		if (workspaceName == undefined)
			workspaceName = "idling";


		vscode.window.showInformationMessage(context.workspaceState.get("RegistrationKey","Not set up yet"));

	});


	let workspaceName = vscode.workspace.name;
		
	if (workspaceName == undefined)
		workspaceName = "idling";


	const registedKey = context.workspaceState.get("RegistrationKey","Not set up yet");
	if (registedKey != "Not set up yet")
		Connection.updateStatus(workspaceName, registedKey);

	context.subscriptions.push(registerKey);
	context.subscriptions.push(viewRegisterKey);
}

// this method is called when your extension is deactivated
// TODO, the method with the passed context does not fire, possible solution
// is to avoid the storage manager from extensin API
export function deactivate(context : vscode.ExtensionContext) {

	const registedKey = context.workspaceState.get("RegistrationKey","Not set up yet");
	if (registedKey != "Not set up yet")
		Connection.updateStatus("", registedKey, States);

}
