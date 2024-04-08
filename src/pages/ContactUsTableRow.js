import styled from "styled-components";


const TableRow = styled.div`
display: grid;
grid-template-columns: 1.6fr 1.8fr 1.2fr 1fr;
column-gap: 2.4rem;
align-items: center;
padding: 1.4rem 11.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;


function ContactUsTableRow({ data }) {
  const {name, email, contactNo, message} = data;
  return (
    <>
      <TableRow role="row">
          <p>{name}</p>
          <p>{email}</p>
          <p>{contactNo}</p>
          <p>{message}</p>
      </TableRow>
    </>
  );
}

export default ContactUsTableRow;