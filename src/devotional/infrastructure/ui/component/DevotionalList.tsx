import * as React from 'react'
import { DevotionalItem } from './DevotionalItem'

import { DailyDevotional } from '../../../domain/DailyDevotional'
import { YearlyPlan } from '../../../domain/YearlyPlan'
import { planService } from '../../../application/Plan.service'

type DevotionalListProps = {
  plan: YearlyPlan
}

export const DevotionalList: React.FC<DevotionalListProps> = ({ plan }) => {
  const [devotionals, setDevotionals] = React.useState<DailyDevotional[]>([])

  React.useEffect(() => {
    planService.getDevotionals().then(setDevotionals)
  }, [])

  const handleOpenDevotional = (slug: string) => {
    console.log(slug)
  }

  return (
    <div className="list-items">
      {devotionals.map((dailyDevotional) => (
      <DevotionalItem key={dailyDevotional.day} plan={plan} devotional={dailyDevotional.devotional} 
      index={dailyDevotional.day} onOpenDevotional={handleOpenDevotional}/>
      ))}
    </div>
  )
}
