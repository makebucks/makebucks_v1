import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getNotifyMe } from "../services/notifyme";
import NotifyMeTableRow from "./NotifyMeTableRow";


const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
    width: 30%;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 1.8fr ;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

function NotifyMeTable() {
   const data = useQuery({
        queryKey: ['notifyme'],
        queryFn: getNotifyMe
    })
    console.log(data.error);
    

  return (
  <Table role="table">
      <TableHeader role="row">
        <div>Email ID</div>
       
      </TableHeader>
      { data.data &&
      data.data.map((mail) => (
        
        <NotifyMeTableRow data={mail} key={data.id} />
      ))}

    </Table>
    
  );
}

export default NotifyMeTable;