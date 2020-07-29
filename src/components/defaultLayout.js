import React from 'react'
import axios from 'axios'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import User from './User'
import UserAdd from './UserAdd'
import Server from './Server'
import Log from './Log.js'
import Config from './Config.js'
import DataServer from './DataServer'
import ServerAdd from './ServerAdd'
import UserEdit from './UserEdit'
import { Route, Switch } from "react-router-dom"
import { connect } from 'react-redux'
import AccountEdit from './AccountEdit'

class defaultLayout extends React.Component {
    checkUser = async () => {
        try {
            axios.defaults.withCredentials = true
            const { data } = await axios.get("http://dev.beacukai.go.id:9012/user")
            this.props.setUserData(data.data.user_data)
            this.props.setServers()
            console.log(this.props)
        } catch (error) {
            if (!error.response) {
                // console.log(error.response.data.message)
                document.location = '/login'
            } else {
                console.log(error.response.data.message)
                alert(error.response.data.message)
                document.location = '/login'
            }
        }
    }

    componentDidMount() {
        this.checkUser()
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
                                <Route exact path="/user" component={User} />
                                <Route path="/user/add" component={UserAdd} />
                                <Route exact path="/server" component={Server} />
                                <Route path="/server/add" component={ServerAdd} />
                                <Route path="/log" component={Log} />
                                <Route path="/config" component={Config} />
                                <Route path="/server/:id" component={DataServer} />
                                <Route path="/user_edit/:id" component={UserEdit} />
                                <Route exact path="/account_edit/:id" component={AccountEdit} />
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
        setUserData: (userData) => {
            dispatch({
                type: 'SET_USER_DATA',
                payload: userData
            })
        },
        setServers: async () => {
            console.log('set server di default kepanggil')
            const { data } = await axios.get("http://dev.beacukai.go.id:9012/server", { withCredentials: true })
            dispatch({
                type: 'SET_SERVERS',
                payload: data.data.servers
            })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(defaultLayout)