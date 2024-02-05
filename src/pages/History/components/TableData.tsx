import { TableDataContainer, Status} from "./styles";
import { StatusProps } from "../styles"; 
import { Cycle } from "../../Home/@types";
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

//minutes ago will be formatted
export const TableDataCollection = ( {finishedDate,interruptDate,taskInfo, startDate} : Cycle ) => {
    
    const relativeDateFormattedFromNow = formatDistanceToNow(startDate, {
        addSuffix :true,
        locale: ptBR
    }) 
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
            <Status variant={
                finishedDate && "green-500" || interruptDate && "red-500" || 'yellow-500'
            }>
                {finishedDate && "Concluído" ||interruptDate && "Interrompido" || 'Em andamento' }
            </Status>
        </tr>
            
    )
}