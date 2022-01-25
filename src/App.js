import './App.css';

import { Route, Switch } from 'react-router-dom';

import { Provider, defaultTheme } from '@adobe/react-spectrum';
import Login from './auth/login';
import MatchList from './components/MatchList';
import MatchPlay from './components/MatchPlay';


function App() {
    return (
        <Provider colorScheme="dark" theme={defaultTheme} scale="large">
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/matchList" component={MatchList} />
                <Route exact path="/play" component={MatchPlay} />
            </Switch>
        </Provider>
    );
}

export default App;
