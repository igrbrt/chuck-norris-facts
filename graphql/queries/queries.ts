import { gql } from '@apollo/client'

export const RANDOM = gql`
  query GetRandomJoke($category: String) {
    randomJoke(category: $category) {
      id
      value
    }
  }
`

export const CATEGORIES = gql`
  query GetCategories {
    categories
  }
`
