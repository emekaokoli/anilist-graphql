import { gql } from 'graphql-request';

export const url = 'https://graphql.anilist.co';
export const query = gql`
  query ($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        hasNextPage
        perPage
      }
      media(sort: START_DATE_DESC, startDate_greater: 2020, type: ANIME) {
        id
        title {
          native
        }
        siteUrl
        type
        genres
      }
    }
  }
`;
