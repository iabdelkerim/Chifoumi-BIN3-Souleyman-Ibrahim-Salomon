import logo from './logo.svg';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import { Provider, lightTheme } from '@adobe/react-spectrum';
import Login from './auth/login';
import MatchList from './components/MatchList';

function App() {
    return (
        <Provider colorScheme="dark" theme={lightTheme}>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/matchList" component={MatchList} />
            </Switch>
        </Provider>
    );
}

export default App;
