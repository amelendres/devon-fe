import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

import { DevotionalListPage as Home } from './page/DevotionalListPage'
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

type AppProps = {
  msg: string
}

const App: React.FC<AppProps> = ({ msg }) => {
  return (
    <div className="App">
      {/* <h1>{msg}</h1> */}
      <Router>
        <Route exact path="/" component={Home}/>
        <Route path={`/:planSlug/:devotionalSlug`} component={DevotionalPage} />
      </Router>
    </div>
  )
}

export default App
