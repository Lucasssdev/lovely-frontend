import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

export type SubMenuProps = {
    config: ISubMenu | undefined
    setState: React.Dispatch<React.SetStateAction<ISubMenu | undefined>> | any
}
export interface ISubMenu {
    showSubMenu?: boolean
    subMenuFocus?: number
    customItens?: customItens[]
    defaultItens?: defaultItens[]
}
export interface customItens {
    id: string
    icon?: IconDefinition | null
    label: string
    url: string
    order: number
}
export interface defaultItens {
    id: string
    icon?: IconDefinition | null
    label: string
    route: string
    order: number
}