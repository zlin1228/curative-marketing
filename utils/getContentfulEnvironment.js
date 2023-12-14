const ContentfulEnvironment = {
  SANDBOX: 'sandbox',
  STAGING: 'staging',
  DEVELOPMENT: 'development',
  PRODUCTION: 'master',
};

export const getContentfulEnvironment = environment => {
  switch (environment || '') {
    case 'production':
      return ContentfulEnvironment.PRODUCTION;
    case 'staging':
      return ContentfulEnvironment.STAGING;
    case 'dev':
      return ContentfulEnvironment.DEVELOPMENT;
    default:
      return ContentfulEnvironment.SANDBOX;
  }
};

export default getContentfulEnvironment;
