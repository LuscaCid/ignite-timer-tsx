import { NewCycleFormDataType } from "."

export interface Cycle {
  id?: string //alwais 'll be generatade 
  taskInfo: NewCycleFormDataType
  startDate : Date
  interruptDate? : Date 
  finishedDate? : Date
}
