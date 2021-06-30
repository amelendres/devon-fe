import React from 'react'
import { RouteComponentProps } from "react-router-dom";

import {DevotionalList} from '../component/DevotionalList'
import HelmetMetaData from '../../../../common/infrastructure/ui/component/seo/HelmetMetaData'
import { YearlyPlan } from '../../../domain/YearlyPlan'
import { app } from '../App'

import { planService } from '../../../application/Plan.service'

import {history} from '../../../../common/domain/history'

type TParams = { 
  planSlug: string
}

export const DevotionalListPage: React.FC<RouteComponentProps<TParams>> = ({ match }: RouteComponentProps<TParams>) => {

  const [plan, setPlan] = React.useState<YearlyPlan>()

  React.useEffect(() => {
    planService.plan(match.params.planSlug).then(setPlan)
    history.push(`/${match.params.planSlug}`)
  }, [match.params.planSlug])

  if (plan === undefined) {
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

      const meta = {
        title: `${plan.title} | ${app.title}`,
        description: plan.description,
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
              <h1 className="title-page">
                <span className="_title-wrapper">Devocionales</span>
              </h1>
            </nav>
              <DevotionalList plan={plan}/>
          </div>
        </div>
      );
}
