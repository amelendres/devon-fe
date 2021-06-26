import { DailyDevotional } from './DailyDevotional'

export type PlanId = string

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
