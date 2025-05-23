declare module 'canvas-to-blob' {
    function canvasToBlob(canvas: HTMLCanvasElement, callback: (blob: Blob | null) => void, type?: string, quality?: number): void

    export = canvasToBlob
}
