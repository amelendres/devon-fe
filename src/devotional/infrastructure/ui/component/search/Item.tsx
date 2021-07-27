import React from 'react';
import {Link} from 'react-router-dom';

import { DevotionalItem } from '../../../../domain/Plan'

const MAX_LENGTH = 200

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
      <div className="preview">
        <div className="title">
          <Link to={`/${item.plans[0].slug}/${item.devotional.slug}`}>{item.devotional.title}
          <span className="content">
            {`${item.devotional.content.substring(0, MAX_LENGTH)}...`}
          </span>
          </Link>
        </div>

      </div>
    </div>
  );
}
