import * as vscode from 'vscode';
import MarkdownIt from 'markdown-it';
import { alertPlugin } from 'markdown-it-github-alert';

export function activate(context: vscode.ExtensionContext) {
	let orange = vscode.window.createOutputChannel("Pikod");
    orange.appendLine("Pikod Markdown Extension is now active!");
    vscode.window.showInformationMessage('Pikod Markdown Extension is now active!');
    return {
        
        extendMarkdownIt(md: MarkdownIt) {
        
            md.use(function (md) {
                orange.appendLine("Pikod deneme");
            });
            return md.use(alertPlugin);
        }
    };
}

export function deactivate() {
    vscode.window.showInformationMessage('Pikod Markdown Extension is now deactive!');
}
