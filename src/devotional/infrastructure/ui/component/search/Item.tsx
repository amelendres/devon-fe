import React from 'react';
import {Link} from 'react-router-dom';

import { DevotionalItem } from '../../../../domain/Plan'

type ItemProps = {
  item: DevotionalItem,
  index: number,
  onOpenDevotional: (slug: string) => void
}

export const Item: React.FC<ItemProps> = ({ item, index, onOpenDevotional }) => {

  const state = 'show' //showed|opened|read
  return (
    <div className={`list-item ${state}`} id={`item_${index}`} onClick={() => onOpenDevotional(item.devotional.slug)} >
       <div className="index">
        <Link to={`/${item.plans[0].slug}/${item.devotional.slug}`}>{index}</Link>
      </div>
      <div className="title">
        <Link to={`/${item.plans[0].slug}/${item.devotional.slug}`}>{item.devotional.title}</Link>
      </div>
      <div className="preview">
        {/* <Link to={`/${item.plans[0].slug}/${item.devotional.slug}`}>{item.devotional.content}</Link> */}
      </div>
    </div>
  );
}
