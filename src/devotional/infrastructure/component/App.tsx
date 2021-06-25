import React from 'react'
import { DevotionalList } from './DevotionalList'
import { YearlyPlan } from '../../domain/YearlyPlan'
import { planService } from '../../application/Plan.service'

type AppProps = {
  msg: string
}

const App: React.FC<AppProps> = ({ msg }) => {
  const [plan, setPlan] = React.useState<YearlyPlan>()

  React.useEffect(() => {
    planService.getCurrent().then(setPlan)
  }, [])

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

  return (
    <div className="App">
      <h1>{msg}</h1>
      <DevotionalList plan={plan}/>
    </div>
  )
}

export default App
