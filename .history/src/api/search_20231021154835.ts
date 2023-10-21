import axios from './base'
import { ISearchResultList } from '@/types'

export function fetchSearchData(key = '') {
  return axios.get('home_search', {
    params: { _label_like: key },
  })
}
