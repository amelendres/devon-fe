import React from 'react'
import { useLocation} from "react-router-dom";

import {List as SearchList} from '../component/search/List'
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

  const [items, setItems] = React.useState<DevotionalItem[]>()
  // const [query, setQuery] = React.useState<string>()
  const queryParams = useQuery();
  const query = queryParams.get("q")??""

  React.useEffect(() => {
    searchService.search(query).then(setItems)
  }, [query])

  if (items === undefined) {
    return (
      <div className="devotinals list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">Searching...</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    );
  }

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
              <h1 className="title-page">
                <span className="_title-wrapper">Resultados</span>
              </h1>
            </nav>
              <SearchList  items={items}/>
          </div>
        </div>
      );
}
