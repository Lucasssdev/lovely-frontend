
export type MainNavProps = {
    hiddenMenu: boolean | any
    handleToggleHiddenMainNav: (e: React.MouseEvent<HTMLElement, MouseEvent>) => any
}
export interface ISubMenu {
    showSubMenu: boolean
    subMenuFocus: number
    defaultItens: any[]
    customItens: any[]
}