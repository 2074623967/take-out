export interface ISearchRecomment {
  recomments: {
    value: number
    lable: string
  }
}

export interface ISearchResultList {
  list: ISearchResult[]
}

export interface ISearchResult {
  type: number
  label: string
  resultCount: number
}
