import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
export interface IUserFromStore {
    id: string
    accountId: string
    name: string
    username: string
    email: string
    phone: string
    companyName: string
    avatarUrl: string
}
export type Store = {
    theme: string
    language: string
    defaultDDI: string
    moneyMask: string
    hiddenMainNav: boolean
    user: IUserFromStore
}

export type Actions = {
    setTheme: (theme: string) => void
    setLanguage: (language: string) => void
    setDefaultDDI: (defaultDDI: string) => void
    setMoneyMask: (moneyMask: string) => void
    setHiddenMainNav: (hiddenMainNav: boolean) => void
    setUser: (user: IUserFromStore) => void
}

const useStore = create<Store & Actions>()(
    persist(
        (set) => ({
            theme: '',
            language: '',
            defaultDDI: '',
            moneyMask: '',
            hiddenMainNav: false,
            user: {
                id: '',
                accountId: '',
                name: '',
                username: '',
                email: '',
                phone: '',
                companyName: '',
                avatarUrl: '',
            },
            setTheme: (newTheme: string) => set(() => ({ theme: newTheme })),
            setLanguage: (newLanguage: string) => set(() => ({ language: newLanguage })),
            setDefaultDDI: (newDefaultDDI: string) => set(() => ({ defaultDDI: newDefaultDDI })),
            setMoneyMask: (newMoneyMask: string) => set(() => ({ moneyMask: newMoneyMask })),
            setHiddenMainNav: (newHiddenMainNav: boolean) => set(() => ({ hiddenMainNav: newHiddenMainNav })),
            setUser: (user: IUserFromStore) => set(() => ({ user })),
        }),
        {
            name: 'global',
            storage: createJSONStorage(() => localStorage), // Usar createJSONStorage com localStorage
        }
    )
)

export default useStore
