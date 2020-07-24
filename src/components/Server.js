import React from 'react';
import axios from 'axios';
import { api, formatDate, formatTime } from './Constants';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { Pagination } from 'antd';
import * as Constant from './Api'
import { connect } from 'react-redux';
// import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
class Server extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jaringan: [],
            isLoading: false,
            showModal: false,
            serverGroup: '',
            page: 1,
            limit: 10,
            object: [],
            category: [],
            currentGroup: 0
        }
    }

    onChange = async (pageNumber, pageSize) => {
        //cek currrent group first
        console.log(pageNumber, pageSize)
        this.state.currentGroup === 0 ? (
            await axios.get(api() + '/server', {
                params: {
                    serverGroup: this.state.serverGroup,
                    page: pageNumber,
                    limit: pageSize
                }
            })
                .then(response => {
                    console.log(response.data.data);
                    this.setState({ jaringan: response.data.data.servers, object: response.data.data, isLoading: false });
                })
                .catch(error => {
                    console.log(error);
                }
                )) : (
                axios.get(api() + '/server', {
                    params: {
                        serverGroup: this.state.currentGroup,
                        page: pageNumber,
                        limit: pageSize
                    }
                })
                    .then(response => {
                        console.log(response.data.data);
                        this.setState({ jaringan: response.data.data.servers, object: response.data.data, isLoading: false });
                    })
                    .catch(error => {
                        console.log(error);
                    }))
    }

    onChangeCategory = () => {
        console.log(this.state.currentGroup, "from onChangeCategory")
        this.state.currentGroup === 0 ?
            axios.get(api() + '/server', {
                params: {
                    serverGroup: this.state.serverGroup,
                    page: this.state.page,
                    limit: this.state.limit
                }
            })
                .then(response => {
                    console.log("masuk get all")
                    console.log(response.data.data);
                    this.setState({ jaringan: response.data.data.servers, object: response.data.data, isLoading: false });
                })
                .catch(error => {
                    console.log(error);
                }
                ) :
            axios.get(api() + '/server', {
                params: {
                    serverGroup: this.state.currentGroup,
                    page: this.state.page,
                    limit: this.state.limit
                }
            })
                .then(response => {
                    console.log(response.data.data);
                    this.setState({ jaringan: response.data.data.servers, object: response.data.data, isLoading: false });
                })
                .catch(error => {
                    console.log(error);
                })
    }

    getCategory = async () => {
        try {
            const result = await axios.get(Constant.BC_SERVER_CATEGORY, { withCredentials: true })
            this.setState({ category: result.data.data })
        } catch (error) {
            console.log(error.response.data.message)
        }
    }

    handleChange = (e) => {
        e.preventDefault()
        console.log(e.target.name, e.target.value)
        this.setState({ currentGroup: parseInt(e.target.value) }, () => { this.onChangeCategory() })
    }

    showTotal = (total) => {
        return `Total ${total} servers`;
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        this.getCategory()
        axios.defaults.withCredentials = true;
        axios.get(api() + '/server', {
            params: {
                serverGroup: this.state.serverGroup,
                page: this.state.page,
                limit: this.state.limit
            }
        })
            .then(response => {
                this.setState({ jaringan: response.data.data.servers, object: response.data.data, isLoading: false });
                console.log(this.state.object);
            })
            .catch(error => {
                if (!error.response) {
                    alert('Network error')
                } else {
                    console.log(error.response.data.message)
                    document.location = '/login'
                }
            })
    }

    handleFilter = nama_tipe => {
        this.setState({ isLoading: true });
        const { jaringan } = this.state;
        const result = _.filter(jaringan, (o) => _.includes(o, nama_tipe));
        this.setState({ jaringan: result, isLoading: false });
    }

    renderModalClose() {
        this.setState({ showModal: false })
        return (
            <>
                <div className="modal fade" id="" tabIndex={-1} role="dialog" aria-labelledby={`#exampleModalLabel`} aria-modal="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id={`exampleModalLabel`}>Delete </h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p className="mb-0">Yakin Ingin Menghapusnya.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-primary">Yes</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="jvectormap-tip"></div>

            </>
        )
    }

    renderModal(server_id) {

        console.log(this.state.showModal);
        console.log(server_id);
        return (
            <>
                {/* <Modal isOpen={true} toggle={true} fade={true}>
                <ModalHeader toggle={true}>Modal title</ModalHeader>
                <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={() => this.setState({showModal:false})}>Do Something</Button>{' '}
                <Button color="secondary" onClick={() => this.setState({showModal:false})}>Cancel</Button>
                </ModalFooter>
            </Modal> */}
                <div className="modal fade show" id={server_id} tabIndex={-1} role="dialog"
                    aria-labelledby={`#exampleModalLabel${server_id}`}
                    aria-modal="true" style={{ display: 'block', paddingRight: 16 }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id={`exampleModalLabel${server_id}`}>Delete </h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => this.renderModalClose()}>
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p className="mb-0">Yakin Ingin Menghapusnya.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" onClick={() => this.renderModalClose()} className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-primary">Yes</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="jvectormap-tip"></div>
                <div className="modal-backdrop fade show"></div>

            </>
        )

    }

    render() {
        console.log(this.props)
        const { isLoading } = this.state;
        if (isLoading) {
            return (
                <div className="lds-circle"><div className="lds-circle-here"></div></div>
            )
        }
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="main-card mb-3 card">
                        {this.props.level === 10 ? (
                            <div className="card-header">
                                <Link to="/server/add" className="btn btn-success btn-sm">Add Server</Link >
                                <div className="btn-actions-pane-right">
                                    <div role="group" className="btn-group-sm btn-group">
                                        <select className="form-control form-control-sm mr-4" name="category" value={this.state.currentGroup} onChange={this.handleChange}>
                                            <option key="0" value={0}>Select All</option>
                                            {this.state.category.map((item) => (
                                                <option key={item.category_id} value={item.category_id}>{item.name}</option>
                                            ))}
                                        </select>
                                        <div class="input-group input-group-sm hidden-xs">
                                            <input type="text" name="table_search" class="form-control pull-right" placeholder="Search" />
                                            <div class="input-group-btn">
                                                <button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                                <div className="card-header">
                                    Server
                                    <div class="box-tools">
                                        <div class="input-group input-group-sm hidden-xs">
                                            <input type="text" name="table_search" class="form-control pull-right" placeholder="Search" />
                                            <div class="input-group-btn">
                                                <button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-actions-pane-right">
                                        <div role="group" className="btn-group-sm btn-group"></div>
                                    </div>
                                </div>
                            )
                        }

                        <div className="table-responsive">
                            <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th className="text-center"></th>
                                        <th className="text-center">Label</th>
                                        <th className="text-center">Domain / IP</th>
                                        <th className="text-center">Port</th>
                                        <th className="text-center">Type</th>
                                        <th className="text-center">Latency</th>
                                        <th className="text-center">Online</th>
                                        <th className="text-center">Offline</th>
                                        <th className="text-center">Monitoring</th>
                                        <th className="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.jaringan.map(server =>
                                        <tr key={server.server_id}>
                                            <td className="text-center">
                                                {server.active === "yes" ? <div className="badge badge-success">ON</div> : <div className="badge badge-danger">OFF</div>}
                                            </td>
                                            <td className="text-center text-muted">{server.label}</td>

                                            <td className="text-center">{server.ip}</td>
                                            <td className="text-center">{server.port}</td>
                                            <td className="text-center text-capitalize">{server.type}</td>
                                            <td className="text-center">{server.rtime} s</td>
                                            {/* <td className="text-center">about {server.last_offline_duration} ago</td> */}
                                            <td className="text-center">{formatDate(server.last_online)} <br /> {formatTime(server.last_online)}</td>
                                            <td className="text-center">{formatDate(server.last_offline)} <br /> {formatTime(server.last_offline)}</td>
                                            <td className="text-center">
                                                {/* <button className="mr-2 btn-icon btn-icon-only btn btn-outline-primary"><i
                                                            className="pe-7s-paper-plane btn-icon-wrapper"> </i></button>
                                                    <button className="mr-2 btn-icn btn-icon-only btn btn-outline-primary"><i
                                                            className="fa fa-eye btn-icon-wrapper"> </i></button> */}
                                                {server.active === "yes" ? <div className="badge badge-success">ON</div> : <div className="badge badge-danger">OFF</div>}
                                            </td>
                                            <td className="text-center">
                                                {/* <button
                                                    className="mr-2 btn-icon btn-icon-only btn btn-outline-danger"><i
                                                        className="fa fa-power-off btn-icon-wrapper"> </i></button> */}
                                                <button
                                                    className="mr-2 btn-icon btn-icon-only btn btn-outline-primary"><Link to={`/server/${server.server_id}`}
                                                        className="fa fa-chart-bar btn-icon-wrapper"> </Link></button>
                                                {this.props.level === 10 ? (
                                                    <>
                                                        <button
                                                            className="mr-2 btn-icon btn-icon-only btn btn-outline-primary"><Link to={`/user_edit/${server.server_id}`}
                                                                className="fa fa-edit btn-icon-wrapper">
                                                            </Link></button>
                                                        {/* <button type="button" onClick={() => this.renderModal(server.server_id) && this.setState({showModal:true})} */}
                                                        <button type="button" onClick={() => this.setState({ showModal: true })}
                                                            className="mr-2 btn-icon btn-icon-only btn btn-outline-danger"
                                                            data-toggle="modal" data-target={`#server${server.server_id}`}><i
                                                                className="fa fa-trash-alt btn-icon-wrapper"> </i></button>
                                                    </>) : (<></>)}
                                                {this.state.showModal && this.renderModal(server.server_id)}
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                        <div className="d-block text-center card-footer">
                            <Pagination size="small" defaultCurrent={1} showQuickJumper total={this.state.object.totalItems} showTotal={this.showTotal} onChange={this.onChange} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        level: state.level
    }
}


export default connect(mapStateToProps)(Server);