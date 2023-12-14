import { Col, Label } from 'components/column/column.styles';
import ComponentLink from 'components/link/link.component';

const Column = ({ component }) => {
  const { label, contents } = component.column;

  return (
    <Col>
      {label && <Label>{label}</Label>}
      {contents.map((content, index) => (
        <ComponentLink key={content.label + index} href={content.slug}>
          {content.label}
        </ComponentLink>
      ))}
    </Col>
  );
};

export default Column;
