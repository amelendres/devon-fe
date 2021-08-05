import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { SearchPage } from './page/SearchPage'
import { DevotionalListPage } from './page/DevotionalListPage'
import { PlanListPage } from './page/PlanListPage'
import { DevotionalPage } from './page/DevotionalPage'

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

const CURRENT_PLAN = '/plan-2019'

type AppProps = {
  msg: string
}

const App: React.FC<AppProps> = ({ msg }) => {

  const helmetContext = {};

  return (
    <HelmetProvider context={helmetContext}>
    <div id="content-container" className="App">
      {/* <h1>{msg}</h1> */}
      <BrowserRouter>
          <Switch>
             <Redirect exact from="/" to={CURRENT_PLAN} />
              <Route exact path="/search" component={SearchPage}/>
              <Route exact path="/plans" component={PlanListPage}/>
              <Route exact path="/:planSlug" component={DevotionalListPage}/>
              <Route path={`/:planSlug/:devotionalSlug`} component={DevotionalPage} />
          </Switch>
      </BrowserRouter>
    </div>
    </HelmetProvider>
  )
}

export default App
