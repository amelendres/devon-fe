import React from 'react'
import { DevotionalListPage } from './page/DevotionalListPage'
import { YearlyPlan } from '../../domain/YearlyPlan'
import { planService } from '../../application/Plan.service'

export const app = {
  name: 'DevON',
  title: 'COMPARTIENDO EL PAN',
  description: `La aplicación de devocionales bíblicos para el pueblo de habla hispana.
  A fin de que el hombre de Dios sea perfecto, equipado para toda buena obra.
  2 Timoteo 3:17`,
  image: `${process.env.PUBLIC_URL}/compartiendo-el-pan.jpg`,
  token: null
}

export const defaultPlan = {
  title: 'Devocionales Margarita Burt',
  slug: 'devocionales-margarita-burt',
  description: 'Plan anual de devocionales bíblicos para la edificación del cuerpo de CRISTO por Margarita Burt',
  author: 'Margarita Burt',
  image: `${process.env.PUBLIC_URL}/devocionales-margarita-burt.jpg`
}

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
      {/* <h1>{msg}</h1> */}
      <DevotionalListPage plan={plan}/>
    </div>
  )
}

export default App
