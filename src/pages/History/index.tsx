import React from 'react'
import { HistoryContainer, HistoryList, Status } from './styles'
//type Props = {}

export const History = () => {
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
            <tr>
              <td>task de server</td>
              <td>30 minutos</td>
              <td>há dois meses</td>
              <td>
                <Status variant='green-500'>Concluido</Status>
              </td>
            </tr>
            <tr>
              <td>task de server</td>
              <td>30 minutos</td>
              <td>há dois meses</td>
              <td>
                <Status variant = 'yellow-500'>Em andamento</Status>
              </td>
            </tr>
            <tr>
              <td>task de server</td>
              <td>30 minutos</td>
              <td>há dois meses</td>
              <td>
                <Status variant = 'red-500'>Interrompido</Status>
              </td>
            </tr>
            <tr>
              <td>task de server</td>
              <td>30 minutos</td>
              <td>há dois meses</td>
              <td>
                <Status variant = 'green-500'>Concluido</Status>
              </td>
            </tr>
            <tr>
              <td>task de server</td>
              <td>30 minutos</td>
              <td>há dois meses</td>
              <td>
                <Status variant = 'green-500'>Concluido</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}