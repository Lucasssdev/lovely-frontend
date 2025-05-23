

export type PreferenciesProps = {
    hiddenMainNav?: boolean | any
    setShowPreferencies: React.Dispatch<React.SetStateAction<boolean>>
}
export interface ILanguageOption {
    selected: boolean
    label: string
}
export interface IAvatar {
    file: File | undefined
    url: string | undefined
}