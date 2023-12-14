import Head from 'next/head';
import React, { Fragment } from 'react';

const Meta = ({ tags }) => {
  const isProduction =
    process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT === 'production' ||
    (typeof window !== 'undefined' && window.location.hostname === 'curative.com');

  const getRobotsTag = () => {
    if (!isProduction) {
      return <meta name="robots" content="noindex, nofollow" />;
    }
    const index = tags?.noIndex ? 'noindex' : 'index';
    const follow = tags?.noFollow ? 'nofollow' : 'follow';

    return <meta name="robots" content={`${index}, ${follow}`} />;
  };

  return (
    <Fragment>
      <Head>
        <title key="title">{tags?.title}</title>
        <meta name="description" key="description" content={tags?.description} />

        {/* this meta tags helps Facebook appropriately title the page when shared within its social network */}
        <meta property="og:title" key="og_title" content={tags?.title} />
        {/* Helps facebook describe the page */}
        <meta property="og:description" key="og_description" content={tags?.description} />
        {/* A url of an image for Facebook to use in a preview. */}
        <meta property="og:image" key="og_image" content={tags?.og_image ? tags?.og_image : tags?.image} />
        <meta
          property="og:site_name"
          key="og_site_name"
          content={tags?.og_site_name ? tags?.og_site_name : tags?.title}
        />

        {/* Twitter displayed card*/}
        {tags?.twitter_site ? <meta name="twitter:card" key="twitter_card" content="summary" /> : null}

        {/* this will define the description of the post*/}
        {tags?.twitter_site ? <meta name="twitter:title" key="twitter_title" content={tags?.title} /> : null}

        {tags?.description ? (
          <meta name="twitter:description" key="twitter_description" content={tags?.description} />
        ) : null}

        {/* Twitter account */}
        {tags?.twitter_site ? <meta name="twitter:site" key="twitter_site" content={tags?.twitter_site} /> : null}
        {/* Name of Website */}
        {tags?.twitter_domain ? (
          <meta name="twitter:domain" key="twitter_domain" content={tags?.twitter_domain} />
        ) : null}

        {/* Image preview of shared post */}
        {tags?.twitter_site ? <meta name="twitter:image" key="twitter_img" content={tags?.twitter_image} /> : null}

        {/* End of Twitter Display card */}

        <meta name="robots" content={`${tags?.robots}`} />

        {/* The URL of the canonical tags */}
        <link rel="canonical" key="canonical" href={tags?.canonical} />

        {/* noIndex && noFollow */}
        {getRobotsTag()}
        {/* Keywords */}
        {tags?.keywords && tags?.keywords.length > 0 ? (
          <meta name="keywords" content={tags?.keywords.join(', ')} />
        ) : null}
        {tags?.schema && (
          <script
            className="structured-data-list"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(tags?.schema).replaceAll('<', '\\x3C'),
            }}
          />
        )}
      </Head>
    </Fragment>
  );
};

export default Meta;
