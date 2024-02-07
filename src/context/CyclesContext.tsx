import {ReactNode, createContext, useContext, useState} from 'react'
import { Cycle } from '../pages/Home/@types'

interface NewCycleFormDataProps{
    task : string
    minutesAmount :number
}

interface ICyclesContext {
    cycles : Cycle []
    activeCycleId : string | null
    amountSecondsPassed : number
    activeCycle : Cycle | undefined
    setCycles : React.Dispatch<React.SetStateAction<Cycle []>>
    setActiveCycleId : React.Dispatch<React.SetStateAction<string | null>>
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

    const [ cycles, setCycles ] = useState<Cycle[]>([])

    const [ activeCycleId, setActiveCycleId ] = useState<string | null>(null)
    const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

    const activeCycle = cycles.find((cycle) =>cycle.id === activeCycleId)
    function MarkCycleAsFinished() {
        setCycles((prevState : Cycle[]) => 
            prevState.map(cycle => {
            if(cycle.id === activeCycleId){
                return {
                ...cycle,
                finishedDate : new Date()
                }
            }else {
                return {...cycle}
            }
            })
        )
    }

    const createNewCycle = (data: NewCycleFormDataProps) => {
    const { minutesAmount, task } = data
    const id: string = new Date().getTime().toString()
    const newCycle: Cycle = {
        id,
        taskInfo: {
        task,
        minutesAmount
        },
        startDate : new Date()
    }
    
    setCycles(prevState => [...prevState, newCycle])
    setAmountSecondsPassed(0)
    setActiveCycleId(id)
    
    
    } 

    function interruptActiveCycle() {
        setActiveCycleId(null)
        setCycles(
          cycles.map((cycle : Cycle) => {
          if(cycle.id === activeCycleId) {
            return {
              ...cycle,
              interruptDate : new Date()
            }
          } else {
            return cycle
          }
        })
        )
      }

      function setSecondsPassed(seconds : number){
        setAmountSecondsPassed(seconds)
      }
    return (
        <CyclesContext.Provider value={{
            cycles, 
            activeCycleId,
            amountSecondsPassed,
            activeCycle,
            setCycles,
            setActiveCycleId,
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