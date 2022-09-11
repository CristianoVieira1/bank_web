import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { Home } from '../pages/Home/index'
import { Login } from '../pages/Login'

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/Login" component={Login} />
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
