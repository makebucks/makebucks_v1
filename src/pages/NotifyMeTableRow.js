import styled from "styled-components";


const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

function NotifyMeTableRow({ data }) {
  const {email} = data;
  return (
    <>
      <TableRow role="row">
          <p>{email}</p>
      </TableRow>
    </>
  );
}

export default NotifyMeTableRow;