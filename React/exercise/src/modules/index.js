import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import TodoModule from './todo';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          path='/todo'
          component={TodoModule}
        />
        <Route
          exact
          path='/'
        >
          <Redirect to='/todo' />
        </Route>
        <Route
          render={() => <p>Opps! Something is not right, maybe you want to go to <a href='/'>Home</a></p>}
        />
      </Switch>
    </Router>
  );
};

export default App;
