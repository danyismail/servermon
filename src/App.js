import React from 'react'
import Login from './components/Login.js'
import defaultLayout from './components/defaultLayout.js'
import { Switch, Route } from 'react-router-dom';

export default function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={defaultLayout} />
                <Route path="/login" component={Login} />
                <Route path="/user" component={defaultLayout} />
                <Route path="/server" component={defaultLayout} />
                <Route path="/log" component={defaultLayout} />
                <Route path="/config" component={defaultLayout} />
                <Route path="/detail_server/:id" component={defaultLayout} />
                <Route path="/user_edit/:id" component={defaultLayout} />
                <Route path="/account_edit/:id" component={defaultLayout} />
            </Switch>
        </div>
    )
}