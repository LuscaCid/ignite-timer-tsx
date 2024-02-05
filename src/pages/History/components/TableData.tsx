import { TableDataContainer, Status} from "./styles";
import { StatusProps } from "../styles"; 
//import { format, formatDistanceToNow } from 'date-fns'
//import { ptBR } from 'date-fns/locale/pt-BR'
interface IPropsTD {
 title : string
 minutesAgo : string
 statusPropety : StatusProps
}
//minutes ago will be formatted
export const TableDataCollection = ( {minutesAgo, statusPropety, title} : IPropsTD ) => {
    return (
        <tr>
            <TableDataContainer>
                {title}
            </TableDataContainer>
            <TableDataContainer>
                {minutesAgo}
            </TableDataContainer>
            <Status variant={statusPropety.variant}/>
        </tr>
            
    )
}