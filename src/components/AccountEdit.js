import React from "react";
import axios from 'axios'
import { api } from './Constants'
import * as Constant from './Api'
import { Link } from 'react-router-dom';

class AccountEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: 0,
            isLoading: false,
            user_name: '',
            name: '',
            level: 0,
            mobile: 0,
            pushover_key: '',
            pushover_device: '',
            telegram_id: '',
            email: ''
        }
    }

    async componentDidMount() {
        console.log(this.state.detail)
        this.setState({ isLoading: true });
        const { match: { params } } = this.props;
        this.setState({ user_id: parseInt(params.id) })
        axios.defaults.withCredentials = true;
        await axios.get(api() + '/user?userId=' + params.id)
            .then(response => {
                console.log(response.data.data);
                this.setState({
                    user_name: response.data.data.user_data.user_name,
                    name: response.data.data.user_data.name,
                    mobile: response.data.data.user_data.mobile,
                    level: response.data.data.user_data.level,
                    pushover_key: response.data.data.user_data.pushover_key,
                    pushover_device: response.data.data.user_data.pushover_device,
                    telegram_id: response.data.data.user_data.telegram_id,
                    email: response.data.data.user_data.email,
                    isLoading: false
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    updateForm = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            console.log(this.state)
        })
    }

    putUser = (userData) => {
        delete userData.isLoading
        console.log(userData, "Body will be sent")
        axios.defaults.withCredentials = true
        axios({
            method: 'PUT',
            url: `${Constant.BC_SERVER_CHECK_USER}`,
            // data: qs.stringify(userData),
            data: userData,
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(result => {
                console.log(result, 'call func putUser')
                alert(result.data)
                console.log(result.data)
                this.props.history.push('/user')
            })
            .catch(e => {
                console.log(e, "error dari put")
                // alert(e.response.data.message)
            })
    }

    render() {
        const { isLoading } = this.state
        let userData = this.state
        if (isLoading) {
            return (
                <div className="lds-circle"><div className="lds-circle-here"></div></div>
            )
        }
        return (
            <div className="col-md-12">
                <div className="main-card mb-3 card">
                    <div className="card-header">Account Detail
                                <div className="btn-actions-pane-right">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="main-card mb-3 card">
                                <div className="card-body">
                                    <h5 className="card-title">Username</h5>
                                    <div>
                                        <div className="input-group">
                                            <div className="input-group-prepend"><span
                                                className="input-group-text">Username </span></div>
                                            <input type="username" id="user_name" name="user_name" value={this.state.user_name}
                                                className="form-control" onChange={this.updateForm} />
                                        </div>
                                        <br />

                                        <h5 className="card-title">Name </h5>
                                        <div className="input-group">
                                            <div className="input-group-prepend"><span
                                                className="input-group-text">Name</span></div>
                                            <input type="text" id="name" name="name" value={this.state.name}
                                                className="form-control" onChange={this.updateForm} />
                                        </div>
                                        <br />

                                        <h5 className="card-title">Level </h5>
                                        <div className="input-group">
                                            <div className="input-group-prepend"><span
                                                className="input-group-text">Level </span></div>
                                            <input type="text" id="name" name="level" value={this.state.level === 10 ? 'Administrator' : 'User'}
                                                className="form-control" onChange={this.updateForm} disabled />
                                        </div>
                                        <br />
                                    </div>
                                </div>
                            </div>
                            <div className="main-card mb-3 card">
                                <div className="card-body">
                                    <h5 className="card-title">Monitoring</h5>

                                    <div className="input-group">
                                        <div className="input-group-prepend"><span className="input-group-text">Pushover
                                                        Key</span></div>
                                        <input type="text" id="name" name="pushover_key"
                                            value={this.state.pushover_key} className="form-control" onChange={this.updateForm} />
                                    </div>
                                    <br />
                                    <div className="input-group">
                                        <div className="input-group-prepend"><span className="input-group-text">Pushover
                                                        Device</span></div>
                                        <input type="text" id="name" name="pushover_device" value={this.state.pushover_device}
                                            className="form-control" onChange={this.updateForm} />
                                    </div>
                                    <br />
                                    <div className="input-group">
                                        <div className="input-group-prepend"><span
                                            className="input-group-text">Telegram </span></div>
                                        <input type="text" id="telegram_id" name="telegram_id"
                                            value={this.state.telegram_id} className="form-control" onChange={this.updateForm} />
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
                                            <div className="input-group-prepend"><span
                                                className="input-group-text">password</span></div>
                                            <input type="password" id="password" name="password"
                                                placeholder="Leave blank to keep unchanged"
                                                className="form-control" onChange={this.updateForm} />
                                        </div>
                                        <br />
                                        <h5 className="card-title">Password Repeat</h5>

                                        <div className="input-group">
                                            <div className="input-group-prepend"><span
                                                className="input-group-text">password Repeat</span></div>
                                            <input type="password" id="password" name="password"
                                                placeholder="Leave blank to keep unchanged"
                                                className="form-control" onChange={this.updateForm} />
                                        </div>

                                    Masukkan Ulang Password
                                    <br />
                                        <br />
                                        <h5 className="card-title">Email</h5>

                                        <div className="input-group">
                                            <div className="input-group-append"><span className="input-group-text">Email </span></div>
                                            <input type="email" id="email" name="email"
                                                value={this.state.email} className="form-control" onChange={this.updateForm} />
                                        </div>
                                        <br />
                                        <h5 className="card-title">Mobile</h5>

                                        <div className="input-group">
                                            <div className="input-group-prepend"><span
                                                className="input-group-text">Mobile</span></div>
                                            <input type="text" id="number" name="mobile" value={this.state.mobile}
                                                className="form-control" onChange={this.updateForm} />
                                        </div>
                                        <br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-block text-center card-footer">
                        <div className="card-body">
                            <button onClick={(e) => {
                                e.preventDefault()
                                this.putUser(userData)
                            }} className="mb-2 mr-2 btn btn-success">Update
                                    </button>
                            <Link to={'/user'} className="mb-2 mr-2 btn btn-secondary">Go Back
                                    </Link>
                        </div>
                    </div>
                </div >
            </div >
        )
    }

}

export default AccountEdit