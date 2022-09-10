import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { Home } from '../pages/Home/index'

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
