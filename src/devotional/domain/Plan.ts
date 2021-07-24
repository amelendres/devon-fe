import { Devotional } from './Devotional'

export type PlanId = string

export type Plan = {
  id: PlanId
  title: string
  description: string
  author: string
  coverPhotoUrl: string
  slug: string
}

export type DevotionalItem = {
  devotional: Devotional
  plans: Plan[]
}