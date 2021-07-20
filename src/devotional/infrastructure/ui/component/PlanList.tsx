import * as React from 'react'
import { PlanItem } from './PlanItem'

import { YearlyPlan } from '../../../domain/YearlyPlan'
import { planService } from '../../../application/Plan.service'

type DevotionalListProps = {
}

export const PlanList: React.FC<DevotionalListProps> = () => {
  const [plans, setPlans] = React.useState<YearlyPlan[]>([])

  React.useEffect(() => {
    planService.plans().then(setPlans)
  }, [])

  const handleOpenPlan = (slug: string) => {
    console.log(slug)
  }

  return (
    <div className="list-items">
      {plans.map((plan) => (
      <PlanItem key={plan.id} plan={plan} index={plan.year} onOpenPlan={handleOpenPlan}/>
      ))}
    </div>
  )
}
