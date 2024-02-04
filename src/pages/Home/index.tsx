import { HandPalm, Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {differenceInSeconds} from 'date-fns'
import * as zod from 'zod'
import {
  FormContainer,
  HomeContainer,
  CountdownContainer,
  Separator,
  StartCountdownButton,
  TaskInput,
  MinutesAmountInput,
  StopCountdownButton
} from './styles'
import { useEffect, useState } from 'react'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, "O VALOR MÍNIMO É DE 5 MINS")
    .max(60, 'O VALOR MÁXIMO É DE 60 MINS'),

})
type NewCycleFormDataType = zod.infer<typeof newCycleFormValidationSchema>

interface Cycle {
  id: string
  taskInfo: NewCycleFormDataType
  startDate : Date
  interruptDate? : Date 
  finishedDate? : Date
}

export function Home() {
  
  const [cycles, setCycles] = useState<Cycle[]>([])
  //const [actualCycleId, setActualCycleId] = useState<string | null>(null)
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)
 
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormDataType>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      minutesAmount: 0,
      task: ""
    }
  })
  const activeCycle = cycles.find((cycle) =>cycle.id === activeCycleId) //se nao encotrar, vira undefined
  const totalSeconds = activeCycle ? activeCycle.taskInfo.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, "0")
  const seconds = String(secondsAmount).padStart(2, "0")

  //esta variavel controla tudo
  useEffect(() => {
    let interval : number
    if(activeCycle) {
       
      interval = setInterval(() => {

        const secondsDiff = differenceInSeconds(new Date(), activeCycle.startDate)

        if(secondsDiff >= totalSeconds){
          setCycles(
            cycles.map((cycle : Cycle) => {
              if(activeCycleId === cycle.id){
                return {
                  ...cycle,
                  finishedDate : new Date()
                }            
              }
              return {...cycle}
            })
          )
          setActiveCycleId(null)
        }

        setAmountSecondsPassed(secondsDiff)
        }, 1000)
        
     
    }
    return () => {
      clearInterval(interval)
    }
  } , [activeCycle, totalSeconds, cycles])

  
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

  const task = watch('task')
  const isSubmitDisabled = !task

  useEffect(() => {
    if(activeCycle) {
      document.title = `${minutes} : ${seconds}`
    } else {
      setTimeout(() => {document.title = 'Ignite Timer'}, 4000)
      document.title = 'Ciclo conluído!'
      
    }
  }, [minutes, seconds, activeCycle])
  
  console.log(cycles)
  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            disabled = {!!activeCycle}
            list='task-suggestions'
            type="text"
            id='task'
            placeholder='Dê um nome para o seu projeto'
            {...register('task')}
          />
          <datalist id='task-suggestions'>
            <option value="lavar os pratos" />
            <option value="lavar os carros" />
            
          </datalist>
          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            disabled = {!!activeCycle}  
            type="number"
            id='minutesAmount'
            placeholder='00'
            step={5}
            min={5}
            //max={60}
            {...register('minutesAmount', { valueAsNumber: true })}
          />
          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <Separator>:</Separator>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>

        </CountdownContainer>
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
