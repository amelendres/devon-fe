import * as React from 'react'
import { PlanItem } from './PlanItem'

import { YearlyPlan } from '../../../domain/YearlyPlan'

type PlanListProps = {
  plans: YearlyPlan[]
}

export const PlanList: React.FC<PlanListProps> = ({plans}) => {

  const onOpenPlanHandler = (slug: string) => {
    console.log(slug)
  }

  return (
    <div className="list-items">
      {plans.map((plan:YearlyPlan) => (
      <PlanItem key={plan.id} plan={plan} index={plan.year} onOpenPlan={onOpenPlanHandler}/>
      ))}
    </div>
  )
}
