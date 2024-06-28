import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getContactUs } from "../services/contactUs";
import ContactUsTableRow from "./ContactUsTableRow";

const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  height: 100vh;
  width: 100%;
  overflow: auto;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 1.6fr 1.8fr 1.2fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 11.4rem;
`;

function ContactUsTable() {
  const data = useQuery({
    queryKey: ["contactus"],
    queryFn: getContactUs,
  });
  console.log(data.error);

  return (
    <Table role="table">
      <TableHeader role="row">
        <div>Name</div>
        <div>Email ID</div>
        <div>Contact</div>
        <div>Message</div>
      </TableHeader>
      {data.data &&
        data.data.map((value) => (
          <ContactUsTableRow data={value} key={data.id} />
        ))}
    </Table>
  );
}

export default ContactUsTable;
