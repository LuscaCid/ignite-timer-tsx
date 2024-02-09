import { TableDataContainer, Status} from "./styles";
import { Cycle } from "../../Home/@types";
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

//minutes ago will be formatted
export const TableDataCollection = ( {finishedDate,interruptDate,taskInfo, startDate, id} : Cycle ) => {
    
    const relativeDateFormattedFromNow = formatDistanceToNow(startDate, {
        addSuffix :true,
        locale: ptBR
    }) 
    console.log(id)
    /**
     * nome da task
     * duracao --> minutes Amount
     * data de inicio
     */
    return (
        <tr>
            <TableDataContainer>
                {taskInfo.task}
            </TableDataContainer>
            <TableDataContainer>
                {taskInfo.minutesAmount} minutos
            </TableDataContainer>
            <TableDataContainer>
                {relativeDateFormattedFromNow}
            </TableDataContainer>
            <TableDataContainer>
                <Status variant={
                    finishedDate && "green-500" || interruptDate && "red-500" || 'yellow-500'
                }>
                    {finishedDate && "Concluído" ||interruptDate && "Interrompido" || 'Em andamento' }
                </Status>
            </TableDataContainer>
                
        </tr>
            
    )
}