import React from 'react';
import {Link} from 'react-router-dom';

import { Devotional } from '../../../domain/Devotional'
import { YearlyPlan } from '../../../domain/YearlyPlan'

type DevotionalItemProps = {
  plan: YearlyPlan,
  devotional: Devotional,
  index: number,
  onOpenDevotional: (slug: string) => void
}

export const DevotionalItem: React.FC<DevotionalItemProps> = ({ plan, devotional, index, onOpenDevotional }) => {

  const state = 'show' //showed|opened|read
  return (
    <div className={`list-item ${state}`} id={`item_${index}`} onClick={() => onOpenDevotional(devotional.slug)} >
       <div className="index">
        <Link to={`/${plan.slug}/${devotional.slug}`}>{index}</Link>
      </div>
      <div className="title">
        <Link to={`/${plan.slug}/${devotional.slug}`}>{devotional.title}</Link>
      </div>
      <div className="actions" onClick={event => event.stopPropagation()}>
        {/* {state !== 'DEVOTIONAL_PINNED' && ( */}
          <button className={`icon-star`}  />
        {/* )} */}
      </div>
    </div>
  );
}
