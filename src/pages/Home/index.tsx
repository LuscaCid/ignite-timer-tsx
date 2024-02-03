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

const newCycleFormValidationSchema = zod.object({
  task : zod.string().min(1, 'informe a tarefa'),
  minutesAmount : zod
  .number()
  .min(5, "O VALOR MÍNIMO É DE 5 MINS")
  .max(60, 'O VALOR MÁXIMO É DE 60 MINS'),
  
})
type NewCycleFormDataType = zod.infer<typeof newCycleFormValidationSchema>

function Home()  { //handleSubmit basicamente recebe uma callback
  //i can see validation errors using formState that becomes inside of useForm
  const { register, handleSubmit, watch /* formState */, reset} = useForm<NewCycleFormDataType>({
    resolver : zodResolver(newCycleFormValidationSchema),
    defaultValues : {
      minutesAmount : 0,
      task : ""
    }
  })
  
  //acima eu estou inferindo que os elementos que meu form no html possuem os campos nomeados de dentro do type e com os seus respectivos tipos que advem de NewCycleFormDataType
  
  const handleCreateNewCycle = (data : NewCycleFormDataType) => {
    console.log(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task
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
        <span>0</span>
        <span>0</span>
        <Separator>:</Separator>
        <span>0</span>
        <span>0</span>
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