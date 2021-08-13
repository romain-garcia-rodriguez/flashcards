// Dependencies
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Components
import Home from '../views/Home'

const Routing = () => {
    const home = ['/', '/home', 'accueil']
    return (
        <div>
            <Router>
                <Switch>
                    <Route path={home} exact>
                        <Home />
                    </Route>
                    <Route path={'/decks'} exact>
                        <div>
                            Here decks
                        </div>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Routing