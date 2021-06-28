import React from 'react'
import {DevotionalOpen} from '../component/DevotionalOpen'
import HelmetMetaData from '../../../../common/infrastructure/ui/component/seo/HelmetMetaData'
import { YearlyPlan } from '../../../domain/YearlyPlan'
import { app } from '../App'
import { Share } from '../../../../common/domain/intent/Share'

import { RouteComponentProps } from "react-router-dom";
import { DailyDevotional } from '../../../domain/DailyDevotional'
import { planService } from '../../../application/Plan.service'

type TParams = { 
  planSlug: string,
  devotionalSlug: string
}

export const DevotionalPage: React.FC<RouteComponentProps<TParams>> = ({ match }: RouteComponentProps<TParams>) => {
  const sharer = new Share()
  const [plan, setPlan] = React.useState<YearlyPlan>()
  const [dailyDevotional, setDailyDevotional] = React.useState<DailyDevotional>()

  React.useEffect(() => {
    planService.plan(match.params.planSlug).then(setPlan)
    planService.dailyDevotional(match.params.planSlug, match.params.devotionalSlug).then(setDailyDevotional)
  }, [match.params.devotionalSlug, match.params.planSlug])

  if (plan  === undefined || dailyDevotional === undefined) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">Loading...</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    );
  }

  const {devotional} = dailyDevotional
  const index = dailyDevotional.day
  const sharable = {
    title: devotional.title,
    text: devotional.passage.text + devotional.passage.reference,
    url: window.location.href
  }
      const meta = {
        title: `${devotional.title} | ${plan.title} | ${app.title}`,
        description: `${devotional.passage.text} ${devotional.passage.reference}`,
        imageUrl: plan.coverPhotoUrl,
        quote: '',
        hashtag: `#Devocionales #MargaritaBurt #CompartiendoElPan`,
        siteName: app.name,
        author: plan.author
      }

      return (
        <div>
          <HelmetMetaData meta={meta}/>

          <div className="page lists-show">
            <nav>
              {/* <button className={`left icon-arrow-left`} onClick={()=>this.list()} /> */}
              <h1 className="title-page">
                <span className="title-wrapper">#{index} </span>
              </h1>
              <button className={`right icon-share`} onClick={()=>sharer.share(sharable)} />
            </nav>
              <DevotionalOpen devotional={devotional}/>
          </div>
        </div>
      );
}
