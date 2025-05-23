import { useEffect, useState } from 'react'
import useStore from '../../zustand/store'
import { api } from '../../config/axios/api'

export default function useController() {
    const user = useStore((state: any) => state.user)
    const mainNavState = useStore((state: any) => state.hiddenMainNav)
    const [hiddenLateralMain, setHiddenLateralMain] = useState(false)
    const setHiddenMainNav = useStore((state: any) => state.setHiddenMainNav)

    return {
        hiddenLateralMain,
        setHiddenMainNav,
    }
}
