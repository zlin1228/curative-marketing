import { Accordion, AccordionContent, AccordionItem } from '@radix-ui/react-accordion';

import Section from 'molecules/section/Section';

import Button from 'components/button/button.component';
import ComponentLink from 'components/link/link.component';
import {
  AccordionIcon,
  Column,
  Content,
  Heading,
  HeadingContainer,
  ItemWrapper,
  Link,
  LinksWrapper,
  List,
  ListItem,
  ListItemMarker,
  linkedListTheme,
} from 'components/linkedList/linkedList.styles';

import OptimizedRichText from 'utils/OptimizedRichText';
import colorizeText from 'utils/colorizeText';
import { generateProps } from 'utils/componentGenerator';
import { toCamelCase } from 'utils/textFunctions';

const Item = ({ item, theme }) => {
  const hasLinks = item.links && item.links.length > 0;

  const OptionalLink = ({ children }) =>
    hasLinks || !item.link ? <>{children}</> : <ComponentLink href={item.link}>{children}</ComponentLink>;

  return (
    <AccordionItem value={item.id} disabled={!hasLinks} asChild>
      <ItemWrapper>
        <ListItem theme={theme}>
          <ListItemMarker theme={theme} />
          <OptionalLink>{item.label}</OptionalLink>
          {hasLinks && <AccordionIcon icon="chevron-up" size="16px" />}
        </ListItem>
        {hasLinks && (
          <AccordionContent asChild>
            <LinksWrapper theme={theme}>
              {item.links.map(link => (
                <Link key={link.link} href={link.link} theme={theme}>
                  {link.label}
                </Link>
              ))}
            </LinksWrapper>
          </AccordionContent>
        )}
      </ItemWrapper>
    </AccordionItem>
  );
};

const LinkedList = ({ heading, content, list, variation, buttons }) => {
  const theme = toCamelCase(variation);

  return (
    <Section gap="40px" backgroundColor={linkedListTheme[theme].background}>
      <HeadingContainer>
        {heading && <Heading theme={theme}>{colorizeText(heading, linkedListTheme[theme].headingHighlight)}</Heading>}
        {content && <Content theme={theme}>{OptimizedRichText(content)}</Content>}
      </HeadingContainer>
      {list && list.length > 0 && (
        <Accordion type="multiple" collapsible asChild>
          <List>
            <Column>
              {list.map(
                (item, index) =>
                  index < Math.round(list.length / 2) && <Item key={item.id} item={item} theme={theme} />,
              )}
            </Column>
            <Column>
              {list.map((item, index) => index > list.length / 2 && <Item key={item.id} item={item} theme={theme} />)}
            </Column>
          </List>
        </Accordion>
      )}
      {buttons &&
        buttons.length > 0 &&
        buttons.map(button => {
          const props = generateProps(button);

          return <Button key={props._id} {...props} />;
        })}
    </Section>
  );
};

export default LinkedList;
