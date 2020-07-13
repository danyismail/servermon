import React from 'react'
import axios from 'axios'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import User from './User'
import Server from './Server'
import Log from './Log.js'
import Config from './Config.js'
import DataServer from './DataServer'
import UserEdit from './UserEdit'
import { Route, Switch } from "react-router-dom";

export default class defaultLayout extends React.Component {
    constructor(props) {
        super(props);
        const user = () => {
            axios.defaults.withCredentials = true;

            axios.get("http://dev.beacukai.go.id:9012/user")
                .then(response => {
                    this.state = { user: response.data.data.user_data.name };
                    // console.log(this.state.user);
                })
                .catch(error => {
                    console.log(error);
                    this.props.history.push('/login')
                })
        }
        this.state = {
            user: user()
        }
        if (!user) {
            this.props.history.push('/login')
        }
    }

    render() {
        return (
            <div>
                <Header user={"Super Admin"} />
                <div className="app-main">
                    <div className="app-main__inner">
                        <div className="app-main__inner">
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/user" component={User} />
                                <Route path="/server" component={Server} />
                                <Route path="/log" component={Log} />
                                <Route path="/config" component={Config} />
                                <Route path="/detail_server/:id" component={DataServer} />
                                <Route path="/user_edit/:id" component={UserEdit} />
                            </Switch>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}