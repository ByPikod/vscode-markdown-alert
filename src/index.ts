import * as vscode from 'vscode';
import MarkdownIt from 'markdown-it';
import { alertPlugin } from 'markdown-it-github-alert';

export function activate() {
    return {
        extendMarkdownIt(md: MarkdownIt) {
            return md.use(alertPlugin);
        }
    };
}