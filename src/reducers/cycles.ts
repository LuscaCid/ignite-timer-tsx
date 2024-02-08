import { Cycle } from "../pages/Home/@types"
export interface CyclesState {
    activeCycleId : string | undefined
    cycles : Cycle []
}

type Action = 
  {type : "add_new_cycle", payload : { newCycle : Cycle }} |
  {type : "interrupt_current_cycle", payload : { activeCycleId : string | undefined}} | 
  {type : "mark_cycle_as_finished", payload : { activeCycleId : string | undefined}}

export const cyclesReducer = (state : CyclesState, action : Action)  : CyclesState => {
  switch(action.type){
    case "add_new_cycle" :
      return {
        cycles : [...state.cycles, action.payload.newCycle],
        activeCycleId : action.payload.newCycle.id
      };  
      
    case "interrupt_current_cycle" :
      return {
        cycles : state.cycles.map((cycle) => {
            let stateReturns : Cycle;
            if(cycle.id === action.payload.activeCycleId) {
                stateReturns = {
                    ...cycle,
                    interruptDate : new Date()
                }
                return stateReturns
            } else return cycle
        }),
        activeCycleId : undefined
        }
    ;
    case "mark_cycle_as_finished" :
        return {
          cycles : state.cycles.map((cycle) => {
              let stateReturns : Cycle;
              if(cycle.id === action.payload.activeCycleId) {
                  stateReturns = {
                      ...cycle,
                      finishedDate : new Date()
                  }
                  return stateReturns
              } else return cycle
          }),
          activeCycleId : undefined
          };
    default : 
      return state
  }
}   
