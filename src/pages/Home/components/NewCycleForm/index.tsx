import {FormContainer, MinutesAmountInput, TaskInput} from './styles'
import { UseCyclesContext } from '../../../../context/CyclesContext'
import { useFormContext } from 'react-hook-form'

export const NewCycleForm = () => {

  const {activeCycle} = UseCyclesContext()
  const { register } = useFormContext()
  
  return (
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
  )
}