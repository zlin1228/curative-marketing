export const getMaxRows = columns =>
  columns.map(item => item?.fields?.content?.length).reduce((max, current) => (current > max ? current : max), 0);

export default getMaxRows;
