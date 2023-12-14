import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export const SysFragment = gql`
  fragment sys on Sys {
    id
  }
`;
export const CategoryFragment = gql`
  fragment category on TaxonomyBlogCategory {
    sys {
      ...sys
    }
    title
    subtitle
    slug
  }
  ${SysFragment}
`;
export const AssetFragment = gql`
  fragment asset on Asset {
    sys {
      ...sys
    }
    title
    description
    contentType
    fileName
    size
    url
    width
    height
  }
  ${SysFragment}
`;
export const BlogPostCardFragment = gql`
  fragment blogPostCard on BlogPost {
    sys {
      ...sys
    }
    slug
    title
    categoryCollection {
      items {
        ...category
      }
    }
    featuredImage {
      ...asset
    }
    excerpt
    publishDate
  }
  ${SysFragment}
  ${CategoryFragment}
  ${AssetFragment}
`;
export const GetBlogPostsQuery = gql`
  query getBlogPosts($locale: String, $limit: Int!, $skip: Int) {
    blogPostCollection(locale: $locale, limit: $limit, skip: $skip, order: publishDate_DESC) {
      limit
      skip
      total
      items {
        ...blogPostCard
      }
    }
  }
  ${BlogPostCardFragment}
`;

/**
 * __useGetBlogPostsQuery__
 *
 * To run a query within a React component, call `useGetBlogPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBlogPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBlogPostsQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      limit: // value for 'limit'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useGetBlogPostsQuery(
  baseOptions: Apollo.QueryHookOptions<GetBlogPostsQuery, GetBlogPostsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetBlogPostsQuery, GetBlogPostsQueryVariables>(GetBlogPostsQuery, options);
}
export function useGetBlogPostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetBlogPostsQuery, GetBlogPostsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetBlogPostsQuery, GetBlogPostsQueryVariables>(GetBlogPostsQuery, options);
}
export function useGetBlogPostsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<GetBlogPostsQuery, GetBlogPostsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetBlogPostsQuery, GetBlogPostsQueryVariables>(GetBlogPostsQuery, options);
}
export type GetBlogPostsQueryHookResult = ReturnType<typeof useGetBlogPostsQuery>;
export type GetBlogPostsLazyQueryHookResult = ReturnType<typeof useGetBlogPostsLazyQuery>;
export type GetBlogPostsSuspenseQueryHookResult = ReturnType<typeof useGetBlogPostsSuspenseQuery>;
export type GetBlogPostsQueryResult = Apollo.QueryResult<GetBlogPostsQuery, GetBlogPostsQueryVariables>;
