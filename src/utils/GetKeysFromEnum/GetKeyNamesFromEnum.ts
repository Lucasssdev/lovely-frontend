import { CUSTOM_FIELDS_TYPES } from '../enum/customFieldsTypes'

export function getEnumKeyByValue(id: number | string): string | undefined {
    // Percorre as chaves do enum
    for (const key in CUSTOM_FIELDS_TYPES) {
        // Se o ID for igual ao valor da chave, retorna o nome da chave
        if (CUSTOM_FIELDS_TYPES[key] === id) {
            return key
        }
    }

    // Se o ID não for encontrado, retorna undefined
    return undefined
}
