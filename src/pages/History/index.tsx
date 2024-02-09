
import { UseCyclesContext } from '../../context/CyclesContext'
import { HistoryContainer, HistoryList } from './styles'

import { TableDataCollection } from './components/TableData' 
import { Cycle } from '../Home/@types'

export const History = () => {
  const {cyclesState} = UseCyclesContext()

  return (
    <HistoryContainer>
      <h1> Meu Histórico </h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
           {
            cyclesState.cycles.length > 0 && cyclesState.cycles.map((cycle : Cycle) => (
              <TableDataCollection
                id={cycle.id}
                key={cycle.id} 
                startDate={cycle.startDate}
                taskInfo={cycle.taskInfo}
                finishedDate={cycle.finishedDate}
                interruptDate={cycle.interruptDate}
              />
            ))
           }
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}