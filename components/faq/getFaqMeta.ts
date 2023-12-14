import type { FaqCategory } from 'components/faq/components/categoryMap/CategoryMap';
import { getAllAccordionItems } from 'components/faq/components/utils/getListingProps';

const getFaqMeta = (categories: FaqCategory[], schemaName?: string) => {
  const accordionItems = getAllAccordionItems(categories);

  const Accordion = accordionItems.map(faq => ({
    '@type': 'Question',
    name: faq.fields.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.fields.answer,
    },
  }));

  return {
    name: schemaName || 'Frequently Asked Questions',
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: Accordion,
  };
};

export default getFaqMeta;
