import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import '../styles/Main.scss';
import DashboardView from './DashboardView';

function App(): JSX.Element {
  const DEFAULT_CLASSNAME = 'App';

  return (
    <div className={DEFAULT_CLASSNAME}>
      <Router>
        <Switch>
          <Route path='/' exact>
            <DashboardView />
          </Route>
          <Route path='/dashboard'>
            <DashboardView />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
