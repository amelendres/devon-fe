import { http } from '../http/http'
// import { DailyDevotionalDTO } from '../http/dto/DailyDevotionalDTO'
import { DailyDevotional } from '../../domain/DailyDevotional'
import { YearlyPlan } from '../../domain/YearlyPlan'
import { slugify } from '../../domain/Slugify'


// const DEVOM_API_URL = 'https://proservant-staging.herokuapp.com/api/v1'
const DEVOM_API_URL = 'http://localhost:8030/api/v1'
const YEARLY_PLAN_ID = '1bec054b-ec6c-4ec0-becc-1a46bee429fb'
export const planRepository = {
  dailyDevotionals: async () => {
    const dailyDevotionals = await http.get<DailyDevotional[]>(DEVOM_API_URL+'/yearly-plans/'+YEARLY_PLAN_ID+'/devotionals')
    return dailyDevotionals.map(item =>  Object.assign(item, { devotional: Object.assign(item.devotional, {slug: slugify(item.devotional.title)}) }));
    // return dailyDevotionals
  },
  current: async () => {
    const plan = await http.get<YearlyPlan>(DEVOM_API_URL+'/yearly-plans/'+YEARLY_PLAN_ID)
    return Object.assign(plan, {slug: slugify(plan.title)});
    // return plan
  }
}
