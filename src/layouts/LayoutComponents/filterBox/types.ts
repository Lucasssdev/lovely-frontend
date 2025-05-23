import { IconDefinition } from '@fortawesome/fontawesome-svg-core'


export type FilterBoxProps = {
    item: Item
    onClick?: () => any | void
}
interface Item {
    id: string
    icon?: IconDefinition | null
    label: string
    url: string
    order: number
}
