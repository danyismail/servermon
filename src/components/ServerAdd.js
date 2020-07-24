import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as Constant from './Api'
import axios from 'axios'
import qs from 'qs'

class ServerAdd extends Component {
    constructor() {
        super()
        this.state = {
            ip: '',
            server_group: 0,
            master_category_id: 0,
            port: 0,
            label: '',
            type: 'website',
            pattern: '',
            pattern_online: 'yes',
            header_name: '',
            header_value: '',
            status: 'on',
            error: '',
            rtime: 0,
            last_online: new Date(),
            last_offline: '',
            last_offline_duration: '',
            last_check: new Date(),
            active: 'yes',
            email: 'yes',
            sms: 'yes',
            pushover: 'yes',
            telegram: 'yes',
            warning_threshold: 10,
            warning_threshold_counter: 0,
            timeout: 10,
            website_username: '',
            website_password: '',
            ssh_username: '',
            ssh_password: '',
            ssh_port: 0,
            path: '',
            category: [],
            master: []
        }
    }

    updateForm = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            console.log(this.state)
        })
    }

    getCategory = async () => {
        try {
            const result = await axios.get(Constant.BC_SERVER_CATEGORY, { withCredentials: true })
            this.setState({ category: result.data.data })
        } catch (e) {
            console.log(e.response.data.message)
        }
    }

    getMasterCategory = async () => {
        try {
            const result = await axios.get(Constant.BC_MASTER_CATEGORY, { withCredentials: true })
            this.setState({ master: result.data.data })
        } catch (e) {
            console.log(e.response.data.message)
        }
    }

    componentDidMount() {
        this.getCategory()
        this.getMasterCategory()
    }

    addServer = (serverData) => {
        delete serverData.category
        delete serverData.master
        console.log(serverData)
        axios.defaults.withCredentials = true
        axios({
            method: 'post',
            url: Constant.BC_SERVER_LIST,
            data: qs.stringify(serverData),
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
        })
            .then(result => {
                console.log(result, 'call func addServer')
                alert('Successfully add server')
                this.props.history.push('/server')
            })
            .catch(e => {
                alert(e.response.data.message)
            })
    }

    render() {
        let serverData = this.state
        return (
            <div class="col-md-12">
                <div class="main-card mb-3 card">
                    <div class="card-header">ADD SERVER
                        <div class="btn-actions-pane-right"></div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="main-card mb-3 card">
                                <div class="card-body">
                                    <div>
                                        <div class="input-group">
                                            <div class="input-group-prepend"><span class="input-group-text">Label</span></div>
                                            <input type="text" onChange={this.updateForm} id="user_name" name="label" value={this.state.label} class="form-control" />
                                        </div>
                                        <br />

                                        <div class="input-group">
                                            <div class="input-group-prepend"><span class="input-group-text"> Domain / IP</span></div>
                                            <input type="text" onChange={this.updateForm} id="name" name="ip" value={this.state.name} class="form-control" />
                                        </div>
                                        <br />

                                        <div class="input-group">
                                            <div class="input-group-prepend"><span class="input-group-text"> Port</span></div>
                                            <input type="text" onChange={this.updateForm} id="port" name="port" value={this.state.port} class="form-control" />
                                        </div>
                                        <br />

                                        <div class="input-group">
                                            <div class="input-group-prepend"><span class="input-group-text"> Master Category</span></div>
                                            <select name="master_category_id" value={this.state.master_category_id} className="form-control" onChange={this.updateForm}>
                                                {
                                                    serverData.master.map((item) => (
                                                        <option key={item.master_category_id} value={item.master_category_id}>{item.category_name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <br />

                                        <div class="input-group">
                                            <div class="input-group-prepend"><span class="input-group-text"> Group</span></div>
                                            <select name="server_group" value={this.state.server_group} className="form-control" onChange={this.updateForm}>
                                                {
                                                    serverData.category.map((item, key) => (
                                                        <option value={item.category_id}>{item.name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <br />

                                        <div class="input-group">
                                            <div class="input-group-prepend"><span class="input-group-text"> Type</span></div>
                                            <select name="type" value={this.state.type} className="form-control" onChange={this.updateForm}>
                                                <option value="ping">Ping </option>
                                                <option value="service">Service </option>
                                                <option value="website">Website </option>
                                            </select>
                                        </div>
                                        <br />

                                        <div class="input-group">
                                            <div class="input-group-prepend"><span class="input-group-text"> Warning Threshold</span></div>
                                            <input type="text" onChange={this.updateForm} id="name" name="warning_threshold" value={this.state.name} class="form-control" />
                                        </div>
                                        <br />

                                        <div class="input-group">
                                            <div class="input-group-prepend"><span class="input-group-text"> Monitoring</span></div>
                                            <select name="active" value={this.state.active} className="form-control" onChange={this.updateForm}>
                                                <option value="yes">Yes </option>
                                                <option value="no">No </option>
                                            </select>
                                        </div>
                                        <br />

                                        <div class="input-group">
                                            <div class="input-group-prepend"><span class="input-group-text"> Send Email</span></div>
                                            <select name="email" value={this.state.email} className="form-control" onChange={this.updateForm}>
                                                <option value="yes">Yes </option>
                                                <option value="no">No </option>
                                            </select>
                                        </div>
                                        <br />
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div className="col-md-6">
                            <div class="main-card mb-3 card">
                                <div class="card-body">

                                    <div class="input-group">
                                        <div class="input-group-prepend"><span class="input-group-text"> Send SMS</span></div>
                                        <select name="sms" value={this.state.sms} onChange={this.updateForm} className="form-control">
                                            <option value="yes">Yes </option>
                                            <option value="no">No </option>
                                        </select>
                                    </div>
                                    <br />


                                    <div class="input-group">
                                        <div class="input-group-prepend"><span class="input-group-text"> Pushover</span></div>
                                        <select name="pushover" value={this.state.pushover} onChange={this.updateForm} className="form-control">
                                            <option value="yes">Yes </option>
                                            <option value="no">No </option>
                                        </select>
                                    </div>
                                    <br />


                                    <div class="input-group">
                                        <div class="input-group-prepend"><span class="input-group-text"> Telegram</span></div>
                                        <select name="telegram" value={this.state.telegram} onChange={this.updateForm} className="form-control">
                                            <option value="yes">Yes </option>
                                            <option value="no">No </option>
                                        </select>
                                    </div>
                                    <br />


                                    <div class="input-group">
                                        <div class="input-group-prepend"><span class="input-group-text"> SSH Username</span></div>
                                        <input type="text" onChange={this.updateForm} id="name" name="ssh_username" value={this.state.name} class="form-control" />
                                    </div>
                                    <br />


                                    <div class="input-group">
                                        <div class="input-group-prepend"><span class="input-group-text"> SSH Port</span></div>
                                        <input type="text" onChange={this.updateForm} id="ssh_port" name="ssh_port" value={this.state.name} class="form-control" />
                                    </div>
                                    <br />


                                    <div class="input-group">
                                        <div class="input-group-prepend"><span class="input-group-text"> SSH Path</span></div>
                                        <input type="text" onChange={this.updateForm} id="path" name="path" value={this.state.name} class="form-control" />
                                    </div>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="d-block text-center card-footer">
                        <div class="card-body">
                            <button onClick={(e) => {
                                e.preventDefault()
                                this.addServer(serverData)
                            }} class="mb-2 mr-2 btn btn-success">Add </button>
                            <Link to="/" class="mb-2 mr-2 btn btn-secondary">Go Back</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ServerAdd