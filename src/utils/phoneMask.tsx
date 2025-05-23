import countries from './countries.json'

export function phoneMask(value: string): string {
    const onlyNumbers = value?.replace(/[^\d]/g, '') ?? ''

    if (onlyNumbers?.length <= 2) {
        return onlyNumbers
    }

    if (onlyNumbers?.length <= 7) {
        return `(${onlyNumbers?.slice(0, 2)}) ${onlyNumbers?.slice(2)}`
    }

    return `(${onlyNumbers?.slice(0, 2)}) ${onlyNumbers?.slice(2, 7)}-${onlyNumbers?.slice(7, 11)}`
}

const buildResult = (result: string, maskChar: string) => {
    let completeResult = result
    completeResult = result?.indexOf(maskChar) == -1 ? result : result?.slice(0, result?.indexOf(maskChar))
    for(let i = 0; i < 2; i++){
        completeResult = /[\x20\x28\x29#-]/.test(completeResult[completeResult.length - 1]) ? completeResult?.slice(0, completeResult?.length - 1) : completeResult
    }
    return completeResult
}

export const validateMask = (phone:string, ddi: string) => {
    const maskIndex = countries.findIndex((item) => item.ddi == ddi.trim().replace('+', ''))
    if(maskIndex == -1) return null
    let mask = countries[maskIndex].mask
    if(mask?.length == 0) return null

    //Troca a mascara se necessário
    if(Array.isArray(mask)){
        mask = mask!.filter(item => item.replace(/[^#]/g, '').length == phone?.length)[0] ?? mask![0]
    }
    return mask?.replace(/[^#]/g, '')
}

export const customPhoneMask = (value: string, ddi: string) => {
    //Pega os valores e verifica
    const phone = value ?? null
    if(!phone) return value
    const maskIndex = countries.findIndex((item) => item.ddi == ddi.trim().replace('+', ''))
    if(maskIndex == -1) return value
    let mask = countries[maskIndex].mask
    if(mask?.length == 0) return value

    //Troca a mascara se necessário
    if(Array.isArray(mask)){
        mask = mask!.filter(item => item.replace(/[^#]/g, '').length == phone?.length)[0] ?? mask![0]
    }
    
    //Aplica a mascara
    let result = mask
    const maskChar = '#'
    let cleanNumber = phone.replace(/\D/g, '')

    for(let counter = 0; counter < result!.length; counter++){
        if(result![counter] == maskChar && cleanNumber.length > 0){
            result = result!.replace(maskChar, cleanNumber[0])
            cleanNumber = cleanNumber.slice(1)
        }
    }

    return buildResult(result!, maskChar);
}