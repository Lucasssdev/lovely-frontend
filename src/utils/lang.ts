const langs = (languagesJson: object, language: string): any => {
    const languagesAcepted = ['ptBr', 'ptPt', 'en', 'es']
    if (!language || !languagesAcepted.includes(language)) language = 'ptBr'
    return (key: string) => {
        const text: string =
            languagesJson[language as keyof typeof languagesJson]?.[key as keyof typeof language] ??
            'languagesJson.' + language + '.' + key
        return text
    }
}
export default langs
