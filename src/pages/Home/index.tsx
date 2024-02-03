import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { 
  FormContainer, 
  HomeContainer, 
  CountdownContainer, 
  Separator, 
  StartCountdownButton, 
  TaskInput, 
  MinutesAmountInput 
} from './styles'
import { useEffect, useState } from 'react'

const newCycleFormValidationSchema = zod.object({
  task : zod.string().min(1, 'informe a tarefa'),
  minutesAmount : zod
  .number()
  .min(5, "O VALOR MÍNIMO É DE 5 MINS")
  .max(60, 'O VALOR MÁXIMO É DE 60 MINS'),
  
})
type NewCycleFormDataType = zod.infer<typeof newCycleFormValidationSchema>

interface Cycle {
  id : string
  taskInfo : NewCycleFormDataType 
}

function Home()  {
 
  const { register, handleSubmit, watch, reset} = useForm<NewCycleFormDataType>({
    resolver : zodResolver(newCycleFormValidationSchema),
    defaultValues : {
      minutesAmount : 0,
      task : ""
    }
  })
  
  const [cycles, setCycles] = useState<Cycle []>([])
  
  const [actualCycleId, setActualCycleId] = useState<string | null>(null)
  const [minutes, setMinutes] = useState<number>(0)
  const [minutesDisplay, setMinutesDisplay] = useState<string>(String(minutes).padStart(2 ,"0"))
  const handleCreateNewCycle = (data : NewCycleFormDataType) => {
    const {minutesAmount, task} = data
    const id : string = new Date().getTime().toString()
    const newCycle : Cycle = {
      id : id,
      taskInfo : { 
        task , 
        minutesAmount
      }
    }  
    setCycles(prevState => [...prevState , newCycle])
    setActualCycleId(id)
    reset()
    
  }
  const actualActiveCycle = cycles.find((cycle) => cycle.id === actualCycleId)
  //starts with undefined
  
  const task = watch('task')
  const isSubmitDisabled = !task

  useEffect(() => {
    const minutesFromActualActiveCycle = actualActiveCycle?.taskInfo.minutesAmount
    setMinutes(() => minutesFromActualActiveCycle ? minutesFromActualActiveCycle : 0 )
  }, [actualActiveCycle])
  useEffect(() => {
    const formattedMinute = String(minutes).padStart(2, "0") 
    setMinutesDisplay(formattedMinute)
  }, [minutes])
  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
          
            list='task-suggestions' 
            type="text" 
            id='task'
            placeholder='Dê um nome para o seu projeto' 
            {...register('task')}
          />
          <datalist id='task-suggestions'>
            <option value="lavar os pratos" />
            <option value="lavar os carros" />
            <option value="lavar os armarios" />
            <option value="lavar os jornais" />
          </datalist>
          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput 
            type="number" 
            id='minutesAmount' 
            placeholder='00'  
            step={5}
            min={5}
            //max={60}
            {...register('minutesAmount' , { valueAsNumber : true })}
          />
          <span>minutos.</span>
        </FormContainer>
        
      <CountdownContainer>
        <span>{String(minutes)[1] ? String(minutes)[0] : 0}</span>
        <span>{String(minutes)[1] }</span>
        <Separator>:</Separator>
        <span>00</span>
        
      </CountdownContainer>
      <StartCountdownButton
        disabled = {isSubmitDisabled}
        type='submit'>
          <Play size={24}/>
        Começar
      </StartCountdownButton>
      </form>

      
    </HomeContainer>
  )
}

export  {Home}