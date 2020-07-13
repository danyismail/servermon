import React from 'react';
import axios from 'axios';
import { api } from './Constants';
import { Link } from 'react-router-dom';

export default class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            isLoading: false
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        axios.defaults.withCredentials = true;
        axios.get(api() + '/get-all-users')
            .then(response => {
                console.log(response.data.data.users);
                this.setState({ user: response.data.data.users, isLoading: false });
            })
    }



    render() {
        const { isLoading } = this.state;
        if (isLoading) {
            return (
                <div className="lds-circle"><div className="lds-circle-here"></div></div>
            )
        }
        return (
            <div className="col-md-12">
                <div className="main-card mb-3 card">
                    <div className="card-header">Server
                                        <div className="btn-actions-pane-right">

                        </div>
                    </div>
                    <div className="table-responsive">
                        <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                            <thead>
                                <tr>
                                    <th className="text-center">User</th>
                                    <th className="text-center">Name</th>
                                    <th className="text-center">Level</th>
                                    <th className="text-center">Email</th>
                                    <th className="text-center">Mobile</th>
                                    <th className="text-center">Servers</th>
                                    <th className="text-center">Action </th>

                                </tr>
                            </thead>

                            <tbody>
                                {this.state.user.map(users =>
                                    <tr>
                                        <td className="text-center text-muted text-capitalize">{users.user_name}</td>
                                        <td className="text-center">{users.name}</td>
                                        <td className="text-center">{users.level}</td>
                                        <td className="text-center">{users.email}</td>
                                        <td className="text-center">{users.mobile} </td>
                                        <td className="text-center">
                                            {users.servers.map(server =>
                                                <p>{server.label}</p>
                                            )}
                                        </td>

                                        <td className="text-center">
                                            <button className="mr-2 btn-icon btn-icon-only btn btn-outline-primary"><Link to={`/user_edit/${users.user_id}`}
                                                className="fa fa-edit btn-icon-wrapper">
                                            </Link></button>
                                            <button type="button"
                                                className="mr-2 btn-icon btn-icon-only btn btn-outline-danger"
                                                data-toggle="modal" data-target="#exampleModal"><i
                                                    className="fa fa-trash-alt btn-icon-wrapper"> </i></button>
                                        </td>
                                        <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel"
                                            aria-hidden="true">
                                            <div className="modal-dialog" role="document">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalLabel">Delete</h5>
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">×</span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <p className="mb-0">Yakin Ingin Menghapusnya.</p>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cencel</button>
                                                        <button type="button" className="btn btn-primary">Yes</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </tr>
                                )}
                                {/* <tr>

                                        <td className="text-center text-muted">Admin</td>
                                        <td className="text-center">No Name</td>
                                        <td className="text-center">User</td>
                                        <td className="text-center">demo@yourmail.com</td>
                                        <td className="text-center"> </td>
                                        <td className="text-center">

                                            BAR_KIR_BESAR_62<br /> BAR_KIR_BESAR_74<br /> BAR_KIR_BESAR_62_1<br />
                                                        BAR_KIR_BESAR_62_2<br /> BAR_KIR_BESAR_62_3<br /> BAR_KIR_BESAR_74_1<br />
                                                            BAR_KIR_BESAR_2<br /> BAR_KIR_BESAR_74_2<br /> BAR KIR MADYA 78_3<br />
                                        </td>

                                        <td className="text-center">

                                            <button className="mr-2 btn-icon btn-icon-only btn btn-outline-primary"><a
                                                className="fa fa-edit btn-icon-wrapper" href="dataserver.html">
                                            </a></button>
                                            <button type="button"
                                                className="mr-2 btn-icon btn-icon-only btn btn-outline-danger"
                                                data-toggle="modal" data-target="#exampleModal"><i
                                                    className="fa fa-trash-alt btn-icon-wrapper"> </i></button>
                                        </td>
                                    </tr> */}

                            </tbody>
                        </table>
                    </div>
                    <div className="d-block text-center card-footer">

                        <button className="btn-wide btn btn-success">Save</button>
                    </div>
                </div>
            </div>
        );
    }
}