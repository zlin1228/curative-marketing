import ReactMarkdown from 'react-markdown';

import colorMap from 'atoms/colors/colors';

import {
  AccordionIcon,
  Content,
  AccordionItem as Item,
  ItemHeading,
} from 'components/accordion/accordionItem/accordionItem.styles';

import type { Sys } from 'lib/types';

import type { FC } from 'react';

export interface AccordionItemProps {
  sys: Sys;
  fields: {
    question: string;
    answer: string;
  };
}

const AccordionItem: FC<AccordionItemProps> = ({ sys, fields: { question, answer } }) => (
  <Item value={sys.id}>
    <ItemHeading>
      {question}
      <AccordionIcon icon="chevron-up" size="24px" iconColor={colorMap.skyBlue[500]} />
    </ItemHeading>
    <Content>{answer && <ReactMarkdown>{answer}</ReactMarkdown>}</Content>
  </Item>
);

export default AccordionItem;
