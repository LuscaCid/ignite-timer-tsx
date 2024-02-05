
import { UseCyclesContext } from '../../context/CyclesContext'
import { HistoryContainer, HistoryList } from './styles'
//type Props = {}

import { TableDataCollection } from './components/TableData' 
export const History = () => {
  const {cycles} = UseCyclesContext()
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
              cycles.length > 0 && (
                cycles.map((cycle) => (
                  <TableDataCollection 
                    {cycle.finishedDate ?? }
                  />
                ))
              )
            }
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}