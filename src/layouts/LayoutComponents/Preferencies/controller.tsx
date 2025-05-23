import useStore from '../../../zustand/store'
import type { Store, Actions } from '../../../../src/zustand/store'
import { useRouter } from 'next/router'
import langs from '../../../../src/utils/lang'
import languages from './translation.json'
import React, { useEffect, useState } from 'react'
import { PreferenciesProps, ILanguageOption, IAvatar } from './types'
import { api } from '../../../config/axios/api'
import { deleteCookie } from 'cookies-next'

export default function useController() {
    const user = useStore((state: Store & Actions) => state.user)
    const language = useStore((state: Store & Actions) => state.language)
    const theme = useStore((state: Store & Actions) => state.theme)
    const setTheme = useStore((state: Store & Actions) => state.setTheme)
    const setLanguage = useStore((state: Store & Actions) => state.setLanguage)
    const setUser = useStore((state: Store & Actions) => state.setUser)
    const router = useRouter()
    const lang = langs(languages, language)

    //Booleano que mosta a confirmação de logout para o usuario;
    const [confirmLogout, setConfirmLogout] = useState(false)

    //Booleano que controla o tema selecionado. True pra ligth e false para dark
    const [toggleValue, setToggleValue] = useState(theme == 'light' ? true : false)

    //Armazena a foto escolhida pelo usuario
    const [avatar, setAvatar] = useState<IAvatar>({
        file: undefined,
        url: user.avatarEditedUrl && user.avatarEditedUrl ? user.avatarEditedUrl : user.avatarUrl,
    })

    //Booleano que controla se a lista de idiomas será exibida
    const [showLanguageOptions, setShowLanguageOptions] = useState<boolean>(false)

    //Conteudo da lista de idiomas
    const [languagesOptions, setLanguageOptions] = useState<{ [key: string]: ILanguageOption }>({
        ptBr: {
            selected: language == 'ptBr' || !language,
            label: 'Português-BR',
        },
        es: {
            selected: language == 'es',
            label: 'Español',
        },
        en: {
            selected: language == 'en',
            label: 'English',
        },
        ptPt: {
            selected: language == 'ptPt',
            label: 'Português-PT',
        },
    })
    //Funçao que recebe a imagem enviada pelo usuario e armazena na variavel da imagem presente nesse escopo
    const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        const file = event.target.files?.[0]
        if (file) {
            await api
                .post(
                    `/users/${user.id}/avatar`,
                    { image: file },
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    }
                )
                .then(function (response) {
                    if (response.status === 201) {
                        setUser({
                            ...useStore.getState().user,
                            avatarUrl: response.data.publicUrl,
                            avatarEditedUrl: undefined,
                        })
                        setAvatar({ file: file, url: response.data.publicUrl })
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }

    //Realiza o logout, removendo o token do cookie
    const logout = () => {
        localStorage.removeItem('global')
        deleteCookie('auth_session')
        router.reload()
    }

    //Trata de alterar o idioma do usuario quando qualquer lingua é selecionada
    const handleLanguageSelect = async (language: string) => {
        await api
            .patch(`/users/${user.id}`, { language })
            .then(function (response) {
                if (response.status === 201) {
                    setLanguage(response.data.language)
                    setLanguageOptions((data) => {
                        const newOptions: Record<string, any> = {}
                        Object.keys(data).forEach((key) => {
                            if (key === response.data.language) {
                                newOptions[key] = { ...data[key], selected: true }
                            } else {
                                newOptions[key] = { ...data[key], selected: false }
                            }
                        })
                        return newOptions
                    })
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    //Trata de retornar a posiçao da bandeira ( referente a imagem das bandeira) de acordo com idioma selecionado
    const selectFlag = (): number => {
        if (language == 'es') return 208
        else if (language == 'en') return 2
        else if (language == 'ptPt') return 1

        return 0
    }
    const handleNameOfUser = (fullName: string): string => {
        const nameParts = fullName.split(' ')
        if (nameParts.length > 3) {
            let displayName: string = ''
            const lastIndex = nameParts.length - 1
            nameParts.map((name, index) => {
                if (index === 0) {
                    displayName = name + ' '
                } else if (index === lastIndex) {
                    displayName += name
                } else {
                    displayName += name[0] + '. '
                }
            })
            return displayName
        } else {
            return fullName
        }
    }
    //Altera o tema no zustand toda vez que o valor booleano de toogleValue é alterado
    useEffect(() => {
        if (toggleValue) setTheme('light')
        if (!toggleValue) setTheme('dark')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [toggleValue])

    return {
        avatar,
        lang,
        user,
        logout,
        setConfirmLogout,
        confirmLogout,
        languagesOptions,
        showLanguageOptions,
        handleLanguageSelect,
        setShowLanguageOptions,
        selectFlag,
        toggleValue,
        setToggleValue,
        handleNameOfUser,
        handleImageChange,
    }
}
