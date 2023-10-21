import axios from './base'
import type { ISearchResultList } from '@/types'

export function fetchSearchData(key = '') {
  return axios.get('home_search', {
    params: { _label_like: key },
  })
}
