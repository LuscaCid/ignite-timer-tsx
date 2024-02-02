import { Play } from 'phosphor-react'
import { 
  FormContainer, 
  HomeContainer, 
  CountdownContainer, 
  Separator, 
  StartCountdownButton, 
  TaskInput, 
  MinutesAmountInput 
} from './styles'

//type Props = {}

function Home()  {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            list='sugestions-list' 
            type="text" 
            id='task'
            placeholder='Dê um nome para o seu projeto' 
          />
          <datalist id='sugestions-list'>
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
            max={60}
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
        disabled 
        type='submit'>
          <Play size={24}/>
        Começar
      </StartCountdownButton>
      </form>

      
    </HomeContainer>
  )
}

export  {Home}