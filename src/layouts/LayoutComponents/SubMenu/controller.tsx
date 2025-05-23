import useStore from '../../../zustand/store'
import languages from './../../../config/translation/subMenu.json'
import langs from '../../../utils/lang'
import { SubMenuProps } from './types'


export default function useController({ config, setState }: SubMenuProps){
    const languageUser = useStore((state: any) => state.language ?? 'pt')
    const hiddenMainNav = useStore((state: any) => state.hiddenMainNav)
    const lang = langs(languages, languageUser)

    const { customItens, defaultItens, showSubMenu } = config ?? {}

    //Retorna se a barra de pesquisa irá ser exibida. Só quando houver mais de 9 item a serem exibidos
    const seeInputSearch = () => {
        const numberCustomItens = Array.isArray(customItens) ? customItens.length : 0
        const numberDefault = Array.isArray(defaultItens) ? defaultItens.length : 0
        if (numberCustomItens + numberDefault >= 10) {
            return true
        }
        return false
    }

    return{
        customItens,
        defaultItens,
        showSubMenu,
        seeInputSearch,
        lang,
        hiddenMainNav
    }
}