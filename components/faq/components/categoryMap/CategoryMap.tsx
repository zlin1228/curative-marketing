import Badge from 'molecules/badge/Badge';

import scrollElementIntoView from 'utils/scrollElementIntoView';

import type { Sys } from 'lib/types';

import type { Dispatch, FC, SetStateAction } from 'react';

interface AccordionItemProps {
  fields: {
    question: string;
    answer: string;
  };
  sys: Sys;
}

interface AccordionProps {
  accordion: { fields: AccordionItemProps };
  sys: Sys;
}

export interface FaqCategory {
  fields: { heading: string; accordions: AccordionProps[] };
  sys: Sys;
}

export interface CategoryMapProps {
  activeCategory: number | null;
  setActiveCategory: Dispatch<SetStateAction<number | null>>;
  categories: FaqCategory[];
}

const CategoryMap: FC<CategoryMapProps> = ({ activeCategory, setActiveCategory, categories }) => (
  <>
    {categories.map((category, index) => (
      <Badge
        key={category.sys.id}
        label={category.fields.heading}
        color="blue"
        type={activeCategory === index ? 'filled' : 'outline'}
        size="md"
        action={() => {
          setActiveCategory(activeCategory === index ? null : index);
          scrollElementIntoView('accordions');
        }}
      />
    ))}
  </>
);

export default CategoryMap;
