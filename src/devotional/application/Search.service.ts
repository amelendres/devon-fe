import { searchRepository } from '../infrastructure/repository/SearchRepository'

export const searchService = {
  search: (query: string) => {
    return searchRepository.search(query)
  }
}
