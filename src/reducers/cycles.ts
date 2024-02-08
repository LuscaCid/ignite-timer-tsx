import { Cycle } from "../pages/Home/@types"
import { produce } from 'immer'
export interface CyclesState {
    activeCycleId : string | undefined
    cycles : Cycle []
}
//aplicando o conceito da imutabilidade no react, onde eu uso da lib immer para nao ter problemas de memoria
type Action = 
  {type : "add_new_cycle", payload : { newCycle : Cycle }} |
  {type : "interrupt_current_cycle", payload : { activeCycleId : string | undefined}} | 
  {type : "mark_cycle_as_finished", payload : { activeCycleId : string | undefined}}

export const cyclesReducer = (state : CyclesState, action : Action)  : CyclesState => {
  switch(action.type){
    case "add_new_cycle" :
      return produce(state, (draft) => {
        draft.cycles.push(action.payload.newCycle)
        draft.activeCycleId = action.payload.newCycle.id
      });  
      
    case "interrupt_current_cycle" : {
      const indexOfInterruptedCycle = state.cycles.findIndex((cycle) => cycle.id === state.activeCycleId)
      
      if(indexOfInterruptedCycle < 0)return state
      
      return produce(state, (draft) => {
        draft.cycles[indexOfInterruptedCycle].interruptDate = new Date() 
        draft.activeCycleId = undefined
      })
    }
     
    case "mark_cycle_as_finished" : { 
      const indexOfFinishedCycle = state.cycles.findIndex((cycle) => cycle.id === state.activeCycleId)

      if(indexOfFinishedCycle < 0)return state
      
      return produce(state, (draft) => {
        draft.activeCycleId = undefined
        draft.cycles[indexOfFinishedCycle].finishedDate = new Date()
      })
    }  
    default : 
      return state
  }
}   
