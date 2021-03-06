import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Home from './Home'
import AboutMe from './AboutMe'
import Transcript from './Transcript'
import NavigationBar from './components/NavigationBar'
import 'materialize-css/dist/css/materialize.min.css'
import './css/myCSS.css'
import M from 'materialize-css'

export default class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Router>
                <React.Fragment>
                    <NavigationBar />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/AboutMe" component={AboutMe} />
                            <Route exact path="/Transcript" component={Transcript} />
                            <Route component={NoMatch} />
                        </Switch>
                </React.Fragment>
            </Router>
        )
    }
}

function NoMatch({ location }) {
    M.toast({
        html: 'Page does not exist', classes: 'rounded'
    })

    let redirectLocation = '/'

    return (
        <Redirect from={location.pathname} to={redirectLocation} />
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

if (process.env.NODE_ENV !== 'production') {
    console.log('Let\'s Develop great things 😏')
}