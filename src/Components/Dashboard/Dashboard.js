import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../Project/ProjectList'

class Dashboard extends Component {
    render () {
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6"> 
                    {/* left side col for project list 12 col grid on medium size screens and bigger */}
                        <ProjectList />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        {/*  right side col notifications offset by 1 col */}
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard