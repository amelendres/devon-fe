import React from 'react'
import { DevotionalList } from './DevotionalList'
// import { YearlyPlan } from '../../domain/YearlyPlan'
import { DailyDevotional } from '../../domain/DailyDevotional'
// import { planService } from '../../application/Plan.service'

type AppProps = {
  msg: string
}

const App: React.FC<AppProps> = ({ msg }) => {
  // const [YearlyPlan, setPlan] = React.useState<YearlyPlan|null>(null)

  const handleShowDevotional = (devotional: DailyDevotional) => {
    console.log(devotional)
    // setPlan(planService.addProductToPlan(devotional, basket))
  }

  return (
    <div className="App">
      <h1>{msg}</h1>
      <DevotionalList onSelectDevotional={handleShowDevotional}/>

      {/* { basket && <p>Items on basket: {basket.items.length}</p>} */}
    </div>
  )
}

export default App
