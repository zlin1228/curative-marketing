import { ApolloClient, HttpLink, InMemoryCache, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { RetryLink } from '@apollo/client/link/retry';
import merge from 'deepmerge';
import isEqual from 'lodash.isequal';
import { useMemo } from 'react';

import getContentfulEnvironment from 'utils/getContentfulEnvironment';

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

let apolloClient;

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_GRAPH_ACCESS_TOKEN;
const environment = getContentfulEnvironment(process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT);

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.warn(`[GraphQL error]: Message: ${message}`, 'Location:', locations, 'Path:', path);
    });
  }
  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
  }
});

const httpLink = () =>
  new HttpLink({
    uri: `https://graphql.contentful.com/content/v1/spaces/${space}/environments/${environment}`,
    credentials: 'same-origin',
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });

const retryLink = new RetryLink({
  delay: {
    initial: 300,
    max: Infinity,
    jitter: true,
  },
  attempts: {
    max: 5,
    retryIf: error => !!error,
  },
});

const createApolloClient = locale =>
  new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: from([retryLink, errorLink, httpLink()]),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {},
        },
      },
    }),
    defaultOptions: {
      query: {
        variables: {
          locale,
        },
      },
    },
  });

export const initializeApollo = (locale = 'en-US', initialState = null) => {
  const _apolloClient = apolloClient ?? createApolloClient(locale);

  if (initialState) {
    const existingCache = _apolloClient.extract();

    const data = merge(existingCache, initialState, {
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter(d => sourceArray.every(s => !isEqual(d, s))),
      ],
    });

    _apolloClient.cache.restore(data);
  }

  if (typeof window === 'undefined') {
    return _apolloClient;
  }

  if (!apolloClient) {
    apolloClient = _apolloClient;
  }

  return _apolloClient;
};

export const addApolloState = (_client, pageProps) => {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = _client.cache.extract();
  }

  return pageProps;
};

export const useApollo = pageProps => {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => initializeApollo('en-US', state), [state]);

  return store;
};
