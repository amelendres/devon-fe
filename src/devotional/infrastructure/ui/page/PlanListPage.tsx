import React from 'react'
import { RouteComponentProps } from "react-router-dom";

import {PlanList} from '../component/PlanList'
import HelmetMetaData from '../../../../common/infrastructure/ui/component/seo/HelmetMetaData'
import { YearlyPlan } from '../../../domain/YearlyPlan'
import { app } from '../App'

import { planService } from '../../../application/Plan.service'

type TParams = { 
}

export const PlanListPage: React.FC<RouteComponentProps<TParams>> = ({ match }: RouteComponentProps<TParams>) => {

  const [plans, setPlans] = React.useState<YearlyPlan[]>()

  React.useEffect(() => {
    planService.plans().then(setPlans)
  }, [])

  if (plans === undefined) {
    return (
      <div className="plans list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">Loading...</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    );
  }

      const meta = {
        title: `planes | ${app.title}`,
        description: 'Planes de devocionales',
        imageUrl: 'plans.coverPhotoUrl',
        quote: '',
        hashtag: `#planes`,
        siteName: app.name,
        author: `COMPARTIENDO EL PAN`
      }

      return (
        <div>
          <HelmetMetaData meta={meta}/>

          <div className="page plans lists-show">
            <nav>
              <h1 className="title-page">
                <span className="_title-wrapper">Planes</span>
              </h1>
            </nav>
              <PlanList />
          </div>
        </div>
      );
}
