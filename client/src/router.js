/* eslint-disable react/prop-types */
import React, { lazy, Component, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import store from './redux/store';
import './less/common.less';
// import Loading from './component/loading';

const Index = lazy(() => import('./views/index')) ;

class AppRouter extends Component {
  render() {
    return (
      <Router>
        {/* <Provider store={store}> */}
        <Suspense fallback={<div>loading...</div>}>
          <Switch>
            <Route path='/' exact component={Index} />
            <Route path='*' render={() => <h1>404</h1>}/>
          </Switch>
        </Suspense>
        {/* </Provider> */}
      </Router>
    );
  }
}

export default AppRouter;
