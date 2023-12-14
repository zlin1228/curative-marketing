import { SectionWrapper } from 'components/section/section.styles';

// TO-DO add breadcrumbs functionality so it's universal to all components
const Section = ({ children, ...props }) => <SectionWrapper {...props}>{children}</SectionWrapper>;

export default Section;
