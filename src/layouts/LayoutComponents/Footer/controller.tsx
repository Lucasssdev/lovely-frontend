import languages from './translation.json'
import langs from '../../../../src/utils/lang'
import useStore from '../../../zustand/store'

export default function useController(){
    const languageUser = useStore((state: any) => state.language)
    const lang = langs(languages, languageUser)
    return{
        languageUser,
        lang,
    }
}