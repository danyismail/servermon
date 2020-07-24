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
import ServerAdd from './ServerAdd'
import UserEdit from './UserEdit'
import { Route, Switch } from "react-router-dom"
import { connect } from 'react-redux'

class defaultLayout extends React.Component {
    constructor(props) {
        super(props);
        const user = () => {
            axios.defaults.withCredentials = true;
            axios.get("http://dev.beacukai.go.id:9012/user")
                .then(response => {
                    this.state = { user: response.data.data.user_data.name }
                })
                .catch(error => {
                    if (!error.response) {
                        this.props.history.push('/login')
                    } else {
                        console.log(error.response.data.message)
                        this.props.history.push('/login')
                    }
                })
        }
        this.state = {
            user: user()
        }
        if (!user) {
            this.props.history.push('/login')
        }
    }

    componentDidMount() {
        this.props.setUserData()
        this.props.setServers()
        console.log(this.props)
    }

    render() {
        return (
            <div>
                <Header />
                <div className="app-main">
                    <div className="app-main__inner">
                        <div className="app-main__inner">
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/user" component={User} />
                                <Route exact path="/server" component={Server} />
                                <Route path="/server/add" component={ServerAdd} />
                                <Route path="/log" component={Log} />
                                <Route path="/config" component={Config} />
                                <Route path="/server/:id" component={DataServer} />
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

const mapStateToProps = (state) => {
    return {
        user_id: state.user_id,
        user_name: state.user_name,
        level: state.level,
        name: state.name,
        servers: state.servers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUserData: async () => {
            const { data } = await axios.get("http://dev.beacukai.go.id:9012/user", { withCredentials: true })
            dispatch({
                type: 'SET_USER_DATA',
                payload: data.data.user_data
            })
        },
        setServers: async () => {
            const { data } = await axios.get("http://dev.beacukai.go.id:9012/server", { withCredentials: true })
            dispatch({
                type: 'SET_SERVERS',
                payload: data.data.servers
            })
        }

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(defaultLayout)