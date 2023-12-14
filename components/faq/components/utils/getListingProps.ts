const getListingCategoryItems = (accordions, heading) =>
  accordions.reduce(
    (acc, { fields }) => {
      const accordionItems = fields.accordionItems;

      return {
        ...acc,
        accordionItems: [...acc.accordionItems, ...accordionItems],
      };
    },
    { accordionItems: [], heading },
  );

export const getListingCategories = categories =>
  categories.reduce(
    (acc, { sys, fields }) => [
      ...acc,
      {
        id: sys.id,
        fields: getListingCategoryItems(fields.accordions, fields.heading),
      },
    ],
    [],
  );

export const getAllAccordionItems = categories => {
  const listingCategories = getListingCategories(categories);

  return listingCategories.flatMap(category => category?.fields?.accordionItems || []);
};

export default getListingCategories;
