import React from 'react';
import axios from 'axios';
import * as API from './Api';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            userData: {},
            isLoading: true,
            param: 0
        }
    }

    getAllUsers = async () => {
        try {
            console.log("Masuk get All users")
            const { data } = await axios.get(API.BC_SERVER_ALL_USER)
            this.setState({ users: data.data.users })
            this.setState({ isLoading: false })
        } catch (error) {
            console.log(error)
        }
    }

    getUser = async () => {
        try {
            console.log("Masuk get 1 user")
            const { data } = await axios.get(API.BC_SERVER_CHECK_USER)
            this.setState({ userData: data.data.user_data })
            this.setState({ isLoading: false })
        } catch (error) {
            console.log(error)
        }
    }

    async componentDidMount() {
        console.log(this.props.level, "Sebelum")
        this.setState({ level: this.props.level })
        console.log(this.props.level, "Sesudah")
        this.props.level === 10 ? (await this.getAllUsers()) : (await this.getUser())
    }

    render() {
        const { isLoading, users, userData } = this.state
        console.log(this.props)
        if (isLoading) {
            return (
                <div className="lds-circle"><div className="lds-circle-here"></div></div>
            )
        }
        return (
            this.props.level === 10 ? (
                <div className="col-md-12">
                    <div className="main-card mb-3 card">
                        <div className="card-header">User
                                <div className="btn-actions-pane-right">
                                {
                                    this.props.level === 10 ? (<Link to="/user/add" className="mr-2 btn-icon btn-icon-only btn btn-outline-primary">Add User</Link>) : (<div></div>)
                                }
                            </div>
                        </div>
                        {/* {sureToDelete ?
                                <Alert color="info" isOpen={this.state.visible} toggle={this.onDismiss}>
                                    I am an alert and I can be dismissed!
                    </Alert>
                                : <></>
                            } */}
                        <div className="table-responsive">
                            <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th className="text-center"></th>
                                        <th className="text-center">Name</th>
                                        <th className="text-center">Level</th>
                                        <th className="text-center">Email</th>
                                        <th className="text-center">Mobile</th>
                                        <th className="text-center">Servers</th>
                                        <th className="text-center">Action </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((item, key) => (
                                        <tr>
                                            <td className="text-center text-muted">{key + 1}</td>
                                            <td className="">{item.user_name}</td>
                                            <td className="text-center">{item.level === 10 ? 'Superadmin' : 'Admin'}</td>
                                            <td className="text-center">{item.email}</td>
                                            <td className="text-center">{item.mobile} </td>
                                            <td className="text-left">
                                                {item.servers.map((each) => (
                                                    <p key={each.user_name}>{each.label}</p>
                                                ))}
                                            </td>

                                            <td className="text-center">
                                                <Link to={`/user_edit/${item.user_id}`} className="mr-2 btn-icon btn-icon-only btn btn-outline-danger">
                                                    <i className="fa fa-edit btn-icon-wrapper"> </i>
                                                </Link>
                                                <button onClick={() => { this.deleteUser(item.user_id) }} className="mr-2 btn-icon btn-icon-only btn btn-outline-primary">
                                                    <i className="fa fa-trash-alt btn-icon-wrapper"> </i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="d-block text-center card-footer">
                            {/* <button className="btn-wide btn btn-success">Save</button> */}
                        </div>
                    </div>
                </div>
            ) : (
                    //Kondisi user
                    <div className="col-md-12">
                        <div className="main-card mb-3 card">
                            <div className="card-header">User
                                <div className="btn-actions-pane-right">
                                    {
                                        this.props.level === 10 ? (<Link to="/user/add" className="mr-2 btn-icon btn-icon-only btn btn-outline-primary">Add User</Link>) : (<div></div>)
                                    }
                                </div>
                            </div>
                            {/* {sureToDelete ?
                                <Alert color="info" isOpen={this.state.visible} toggle={this.onDismiss}>
                                    I am an alert and I can be dismissed!
                    </Alert>
                                : <></>
                            } */}
                            <div className="table-responsive">
                                <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th className="text-center"></th>
                                            <th className="text-center">Name</th>
                                            <th className="text-center">Level</th>
                                            <th className="text-center">Email</th>
                                            <th className="text-center">Mobile</th>
                                            <th className="text-center">Servers</th>
                                            <th className="text-center">Action </th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="text-center text-muted">{}</td>
                                            <td className="">{userData.user_name}</td>
                                            <td className="text-center">{userData.level === 10 ? 'Superadmin' : 'Admin'}</td>
                                            <td className="text-center">{userData.email}</td>
                                            <td className="text-center">{userData.mobile} </td>
                                            <td className="text-left"></td>

                                            <td className="text-center">
                                                <Link to={`/user_edit/${userData.user_id}`} className="mr-2 btn-icon btn-icon-only btn btn-outline-danger">
                                                    <i className="fa fa-edit btn-icon-wrapper"> </i>
                                                </Link>
                                                <button onClick={() => { this.deleteUser(userData.user_id) }} className="mr-2 btn-icon btn-icon-only btn btn-outline-primary">
                                                    <i className="fa fa-trash-alt btn-icon-wrapper"> </i>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="d-block text-center card-footer">
                                {/* <button className="btn-wide btn btn-success">Save</button> */}
                            </div>
                        </div>
                    </div>
                ))
    }
}

const mapStateToProps = (state) => {
    return {
        level: state.level,
        user_id: state.user_id
    }
}

export default connect(mapStateToProps)(User)