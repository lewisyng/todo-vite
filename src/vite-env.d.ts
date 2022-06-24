/// <reference types="vite/client" />

declare module '*.mdoule.scss' {
    const content: Record<string, string>;
    export default content;
}