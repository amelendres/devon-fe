import { http } from '../http/http'
import { slugify } from '../../../common/domain/Slugify'
import { defaultPlan } from '../ui/App'
import { Plan, DevotionalItem } from 'devotional/domain/Plan'


// const DEVOM_API_URL = 'https://proservant-staging.herokuapp.com/api/v1'
const DEVOM_API_URL = 'http://localhost:8030/api/v1'
// const YEARLY_PLAN_ID = '1bec054b-ec6c-4ec0-becc-1a46bee429fb'

export const searchRepository = {
  search: async (query: string): Promise<DevotionalItem[]> => {
    console.log("\nsearchRepository search... %s", query)
    let devotionals = await http.get<DevotionalItem[]>(DEVOM_API_URL+'/search?q='+query)
    console.log("dailyDevotionals devotionals:", devotionals)
    devotionals.map((item:DevotionalItem) => slugifyDevotionalItem(item))
    // storeDailyDevotionals(planSlug, devotionals)
      
    return devotionals
  },
  
}

const slugifyPlan = (plan:Plan) => {
  plan.description = defaultPlan.description
  plan.author = defaultPlan.author
  return Object.assign(plan, {slug: slugify(plan.title)});
}

const slugifyDevotionalItem = (item:DevotionalItem) => {
  item.devotional.author = defaultPlan.author
  item.plans.map((plan:Plan) => slugifyPlan(plan))
  return Object.assign(item, { devotional: Object.assign(item.devotional, {slug: slugify(item.devotional.title)})})
}
