import {assert} from 'chai';
import * as vscode from 'vscode';
import {Range, SourceBreakpoint} from "vscode";
import * as fs from "fs";
import path = require('path');

export const EXTENSION_PATH = path.resolve(`${__dirname}/../../..`);

// clears all set breakpoints
export function clearAllBp(): void {
    vscode.debug.removeBreakpoints(vscode.debug.breakpoints);
}

// Inserts a breakpoint in a file at the first occurrence of bpMarker
export function setBpAtMarker(file: string, bpMarker: string): void {
    const uri = vscode.Uri.file(file);
    const data = fs.readFileSync(uri.path, "utf8");
    const line = data.split("\n").findIndex(line => line.includes(bpMarker));
    assert.notStrictEqual(line, -1, "Could not find breakpoint marker in source file");
    const position = new vscode.Position(line, 0);
    const bp = new SourceBreakpoint(new vscode.Location(uri, new Range(position, position)), true);
    vscode.debug.addBreakpoints([bp]);
}
