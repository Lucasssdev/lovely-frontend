export default function DateMask(date?: string): string {
    if (!date) {
        return ''
    }
    const onlyNumbers = date?.replace(/[^\d]/g, '') ?? ''

    if (onlyNumbers?.length <= 2) {
        return onlyNumbers
    }

    if (onlyNumbers?.length <= 4) {
        return `${onlyNumbers?.slice(0, 2)}/${onlyNumbers?.slice(2)}`
    }
    const formatDate = `${onlyNumbers?.slice(0, 2)}/${onlyNumbers?.slice(2, 4)}/${onlyNumbers?.slice(4, 8)}`
    if (formatDate.length <= 10) {
        return formatDate
    }
    return ''
}
