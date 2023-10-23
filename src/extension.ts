import * as vscode from 'vscode';
import MarkdownIt from 'markdown-it';

export function activate(context: vscode.ExtensionContext) {
	return {
        extendMarkdownIt(md: MarkdownIt) {
            return md.use(emoji);
        }
    };
}

// This method is called when your extension is deactivated
export function deactivate() {}
