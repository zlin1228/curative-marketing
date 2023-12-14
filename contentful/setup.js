const spaceImport = require('contentful-import');

const exportFile = require('./export.json');

const [NEXT_PUBLIC_CONTENTFUL_SPACE_ID, CONTENTFUL_MANAGEMENT_TOKEN] = process.argv.slice(2);

if (!NEXT_PUBLIC_CONTENTFUL_SPACE_ID || !CONTENTFUL_MANAGEMENT_TOKEN) {
  throw new Error(
    [
      'Parameters missing...',
      'Please run the setup command as follows',
      'NEXT_PUBLIC_CONTENTFUL_SPACE_ID=XXX CONTENTFUL_MANAGEMENT_TOKEN=CFPAT-XXX npm run setup',
    ].join('\n'),
  );
}

spaceImport({
  spaceId: NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  managementToken: CONTENTFUL_MANAGEMENT_TOKEN,
  content: exportFile,
})
  // eslint-disable-next-line no-console
  .then(() => console.log('The content model of your space is set up!'))
  .catch(e => console.error(e));
