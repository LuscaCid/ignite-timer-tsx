import { HandPalm, Play } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { createContext, useState } from 'react'
import { Cycle } from './@types'
import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/Countdown'
import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton
} from './styles'
import { UseCyclesContext } from '../../context/CyclesContext'
interface CyclesContextData {
  activeCycle : Cycle | undefined
  activeCycleId : string | null
  amountSecondsPassed : number
  setActiveCycleId : React.Dispatch<React.SetStateAction<string | null>>
  MarkCycleAsFinished : () => void
  setSecondsPassed : (seconds : number) => void
}

export const CyclesContext = createContext({} as CyclesContextData)

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, "O VALOR MÍNIMO É DE 5 MINS")
    .max(60, 'O VALOR MÁXIMO É DE 60 MINS'),
})
type NewCycleFormDataType = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const {cycles, setCycles} = UseCyclesContext()
  
  //const [actualCycleId, setActualCycleId] = useState<string | null>(null)
  const [ activeCycleId, setActiveCycleId ] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)
  
  const newCycleForm = useForm<NewCycleFormDataType>({
    resolver : zodResolver(newCycleFormValidationSchema),
    defaultValues : {
      minutesAmount: 0,
      task : ''
    }
  })
 
  const activeCycle = cycles.find((cycle) =>cycle.id === activeCycleId) //se nao encotrar, vira undefined
  
  const { handleSubmit, reset, watch } = newCycleForm

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
  
  const handleCreateNewCycle = (data: NewCycleFormDataType) => {
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
    reset()
    
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

  const task = watch('task')
  const isSubmitDisabled = !task
  
  console.log(cycles)
  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
      <CyclesContext.Provider value={{
          activeCycle, 
          activeCycleId,
          amountSecondsPassed,
          setActiveCycleId , 
          MarkCycleAsFinished,
          setSecondsPassed
        }}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>      
        <Countdown />
      </CyclesContext.Provider>
        {
          activeCycle ? (
            <StopCountdownButton
              onClick={interruptActiveCycle}
              type='button'>
              <HandPalm size={24} />
                Interromper
            </StopCountdownButton>
          ) : (
            <StartCountdownButton
              disabled={isSubmitDisabled}
              type='submit'>
              <Play size={24} />
              Começar
            </StartCountdownButton>
          )
        }
        
        
      </form>


    </HomeContainer>
  )
}
