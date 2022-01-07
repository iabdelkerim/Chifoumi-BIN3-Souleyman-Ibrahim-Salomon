import logo from './logo.svg';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import { Provider, lightTheme } from '@adobe/react-spectrum';
import Login from './auth/login';

function App () {
     
  return (
     <Provider colorScheme="light" theme={lightTheme}>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/login" component={Login} />
            </Switch>
    </Provider>)
};

export default App;
