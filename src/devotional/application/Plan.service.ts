import { planRepository } from '../infrastructure/repository/PlanRepository'

export const planService = {
  getDevotionals: () => {
    return planRepository.dailyDevotionals()
  },
  getCurrent: () => {
    return planRepository.current()
  }
}
