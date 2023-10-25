import * as vscode from 'vscode';
import MarkdownIt from 'markdown-it';
import alertPlugin from 'markdown-it-github-alert';

export function activate(context: vscode.ExtensionContext) {
	return {
        extendMarkdownIt(md: MarkdownIt) {
            return md.use(alertPlugin);
        }
    };
}

// This method is called when your extension is deactivated
export function deactivate() {}
