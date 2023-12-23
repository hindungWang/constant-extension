const vscode = require('vscode');
const utils = require('./utils');
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	let lowerSnakeCase = vscode.commands.registerCommand('lowerSnakeCase', () => {
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			// 获取选中的文本
			const selection = editor.selection;
			let selectedText = editor.document.getText(selection);
			// 获取配置信息
			const config = vscode.workspace.getConfiguration('constantJSON') || {};
			for (const key in config) {
				const regex = new RegExp(utils.escapeRegExp(key), 'g');
				// @ts-ignore
				selectedText = selectedText.replace(regex, config[key])
			}
			// 在这里可以进行其他操作，使用选中的文本进行处理
			editor.edit(editBuilder => {
				editBuilder.replace(selection, utils.convertToLowerCase(selectedText));
			});
		} else {
			vscode.window.showErrorMessage('No active text editor.');
		}
	});


	let upperSnakeCase = vscode.commands.registerCommand('upperSnakeCase', () => {
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			// 获取选中的文本
			const selection = editor.selection;
			let selectedText = editor.document.getText(selection);
			// 获取配置信息
			const config = vscode.workspace.getConfiguration('constantJSON') || {};
			for (const key in config) {
				const regex = new RegExp(utils.escapeRegExp(key), 'g');
				// @ts-ignore
				selectedText = selectedText.replace(regex, config[key])
			}
			// 在这里可以进行其他操作，使用选中的文本进行处理
			editor.edit(editBuilder => {
				editBuilder.replace(selection, utils.convertToUpperCase(selectedText));
			});
		} else {
			vscode.window.showErrorMessage('No active text editor.');
		}
	});

	let lowerCase = vscode.commands.registerCommand('lowerCase', () => {
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			// 获取选中的文本
			const selection = editor.selection;
			let selectedText = editor.document.getText(selection);
			editor.edit(editBuilder => {
				editBuilder.replace(selection, selectedText.toLowerCase());
			});
		} else {
			vscode.window.showErrorMessage('No active text editor.');
		}
	});

	let upperCase = vscode.commands.registerCommand('upperCase', () => {
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			const selection = editor.selection;
			let selectedText = editor.document.getText(selection);
			editor.edit(editBuilder => {
				editBuilder.replace(selection, selectedText.toUpperCase());
			});
		} else {
			vscode.window.showErrorMessage('No active text editor.');
		}
	});
	context.subscriptions.push(upperSnakeCase);
	context.subscriptions.push(lowerCase, upperCase);
}
function deactivate() { }
module.exports = {
	activate,
	deactivate
}
