export interface Cycle {
  id: string
  taskInfo: NewCycleFormDataType
  startDate : Date
  interruptDate? : Date 
  finishedDate? : Date
}
