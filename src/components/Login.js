import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { api, setCookie } from './Constants';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { username, password } = this.state;
        axios.defaults.withCredentials = true;
        axios.post(
            api() + "/login",
            {
                user_name: username,
                password: password
            }
        )
            .then(response => {
                this.session_id = response.data.data.session_id;
                this.url = api();
                this.authenticated = true;
                setCookie('userSessionId', this.session_id, 1);
                document.location = "/";
            })
            .catch(error => {
                console.log(error.response)
                if (error.response.status === 400) {
                    alert("Incorrect username or password");
                }
            })
    }

    render() {
        return (
            <div className="app-container app-theme-white body-tabs-shadow">
                <div className="app-container">
                    <div className="h-100 bg-plum-plate bg-animation">
                        <div className="d-flex h-100 justify-content-center align-items-center">
                            <div className="mx-auto app-login-box col-md-8">
                                <div className="app-logo-inverse mx-auto mb-3"></div>
                                <div className="modal-dialog w-100 mx-auto">
                                    <div className="modal-content">
                                        <div className="modal-body">
                                            <div className="h5 modal-title text-center">
                                                <h4 className="mt-2">
                                                    <div>Welcome back, {this.state.user}</div>
                                                    <span>Please sign in to your account below.</span>
                                                </h4>
                                            </div>
                                            <form className="" onSubmit={this.handleSubmit}>
                                                <div className="form-row">
                                                    <div className="col-md-12">
                                                        <div className="position-relative form-group"><input name="username"
                                                            id="exampleUsername" placeholder="Username here..." value={this.state.username} onChange={this.handleChange} type="text"
                                                            className="form-control" /></div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="position-relative form-group"><input name="password"
                                                            id="examplePassword" placeholder="Password here..."
                                                            value={this.state.password} onChange={this.handleChange} type="password" className="form-control" /></div>
                                                    </div>
                                                </div>

                                                <div className="position-relative form-check"><input name="check" id="exampleCheck"
                                                    type="checkbox" className="form-check-input" /><label for="exampleCheck"
                                                        className="form-check-label">Keep me logged in</label></div>

                                                <div className="divider"></div>
                                                <h6 className="mb-0">No account? <a href="javascript:void(0);" className="text-primary">Sign
                                            up now</a></h6>


                                                <div className="modal-footer clearfix">
                                                    <div className="float-left"><a href="javascript:void(0);" className="btn-lg btn btn-link">Recover
                                            Password</a></div>
                                                    <div className="float-right"><button type="submit" className="btn btn-primary btn-lg">
                                                        Login
                                            to Dashboard</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center text-white opacity-8 mt-3">Powered by © CEISA 4.0 Server Monitoring 2020
                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );


    }
}