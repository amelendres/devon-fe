import * as React from 'react'
import { Item } from './Item'

import { DevotionalItem } from '../../../../domain/Plan'

type ListProps = {
  items: DevotionalItem[]
}

export const List: React.FC<ListProps> = ({ items }) => {

  const handleOpenDevotional = (slug: string) => {
    console.log(slug)
  }

  return (
    <div className="list-items">
      {items.map((item, index) => (
      <Item key={index} item={item} 
      index={index} onOpenDevotional={handleOpenDevotional}/>
      ))}
    </div>
  )
}
