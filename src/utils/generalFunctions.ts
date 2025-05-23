export const makeRandomString = (length: number, chars: 'letters' | 'numbers' | 'special' | 'letnum' | 'all' = 'letnum') => {
    let result = ''
    let characters = ''
    switch (chars) {
        case 'letters':
            characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
            break
        case 'numbers':
            characters = '0123456789'
            break
        case 'special':
            characters = '!@#$%^&*()_+~|}{[]:;?><,./-= '
            break
        case 'letnum':
            characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
            break
        case 'all':
            characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~|}{[]:;?><,./-='
            break
        default:
            characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~|}{[]:;?><,./-='
            break
    }
    const charactersLength = characters.length
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
}

export const makeRandomHexColor = () => {
    return '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0')
}

export const randomBinary = () => {
    return Math.floor(Math.random() * 2) == 1 ? true : false
}

export const makeRandomNumber = (min: number = 0, max: number = Number.MAX_SAFE_INTEGER) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const buildResult = (result: string, maskChar: string) => {
    let completeResult = result
    completeResult = result?.indexOf(maskChar) == -1 ? result : result?.slice(0, result?.indexOf(maskChar))
    for(let i = 0; i < 2; i++){
        completeResult = /[^A-Za-z0-9]/.test(completeResult[completeResult.length - 1]) ? completeResult?.slice(0, completeResult?.length - 1) : completeResult
    }
    return completeResult
}

export const customMask = (receivedValue: string, mask: string, maskChar = '#') => {
    let result = mask
    let value = receivedValue.replace(/[^A-Za-z0-9]/g, '')
    
    for(let counter = 0; counter < result!.length; counter++){
        if(result![counter] == maskChar && value.length > 0){
            result = result!.replace(maskChar, value[0])
            value = value.slice(1)
        }
    }

    if(receivedValue.length > mask.length){
        result = result!.slice(0, result!.length - 1)
    }

    return buildResult(result!, maskChar);
}

export const generalFunctions = {
    makeRandomString,
    makeRandomHexColor,
    randomBinary,
    makeRandomNumber,
    customMask
}

export default generalFunctions
