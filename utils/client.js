import { createClient } from 'contentful';

import { getContentfulEnvironment } from 'utils/getContentfulEnvironment';

export default createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: process.env.CONTENTFUL_HOST,
  environment: getContentfulEnvironment(process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT),
});
