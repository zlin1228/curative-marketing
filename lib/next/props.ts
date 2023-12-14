import client from 'utils/client';

// ... add in props queries
export const getFooterProps = async () => {
  const res: any = await client.getEntries({
    content_type: 'footer',
    include: 5,
  });

  return res.items.find(x => x.fields?.internalName === 'Global Footer');
};

export default getFooterProps;
