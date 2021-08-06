import React from 'react';
import {Link} from 'react-router-dom';

import { YearlyPlan } from '../../../domain/YearlyPlan'

type PlanItemProps = {
  plan: YearlyPlan,
  index: number,
  onOpenPlan: (slug: string) => void
}

export const PlanItem: React.FC<PlanItemProps> = ({ plan, index, onOpenPlan }) => {

  const state = 'show' //showed|opened|read
  return (
    <div className={`list-item ${state}`} onClick={() => onOpenPlan(plan.slug)} >
       <div className="index">
        <Link to={`/${plan.slug}`}>{index}</Link>
      </div>
      <div className="title">
        <Link to={`/${plan.slug}`}>{plan.title}</Link>
      </div>
      <div className="actions" onClick={event => event.stopPropagation()}>
        {/* 'TODO SHOW READRING PROGRESS' */}
        
      </div>
    </div>
  );
}
