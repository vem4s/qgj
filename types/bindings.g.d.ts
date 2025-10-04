import type { Event } from "./event";


export namespace qgj {
    export function getBackendName(): string;
    export function parseGbxToJson(fileData: Uint8Array): string;
    export function getGbxMetadata(fileData: Uint8Array): string;
}
