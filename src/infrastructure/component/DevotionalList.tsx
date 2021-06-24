import * as React from 'react'
import { DailyDevotional } from '../../domain/DailyDevotional'
import { planService } from '../../application/Plan.service'

type DevotionalListProps = {
  onSelectDevotional: (DailyDevotional: DailyDevotional) => void
}

export const DevotionalList: React.FC<DevotionalListProps> = ({ onSelectDevotional }) => {
  const [devotionals, setDevotionals] = React.useState<DailyDevotional[]>([])

  React.useEffect(() => {
    planService.getDevotionals().then(setDevotionals)
  }, [])

  return (
    <ul>
      {devotionals.map((DailyDevotional) => <li key={DailyDevotional.day}>
        <button onClick={() => { onSelectDevotional(DailyDevotional) }}>{DailyDevotional.devotional.title}</button>
      </li>)}
    </ul>
  )
}
