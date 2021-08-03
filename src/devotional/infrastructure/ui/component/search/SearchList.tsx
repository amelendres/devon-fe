import * as React from 'react'
import { SearchItem } from './SearchItem'

import { DevotionalItem } from '../../../../domain/Plan'

type SearchListProps = {
  items: DevotionalItem[]
}

export const SearchList: React.FC<SearchListProps> = ({ items }) => {

  const handleOpenDevotional = (slug: string) => {
    console.log(slug)
  }

  return (
    <div className="list-items">
      {items.map((item, index) => (
      <SearchItem key={index} item={item} 
      index={index} onOpenDevotional={handleOpenDevotional}/>
      ))}
    </div>
  )
}
