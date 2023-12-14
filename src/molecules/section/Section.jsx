import { Section as SectionStyles, Wrapper } from 'molecules/section/section.styles';

const Section = ({ children, backgroundColor, gap }) => (
  <SectionStyles backgroundColor={backgroundColor}>
    <Wrapper gap={gap}>{children}</Wrapper>
  </SectionStyles>
);

export default Section;
