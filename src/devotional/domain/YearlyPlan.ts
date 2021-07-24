import { DailyDevotional } from './DailyDevotional'
import { PlanId } from './Plan'

export type YearlyPlan = {
  id: PlanId
  year: number
  title: string
  description: string
  author: string
  coverPhotoUrl: string
  items: DailyDevotional[]
  slug: string
}