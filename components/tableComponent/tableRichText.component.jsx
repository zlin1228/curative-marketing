import { Table } from 'react-bootstrap';

import TableBody from 'components/tableComponent/tableBody.component';
import { TableContainer } from 'components/tableComponent/tableComponent.styles';
import TableHeader from 'components/tableComponent/tableHeader.component';

const TableRichText = ({ columns }) => (
  <TableContainer>
    <Table responsive>
      <TableHeader columns={columns} />
      <TableBody columns={columns} />
    </Table>
  </TableContainer>
);

export default TableRichText;
