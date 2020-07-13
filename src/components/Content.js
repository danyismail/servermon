import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Switch } from "react-router-dom";
import Home from './Home'
import User from './User'
import Server from './Server'
import Log from './Log.js'
import Config from './Config.js'

export default class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app-main">
                <div className="app-main__inner">
                    <div className="app-main__inner">
                        <Switch>
                            <Route exact path="/home" component={Home} />
                            <Route exact path="/user" component={User} />
                            <Route exact path="/server" component={Server} />
                            <Route exact path="/log" component={Log} />
                            <Route exact path="/config" component={Config} />
                        </Switch>
                    </div>
                </div>
            </div >
        )
    }
}