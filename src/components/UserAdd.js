import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as API from './Api'
import axios from 'axios'
// import Example from './MultiSelect'
// import Select from 'react-select'
import MultiSelect from '@khanacademy/react-multi-select'



class AddUser extends Component {
    constructor(props) {
        super()
        this.state = {
            user_name: '',
            name: '',
            email: '',
            password: '',
            level: 0,
            mobile: 0,
            pushover_key: '',
            pushover_device: '',
            telegram_id: 0,
            server_list: [],
            selected: [],
            servers: []
        }
    }

    getServerList = async () => {
        try {
            const response = await axios.get(API.BC_SERVER_LIST, { withCredentials: true })
            this.setState({ servers: response.data.data.servers })
        } catch (error) {
            alert(error.response.data.message)
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

    setLevel10 = (e) => {
        console.log(10)
        this.setState({ level: 10, role: 'admin' })
    }

    setLevel20 = (e) => {
        console.log(20)
        this.setState({ level: 20, role: 'administrator' })
    }

    addUser = (userData) => {
        console.log(userData)
        let payload = userData
        delete payload.selected
        delete payload.servers
        console.log(payload)
        axios.defaults.withCredentials = true
        axios.defaults.headers = { "Access-Control-Allow-Origin": "*" }
        axios.post(API.BC_ADD_USER, payload)
            .then(res => {
                alert('Successfully add user')
                this.props.history.push('/')
                console.log(res, 'call func addUser')
            })
            .catch(e => {
                console.log(e.response)
                alert('Failed to addUser')
            })
    }

    componentDidMount() {
        this.getServerList()
    }

    render() {
        const userData = this.state
        delete userData.role
        const options = this.state.servers
        let objServer = options.map(s => ({
            value: s,
            label: s.label,
        }));
        const { selected } = this.state
        return (
            <div className="col-md-12">
                <div className="main-card mb-3 card">
                    <div className="card-header">User Detail
                        <div className="btn-actions-pane-right"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="main-card mb-3 card">
                                <div className="card-body">
                                    <h5 className="card-title">Username</h5>
                                    <div>
                                        <div className="input-group">
                                            <div className="input-group-prepend"><span className="input-group-text">Username</span></div>
                                            <input type="text" onChange={this.updateForm} id="user_name" name="user_name" value={this.state.user_name} className="form-control" />
                                        </div>
                                        <br />
                                        <h5 className="card-title">Name</h5>

                                        <div className="input-group">
                                            <div className="input-group-prepend"><span className="input-group-text"> Name</span></div>
                                            <input type="text" onChange={this.updateForm} id="name" name="name" value={this.state.name} className="form-control" />
                                        </div>
                                        <br />
                                        <h5 className="card-title">Level</h5>

                                        {/* <div className="input-group">
                                            <div className="input-group-prepend">
                                                <button type="button" className="dropdown-toggle btn btn-secondary">Level</button>
                                                <div className="dropdown-menu">
                                                    <h6 className="dropdown-header">Level</h6>
                                                    <button onClick={this.setLevel10} type="button" className="dropdown-item">Yes</button>
                                                    <button onClick={this.setLevel20} type="button" className="dropdown-item">No</button>
                                                    <div className="dropdown-divider"></div>
                                                </div>
                                            </div>
                                            <input type="text" id="level" name="level" value={this.state.role} className="form-control" />
                                        </div> */}

                                        <div className="input-group">
                                            <div className="input-group-prepend"><span className="input-group-text"> Level</span></div>
                                            <select name="level" value={this.state.level} onChange={this.updateForm} className="form-control">
                                                <option value="10">Administrators </option>
                                                <option value="20">User </option>
                                            </select>
                                        </div>
                                        <br />


                                        <br />

                                        <p className="help-block"> <b> Administrators</b> have full access: they can manage servers, users and edit the global configuration.
                                            <br /> <b>Users</b> can only view and run the updater for the servers that have been assigned to them.
                                        </p>

                                        <br />
                                    </div>
                                </div>
                            </div>

                            <div className="main-card mb-3 card">
                                <div className="card-body">
                                    <h5 className="card-title">Monitoring</h5>

                                    <div className="input-group">
                                        <div className="input-group-prepend"><span className="input-group-text">Pushover Key</span></div>
                                        <input type="text" onChange={this.updateForm} id="pushover_key" name="pushover_key"
                                            value={this.state.pushover_key} className="form-control" />
                                    </div>
                                    <br />
                                    <div className="input-group">
                                        <div className="input-group-prepend"><span className="input-group-text">Pushover Device</span></div>
                                        <input type="text" onChange={this.updateForm} id="pushover_key" name="pushover_device" value={this.state.pushover_device} className="form-control" />
                                    </div>
                                    <br />
                                    <div className="input-group">
                                        <div className="input-group-prepend"><span
                                            className="input-group-text">Telegram</span></div>
                                        <input type="text" onChange={this.updateForm} id="name" name="telegram_id"
                                            value={this.state.telegram_id} className="form-control" />
                                    </div>
                                    <br />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="main-card mb-3 card">
                                <div className="card-body">
                                    <h5 className="card-title">Password</h5>
                                    <div>

                                        <div className="input-group">
                                            <div className="input-group-prepend"><span className="input-group-text">password</span></div>
                                            <input type="password" onChange={this.updateForm} id="password" name="password" placeholder="Leave blank to keep unchanged" className="form-control" />
                                        </div>
                                        <br />
                                        <h5 className="card-title">Password Repeat</h5>

                                        <div className="input-group">
                                            <div className="input-group-prepend"><span
                                                className="input-group-text">password Repeat</span></div>
                                            <input type="password" onChange={this.updateForm} id="password" name="password" placeholder="Leave blank to keep unchanged" className="form-control" />
                                        </div> Masukkan Ulang Password
                                        <br />
                                        <br />
                                        <h5 className="card-title">Email</h5>

                                        <div className="input-group"><input type="email" onChange={this.updateForm} id="email" name="email" value={this.state.email} className="form-control" />
                                            <div className="input-group-append"><span className="input-group-text"></span></div>
                                        </div>
                                        <br />
                                        <h5 className="card-title">Mobile</h5>

                                        <div className="input-group">
                                            <div className="input-group-prepend"><span
                                                className="input-group-text">Mobile</span></div>
                                            <input type="text" onChange={this.updateForm} id="number" name="mobile"
                                                placeholder="Input your mobile phone" className="form-control" />
                                        </div>
                                        <br />
                                    </div>
                                </div>
                            </div>

                            <div className="main-card mb-3 card">
                                <div className="card-body">
                                    <h5 className="card-title">Pilih Server</h5>
                                    <div className="control-group">
                                        <div className="controls">
                                            {/* <select className="multiselect" value={this.state.server} multiple="multiple"
                                                name="servers">
                                                {
                                                    this.state.server_list.map((item, key) => (
                                                        <option value={item.server_id} onClick={this.addServer}>{item.label}</option>
                                                    ))
                                                }
                                            </select > */}
                                            {/* <Example data={this.state.server_list} /> */}
                                            {/* <Select
                                                value={this.state.value}
                                                isMulti
                                                name="servers"
                                                options={options}
                                                className="basic-multi-select"
                                                classNamePrefix="select"
                                                onClick={e => { console.log(e) }}
                                            // defaultMenuIsOpen={true}
                                            /> */}
                                            {/* <div className="btn-group" >
                                                <button type="button" className="multiselect dropdown-toggle btn btn-default"> selected <b className="caret"></b></button>
                                            </div> */}
                                            <MultiSelect
                                                options={objServer}
                                                selected={selected}
                                                onSelectedChanged={selected => this.setState({ selected }, () => {
                                                    let serverList = this.state.selected
                                                    const newArray = serverList.map(({
                                                        active,
                                                        email,
                                                        error,
                                                        header_name,
                                                        header_value,
                                                        ip,
                                                        label,
                                                        last_check,
                                                        last_offline,
                                                        last_offline_duration,
                                                        last_online,
                                                        path, pattern,
                                                        pattern_online,
                                                        port, pushover,
                                                        rtime,
                                                        server_group,
                                                        sms,
                                                        ssh_password,
                                                        ssh_port,
                                                        ssh_username,
                                                        status,
                                                        telegram,
                                                        timeout,
                                                        type,
                                                        warning_threshold,
                                                        warning_threshold_counter,
                                                        website_password,
                                                        website_username,
                                                        master_category_id,
                                                        ...server_id }) => server_id)
                                                    console.log(newArray)
                                                    this.setState({ server_list: newArray })
                                                })}
                                            />
                                            {/* <button onClick={e => {
                                                e.preventDefault()
                                                let serverList = this.state.selected
                                                const newArray = serverList.map(({
                                                    active,
                                                    email,
                                                    error,
                                                    header_name,
                                                    header_value,
                                                    ip,
                                                    label,
                                                    last_check,
                                                    last_offline,
                                                    last_offline_duration,
                                                    last_online,
                                                    path, pattern,
                                                    pattern_online,
                                                    port, pushover,
                                                    rtime,
                                                    server_group,
                                                    sms,
                                                    ssh_password,
                                                    ssh_port,
                                                    ssh_username,
                                                    status,
                                                    telegram,
                                                    timeout,
                                                    type,
                                                    warning_threshold,
                                                    warning_threshold_counter,
                                                    website_password,
                                                    website_username,
                                                    ...server_id }) => server_id)
                                                console.log(newArray)
                                            }}>Klik</button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="d-block text-center card-footer">
                        <div className="card-body">
                            <button onClick={(e) => {
                                e.preventDefault()
                                this.addUser(userData)
                            }} className="mb-2 mr-2 btn btn-success">Add </button>
                            <Link to="/" className="mb-2 mr-2 btn btn-secondary">Go Back</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddUser