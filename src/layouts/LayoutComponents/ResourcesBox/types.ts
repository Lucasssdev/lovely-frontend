import { IconProp } from '@fortawesome/fontawesome-svg-core'

export type ResourcesBoxProps = {
    icon?: IconProp | null
    title: string
    route: string
    order: number
    onClick?: () => any | void
}
