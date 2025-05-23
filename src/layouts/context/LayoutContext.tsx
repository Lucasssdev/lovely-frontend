import React, { createContext, useContext, useState } from 'react'

type LayoutContextType = {
    handleToggleStepWizard: () => void
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined)

export const useLayoutContext = (): LayoutContextType => {
    const context = useContext(LayoutContext)
    if (!context) {
        throw new Error('useLayoutContext must be used within a LayoutProvider')
    }
    return context
}

type LayoutProviderProps = {
    children: React.ReactNode
}

export const LayoutProvider = ({ children }: LayoutProviderProps) => {
    const [showStepWizard, setShowStepWizard] = useState(false)

    const handleToggleStepWizard = () => {
        setShowStepWizard((data: boolean) => !data)
    }

    const layoutContextValue: LayoutContextType = {
        handleToggleStepWizard,
    }

    return <LayoutContext.Provider value={layoutContextValue}>{children}</LayoutContext.Provider>
}
