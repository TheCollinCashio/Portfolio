import React from 'react'
import M from 'materialize-css'

export default class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentDateTime: new Date()
        }
    }

    render() {
        let graduationDate = new Date(2019, 5, 18)
        let graduated = this.state.currentDateTime > graduationDate

        let daysBeforeGraduation = 0
        let hoursBeforeGraduation = 0
        let minutesBeforeGraduation = 0
        let secondsBeforeGraduation = 0

        if (!graduated) {
            let delta = Math.abs(graduationDate - this.state.currentDateTime) / 1000;

            daysBeforeGraduation = Math.floor(delta / 86400)
            delta -= daysBeforeGraduation * 86400

            hoursBeforeGraduation = Math.floor(delta / 3600) % 24
            delta -= hoursBeforeGraduation * 3600

            minutesBeforeGraduation = Math.floor(delta / 60) % 60
            delta -= minutesBeforeGraduation * 60

            secondsBeforeGraduation = Math.floor(delta % 60)
        }

        return (
            <div className="row">
                <div className="col s12 m9 l10">
                    <div id="education" className="section scrollspy">
                        <div className="col s12 m12 l12">
                            <div className="card">
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img className="activator" src="/Client/src/images/Southeastern_Dome.jpg" />
                                </div>
                                <div className="card-content">
                                    <span className="card-title activator grey-text text-darken-4">Southeastern Louisiana University<i className="material-icons right">more_vert</i></span>
                                    <p>
                                        I will be graduating in <b>{ daysBeforeGraduation }</b> days, <b>{ hoursBeforeGraduation }</b> hours, <b>{ minutesBeforeGraduation }</b> minutes, and <b>{ secondsBeforeGraduation }</b> seconds. 
                                        I could go on and on about this university because it is the best (as far as I know). I learned so much from this school and hope to give back to this university some day.
                                    </p>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">Southeastern Louisiana University<i className="material-icons right">close</i></span>
                                    <p>{ graduated ? 'I graduated from Southeastern Louisiana University with a 3.6 grade point average. I also was able to obtain the presidents list at least once each school year.' : 'I will be graduating from Southeastern Louisiana University this semester with a 3.6 grade point average. I was able to obtain the presidents list at least once each school year.' }</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="experience" className="section scrollspy row">
                        {/* LIME Industry LLC */}
                        <div className="col s12 m6 l6">
                            <div className="card">
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img className="activator" src="/Client/src/images/LIME.png" />
                                </div>
                                <div className="card-content">
                                    <span className="card-title activator grey-text text-darken-4">LIME Industry LLC<i className="material-icons right">more_vert</i></span>
                                    <p>
                                        I am the lead frontend/backend developer for LIME Industry LLC. Click <a href="https://www.limeapplications.com">here</a> to get some information about their web application.
                                    </p>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">LIME Industry LLC<i className="material-icons right">close</i></span>
                                    <p>Working for this company, I learned several practical web application skills such as React, Node JS, SocketIO, Webpack, git, and materialize. I also had a great opportunity to tone my leadership skills.</p>
                                </div>
                            </div>
                        </div>

                        {/* FarmBureau Louisiana */}
                        <div className="col s12 m6 l6">
                            <div className="card">
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img className="activator" src="/Client/src/images/FarmBureau.png" />
                                </div>
                                <div className="card-content">
                                    <span className="card-title activator grey-text text-darken-4">Louisiana Farm Bureau<i className="material-icons right">more_vert</i></span>
                                    <p>
                                        I was a Mainframe Programmer/Analyst at this company. I was able to learn some useful skills on the mainframe that can be applied to Unix/Linux terminals. I also got very familiar with command prompt working for this company.
                                    </p>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">LIME Industry LLC<i className="material-icons right">close</i></span>
                                    <p>Working for this company, I learned several practical web application skills such as React, Node JS, SocketIO, Webpack, git, and materialize. I also had a great opportunity to tone my leadership skills.</p>
                                </div>
                            </div>
                        </div>

                        {/* Blue Cross Blue Shield Louisiana */}
                        <div className="col s12 m6 l6">
                            <div className="card">
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img className="activator" src="/Client/src/images/BlueCrossBlueShield.png" />
                                </div>
                                <div className="card-content">
                                    <span className="card-title activator grey-text text-darken-4">Blue Cross Blue Sheild of Louisiana  <a className="btn-floting red"><i className="material-icons right">more_vert</i></a></span>
                                    <p>
                                        I was a Mainframe Programmer/Analyst at this company. I was able to learn some useful skills on the mainframe that can be applied to Unix/Linux terminals. I also got very familiar with command prompt working for this company.
                                    </p>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">LIME Industry LLC<i className="material-icons right">close</i></span>
                                    <p>Working for this company, I learned several practical web application skills such as React, Node JS, SocketIO, Webpack, git, and materialize. I also had a great opportunity to tone my leadership skills.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="projects" className="section scrollspy">
                        This is my projects
                    </div>
                </div>
                { this.getScrollSpy() }
            </div>
        )
    }

    getScrollSpy() {
        return (
            <div className="col hide-on-small-only m3 l2">
                <ul className="section table-of-contents pinned">
                    <li><a href="#education">Education</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                </ul>
            </div>
        )
    }

    componentDidMount() {
        let elems = document.querySelectorAll('.scrollspy')
        M.ScrollSpy.init(elems, {})

        setInterval(() => {
            this.setState({
                currentDateTime: new Date()
            })
        }, 1000)
    }
}