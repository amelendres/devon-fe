import React from 'react'
import { useLocation} from "react-router-dom";

import {SearchBar} from '../component/search/SearchBar'
import {SearchList} from '../component/search/SearchList'
import HelmetMetaData from '../../../../common/infrastructure/ui/component/seo/HelmetMetaData'
import { DevotionalItem } from '../../../domain/Plan'
import { app } from '../App'

import { searchService } from '../../../application/Search.service'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

type SearchPageProps = {
}

export const SearchPage: React.FC<SearchPageProps> = () => {
  const [query, setQuery] = React.useState<string>()
  const [items, setItems] = React.useState<DevotionalItem[]>()
  const [searching, setSearching] = React.useState<number>()

  const queryParams = useQuery();
  const q = queryParams.get("q")??""

  React.useEffect(() => {
    setSearching(0)
    setQuery(q);
    if (q === "") {
      setItems([])
      return
    }
    searchService.search(q).then(setItems)
    
  }, [q])

  const onChangeQueryHandler = (q:string) => {
    setQuery(q);

    if (searching) {
      console.log("onChangeQueryHandler searching: %s",searching)
      clearTimeout(searching);
    }

    if (q === "") {
      setItems([])
      return
    }

    setSearching(+global.setTimeout(() => {
      console.log(q)
      searchService.search(q).then(setItems)
    }, 1000))
  }
  
  const searchList = (items === undefined) 
  ? 
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">Searching...</div>
          {/* <div className="subtitle-message">Sit back and relax</div> */}
        </div>
  : <SearchList  items={items}/>

      const meta = {
        title: `planes | ${app.title}`,
        description: 'Planes de devocionales',
        imageUrl: 'devotinals.coverPhotoUrl',
        quote: '',
        hashtag: `#planes`,
        siteName: app.name,
        author: `COMPARTIENDO EL PAN`
      }

      return (
        <div>
          <HelmetMetaData meta={meta}/>

          <div className="page search lists-show">
            <nav>
              {/* <SearchBar query={query??""} onChange={onChangeQueryHandler}/> */}
              <SearchBar query={query??""} onChange={onChangeQueryHandler}/>
            </nav>
              {searchList}
          </div>
        </div>
      );
}
