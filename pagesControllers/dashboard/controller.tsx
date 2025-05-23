import useStore from '@src/zustand/store'
import { Store, Actions } from '../../src/zustand/store'
import languageJson from '../../pages/dashboard/translation.json'
import langs from '../../src/utils/lang'

export default function useController() {
    const language = useStore((state: Store & Actions) => state.language)
    const lang = langs(languageJson, language)

    return {
        lang,
    }
}
