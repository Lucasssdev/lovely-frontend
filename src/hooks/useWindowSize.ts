import { useState, useEffect } from 'react'

interface WindowSize {
    width: number
    height: number
    devicePixelRatio: number
}

const useWindowSize = (): WindowSize => {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: 0,
        height: 0,
        devicePixelRatio: 1,
    })

    useEffect(() => {
        // Verifica se o código está sendo executado no lado do cliente
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                    devicePixelRatio: window.devicePixelRatio,
                })
            }

            // Adicionar os event listeners
            window.addEventListener('resize', handleResize)

            // Chamar a função no início para definir o estado inicial
            handleResize()

            // Limpar os event listeners quando o componente for desmontado
            return () => {
                window.removeEventListener('resize', handleResize)
            }
        }
    }, [])

    return windowSize
}

export default useWindowSize
