import React from 'react';
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
    <div className={`list-item ${state}`} onClick={() => onOpenDevotional(devotional.slug)} >
      <div className="index">
        {index}
      </div>
      <div className="title">
        <a href={`/${plan.slug}/${devotional.slug}`}>{devotional.title}</a>
      </div>

      <div className="actions" onClick={event => event.stopPropagation()}>
        {/* {state !== 'DEVOTIONAL_PINNED' && ( */}
          <button className={`icon-star`}  />
        {/* )} */}
      </div>
    </div>
  );
}
