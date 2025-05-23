import { useState } from "react"
import { useRouter } from 'next/router'
import languages from './translation.json'
import langs from '../../../utils/lang'
import type { Store, Actions } from '../../../../src/zustand/store'
import useStore from '../../../zustand/store'
import { MainNavProps, ISubMenu } from './types'

export default function useController() {
    const route = useRouter()

    //Busca dados do usuario do zustand
    const user = useStore((state: Store & Actions) => state.user)
    const language = useStore((state: Store & Actions) => state.language)

    const lang = langs(languages, language)

    //Booleano que controla o menu de preferencias
    const [showPreferencies, setShowPreferencies] = useState<boolean>(false)

    //Modelo de dados para um submenu. Cada submenu deve conter essa estrutura
    const [subMenu, setSubMenu] = useState<ISubMenu | undefined>()

    //Controla os menus. Recebe por parametro qual é o menu aplicado, tratando de mostra-lo e ocultando o outro
    const menuControl = (menu: 'sub' | 'pref', subMenuContant: any, index?: number) => {
        if (menu.includes('sub')) {
            setShowPreferencies(false)
            setSubMenu((prevState) => {
                return {
                    ...prevState,
                    showSubMenu: prevState?.subMenuFocus === index ? !prevState?.showSubMenu : true,
                    subMenuFocus: index !== undefined ? index : prevState?.subMenuFocus!,
                    defaultItens: subMenuContant.defaultItens,
                    customItens: subMenuContant.customItens,
                }
            })
        }
        if (menu.includes('pref')) {
            setSubMenu((prevState) => {
                return {
                    ...prevState,
                    showSubMenu: false,
                    subMenuFocus: prevState?.subMenuFocus!,
                    defaultItens: [],
                    customItens: [],
                }
            })
            setShowPreferencies(!showPreferencies)
        }
    }
    return {
        subMenu,
        setSubMenu,
        lang,
        route,
        menuControl,
        user,
        showPreferencies,
        setShowPreferencies
    }
}