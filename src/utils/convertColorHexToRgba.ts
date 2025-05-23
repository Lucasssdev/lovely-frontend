export const convertColorHexToRgba = (hexColor: string) => {
    let hex = hexColor.replace(/^#/, '')

    if (hex.length === 3) {
        const fullHex = hex
            .split('')
            .map((char) => char.repeat(2))
            .join('')
        hex = fullHex
    }

    const bigint = parseInt(hex, 16)
    const r = (bigint >> 16) & 255
    const g = (bigint >> 8) & 255
    const b = bigint & 255

    return `rgba(${r},${g},${b},1)`
}
