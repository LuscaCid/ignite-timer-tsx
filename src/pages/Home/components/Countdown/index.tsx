import { useEffect } from "react"
import { CountdownContainer, Separator } from "./styles"
import { differenceInSeconds } from "date-fns"
import { UseCyclesContext } from "../../../../context/CyclesContext"

export const Countdown = () => {
  
  const {
    activeCycle, 
    activeCycleId,
    amountSecondsPassed,
    setActiveCycleId,
    MarkCycleAsFinished,
    setSecondsPassed
  } = UseCyclesContext()

  const totalSeconds = activeCycle ? activeCycle.taskInfo.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, "0")
  const seconds = String(secondsAmount).padStart(2, "0")

  useEffect(() => {
    if(activeCycle) {
      document.title = `${minutes} : ${seconds}`
    } else {
      setTimeout(() => {document.title = 'Ignite Timer'}, 4000)
      document.title = 'Ciclo conluído!'
      
    }
  }, [minutes, seconds, activeCycle])

  useEffect (() => {
    let interval : number
    if(activeCycle) {
       
      interval = setInterval(() => {
        const secondsDiff = differenceInSeconds(new Date(), activeCycle.startDate)
        if(secondsDiff >= totalSeconds){
          MarkCycleAsFinished()
          setActiveCycleId(null)
        }
        setSecondsPassed(secondsDiff)
        }, 1000) 
    }
    return () => {
      clearInterval(interval)
    }
  } , [activeCycle, totalSeconds, activeCycleId, setActiveCycleId, MarkCycleAsFinished, setSecondsPassed ])

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  )
}