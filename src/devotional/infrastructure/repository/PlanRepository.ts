import { http } from '../http/http'
import { DailyDevotional } from '../../domain/DailyDevotional'
import { YearlyPlan } from '../../domain/YearlyPlan'
import { slugify } from '../../../common/domain/Slugify'
import { defaultPlan } from '../ui/App'
import { localStorageCache } from './LocalStorage'


// const DEVOM_API_URL = 'https://proservant-staging.herokuapp.com/api/v1'
const DEVOM_API_URL = 'http://localhost:8030/api/v1'
// const YEARLY_PLAN_ID = '1bec054b-ec6c-4ec0-becc-1a46bee429fb'
const PLANS_KEY = 'plans'

export const planRepository = {
  dailyDevotionals: async (planSlug: string): Promise<DailyDevotional[]> => {
    console.log("\nplanRepository dailyDevotionals.. %j", planSlug)
    let devotionals = localStorageCache.get(planSlug)
    if (devotionals!==undefined) {
      console.log("dailyDevotionals devotionals (cached): %j", devotionals)
      return devotionals.items
    }

    const plan = await planRepository.get(planSlug) 
    devotionals = await http.get<DailyDevotional[]>(DEVOM_API_URL+'/yearly-plans/'+plan.id+'/devotionals')
    console.log("dailyDevotionals devotionals: %j", devotionals)
    devotionals.map((item:DailyDevotional) => slugifyDevotional(item))
    storeDailyDevotionals(planSlug, devotionals)
      
    return devotionals
  },
  get: async (planSlug: string): Promise<YearlyPlan>  => {
    console.log("\nplanRepository get... %s", planSlug)
    const plans = localStorageCache.get(PLANS_KEY)
    if (plans!==undefined) {
      console.log("get plans (cached): %j", plans)
      return plans.items.find((item:YearlyPlan) => item.slug === planSlug)
    }
    await planRepository.all()

    return planRepository.get(planSlug)
  },
  dailyDevotional: async (planSlug: string, devotionalSlug:string): Promise<DailyDevotional> => {
    console.log("\nplanRepository  %s/%s", planSlug, devotionalSlug)

    const devotionals = localStorageCache.get(planSlug)
    if (devotionals!==undefined) {
      console.log("\nplanRepository devotionals (cached) %j", devotionals)
      return devotionals.items.find((item:DailyDevotional) => item.devotional.slug === devotionalSlug)
    }
    
    await planRepository.dailyDevotionals(planSlug)
    return planRepository.dailyDevotional(planSlug, devotionalSlug)
  },
  all: async () => {
    console.log("\nplanRepository all")
    let plans = localStorageCache.get(PLANS_KEY)
    if (plans!==undefined) {
      console.log("all plans (cached): %j", plans)
      return plans.items
    }

    plans = await http.get<YearlyPlan[]>(DEVOM_API_URL+'/yearly-plans')
    console.log("\nall plans: %j", plans)
    plans.map((item:YearlyPlan) => slugifyPlan(item))
    storePlans(PLANS_KEY, plans)

    return plans
  },
}

const storeDailyDevotionals = (key:string, dailyDevotionals: DailyDevotional[]): void =>{
  console.log("\nstoreDailyDevotionals %j", dailyDevotionals)
  const slugs = dailyDevotionals.reduce(function(accumulator, item) {
    return {...accumulator, [item.devotional.slug]: item.devotional.id}
  }, [])
  const sluggedDailyDevotionals = {'items': dailyDevotionals, 'slugs': slugs}
  localStorageCache.set(key, sluggedDailyDevotionals)
}

const storePlans = (key:string, plans: YearlyPlan[]) =>{
  console.log("\nstorePlans %j", plans)
  const slugs = plans.reduce(function(accumulator, item) {
    return {...accumulator, [item.slug]: item.id}
  }, [])
  const sluggedPlans = {'items': plans, 'slugs': slugs}
  localStorageCache.set(key, sluggedPlans)
}

const slugifyPlan = (plan:YearlyPlan) => {
  plan.description = defaultPlan.description
  plan.author = defaultPlan.author
  return Object.assign(plan, {slug: slugify(plan.title)});
}

const slugifyDevotional = (item:DailyDevotional) => {
  item.devotional.author = defaultPlan.author
  return Object.assign(item, { devotional: Object.assign(item.devotional, {slug: slugify(item.devotional.title)}) })
}
