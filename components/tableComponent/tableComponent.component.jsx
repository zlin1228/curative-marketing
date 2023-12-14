import { Col, Container, Row } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

import { media, useMediaQuery } from 'atoms/breakpoints/breakpoints';

import HeadingFragment from 'components/heading/headingFragment.component';
import TableAccordion from 'components/tableComponent/tableAccordion.component';
import { TableStyles } from 'components/tableComponent/tableComponent.styles';
import TableRichText from 'components/tableComponent/tableRichText.component';

const TableComponent = ({ component }) => {
  const isDesktop = useMediaQuery(media.lg);
  const { heading, subheading, columns } = component;

  return (
    <TableStyles>
      <Container>
        <Row>
          <Col>
            <HeadingFragment
              heading={heading && <ReactMarkdown className="heading">{heading}</ReactMarkdown>}
              subheading={subheading}
            />
            {columns && (isDesktop ? <TableRichText columns={columns} /> : <TableAccordion columns={columns} />)}
          </Col>
        </Row>
      </Container>
    </TableStyles>
  );
};

export default TableComponent;
