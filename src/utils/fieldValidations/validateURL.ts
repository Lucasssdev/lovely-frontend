import urlRegex from 'url-regex'

const validateURL = (url: string) => {
    // Remover espaços em branco antes e depois da string
    const trimmedURL = url.trim()

    // Verificar se a URL é válida usando a biblioteca url-regex
    return urlRegex({ exact: true, strict: false }).test(trimmedURL)
}

export default validateURL
