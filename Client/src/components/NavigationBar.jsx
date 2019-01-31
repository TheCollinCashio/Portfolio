import React from 'react'
import { Link } from 'react-router-dom'
import M from 'materialize-css'

export default class SideNav extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <React.Fragment>
                <nav className="ccNavGrad">
                    <div className="nav-wrapper">
                        <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <Link to="/" className="brand-logo center">My Portfolio</Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li>
                                <Link to="/AboutMe">About Me</Link>
                            </li>
                            <li>
                                <Link to="/Transcript">Transcript</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <ul id="slide-out" className="sidenav">
                    <li>
                        <div className="user-view">
                            <a href="#name">
                                <span className="white-text name">John Doe</span>
                            </a>
                            <a href="#email">
                                <span className="white-text email">jdandturk@gmail.com</span>
                            </a>
                        </div>
                    </li>
                    <li>
                        <a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a>
                    </li>
                    <li>
                        <a href="#!">Second Link</a>
                    </li>
                    <li>
                        <div className="divider"></div>
                    </li>
                    <li>
                        <a className="subheader">Subheader</a>
                    </li>
                    <li>
                        <a className="waves-effect" href="#!">Third Link With Waves</a>
                    </li>
                </ul>
            </React.Fragment>
        )
    }

    componentDidMount() {
        M.AutoInit()
    }
}