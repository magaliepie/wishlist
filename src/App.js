import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BackHome from './components/BackHome/BackHome';
import WishesContainer from './components/WishesContainer/WishesContainer';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={WishesContainer} />
                <Route component={BackHome} />
            </Switch>
        </Router>
    );
}

export default App;
