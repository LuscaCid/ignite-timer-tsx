import {ReactNode, createContext, useContext, useState} from 'react'
import { Cycle } from '../pages/Home/@types'

interface ICyclesContext {
    cycles : Cycle []
    setCycles : React.Dispatch<React.SetStateAction<Cycle []>>
}
const CyclesContext = createContext({} as ICyclesContext)

interface CyclesContextProps {
    children : ReactNode
}

export const CyclesContextProvider = ({children} : CyclesContextProps) => {

    const [ cycles, setCycles ] = useState<Cycle[]>([])

    return (
        <CyclesContext.Provider value={{cycles, setCycles}}>
            {children}
        </CyclesContext.Provider>
    )
}

export const UseCyclesContext = () => {
    const context = useContext(CyclesContext)
    return context
}