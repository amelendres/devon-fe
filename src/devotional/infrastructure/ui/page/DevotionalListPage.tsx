import React from 'react'
import {DevotionalList} from '../component/DevotionalList'
import HelmetMetaData from '../../../../common/infrastructure/ui/component/seo/HelmetMetaData'
import { YearlyPlan } from '../../../domain/YearlyPlan'
import { app } from '../App'

type DevotionalListPageProps = {
    plan: YearlyPlan,
  }

export const DevotionalListPage: React.FC<DevotionalListPageProps> = ({ plan }) => {

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
                <span className="title-wrapper">Devocionales</span>
              </h1>
            </nav>
            <DevotionalList plan={plan}/>
          </div>
        </div>
      );
}