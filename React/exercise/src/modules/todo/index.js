import { Switch, Route } from "react-router-dom";
import View from './view';

const TodoModule = ({ match }) => {
  return (
    <Switch>
      <Route exact path={match.path} component={View} />
    </Switch>
  );
};

export default TodoModule;
