export default function formatTitle(title: string, size: number): string {
    if (title.length > size) {
        return title.substring(0, size) + '...'
    } else {
        return title
    }
}
