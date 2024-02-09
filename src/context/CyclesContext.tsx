import {ReactNode, createContext, useContext, useReducer, useState} from 'react'
import { Cycle } from '../pages/Home/@types'
import { CyclesState, cyclesReducer } from '../reducers/cycles'

interface NewCycleFormDataProps{
    task : string
    minutesAmount :number
}

interface ICyclesContext {
    cyclesState : CyclesState
    amountSecondsPassed : number
    activeCycle : Cycle | undefined
    MarkCycleAsFinished : () => void
    setSecondsPassed : (seconds : number) => void
    createNewCycle : (data: NewCycleFormDataProps) => void
    interruptActiveCycle : () => void
}
const CyclesContext = createContext({} as ICyclesContext)

interface CyclesContextProps {
    children : ReactNode
}

export const CyclesContextProvider = ({children} : CyclesContextProps) => {

    const [ cyclesState, dispatch ] = useReducer(cyclesReducer, { activeCycleId : null , cycles : []}, () => {
        const dataCyclesAsJSON = localStorage.getItem("@timer:cycles-state-1.0.0")
        if(dataCyclesAsJSON)return JSON.parse(dataCyclesAsJSON)
    })

    const {activeCycleId, cycles } = cyclesState
    const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

    const activeCycle = cycles.find((cycle) =>cycle.id === activeCycleId)
    
    function MarkCycleAsFinished() {
        dispatch({type : "mark_cycle_as_finished", payload : {activeCycleId}})
        
    }

    const createNewCycle = (data: NewCycleFormDataProps) => {
        const { minutesAmount, task } = data
        const id: string = new Date().getTime().toString()
        const newCycle: Cycle = {
            startDate : new Date(),
            taskInfo: {
                task,
                minutesAmount
            },
            id
        }
        dispatch({type : "add_new_cycle", payload : {newCycle}})
        setAmountSecondsPassed(0)
    
    } 

    function interruptActiveCycle() {
        dispatch({type : "interrupt_current_cycle", payload : {activeCycleId}})
    }

    function setSecondsPassed(seconds : number){
        setAmountSecondsPassed(seconds)
    }

    return (
        <CyclesContext.Provider value={{
            cyclesState, 
            amountSecondsPassed,
            activeCycle,
            MarkCycleAsFinished,
            setSecondsPassed,
            createNewCycle,
            interruptActiveCycle

        }}>
            {children}
        </CyclesContext.Provider>
    )
}

export const UseCyclesContext = () => {
    const context = useContext(CyclesContext)
    return context
}