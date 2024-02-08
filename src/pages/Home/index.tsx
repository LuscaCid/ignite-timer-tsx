import { HandPalm, Play } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/Countdown'
import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton
} from './styles'
import { UseCyclesContext } from '../../context/CyclesContext'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, "O VALOR MÍNIMO É DE 5 MINS")
    .max(60, 'O VALOR MÁXIMO É DE 60 MINS')
    //.optional(),
})
export type NewCycleFormDataType = zod.infer<typeof newCycleFormValidationSchema>

export function Home() { 
  const { 
    activeCycle,
    createNewCycle,
    interruptActiveCycle 
  } = UseCyclesContext()
  
  //const [actualCycleId, setActualCycleId] = useState<string | null>(null)
  const newCycleForm = useForm<NewCycleFormDataType>({
    resolver : zodResolver(newCycleFormValidationSchema),
    defaultValues : {
      minutesAmount: 0,
      task : ''
    }
  })
  //se nao encotrar, vira undefined
  
  const { handleSubmit, watch, reset } = newCycleForm


  function handleCreateNewCycle(data : NewCycleFormDataType){
    createNewCycle(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task
  
  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
     
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>      
        <Countdown />
     
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
