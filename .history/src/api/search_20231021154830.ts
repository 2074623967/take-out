import axios from './base'
import {ISearchResultList}

export function fetchSearchData(key = '') {
  return axios.get('home_search', {
    params: { _label_like: key },
  })
}
