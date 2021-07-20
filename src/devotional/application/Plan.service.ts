import { planRepository } from '../infrastructure/repository/PlanRepository'

export const planService = {
  getDevotionals: (planSlug: string) => {
    return planRepository.dailyDevotionals(planSlug)
  },
  plans: () => {
    return planRepository.all()
  },
  plan: (slug: string) => {
    return planRepository.get(slug)
  },
  dailyDevotional: (planSlug: string, devotionalSlug: string) => {
    return planRepository.dailyDevotional(planSlug, devotionalSlug)
  }
}
