import React from 'react'
import axios from 'axios'
import { api, formatDate, formatTime } from './Constants'
// import _ from 'lodash'
import { Link } from 'react-router-dom'
import { Pagination } from 'antd'
import 'antd/dist/antd.css'
// import {Pagination, PageItem} from 'react-bootstrap'

export default class Log extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            column: null,
            log: [],
            object: [],
            isLoading: false,
            direction: null,
            currentPage: 1,
            type: 'telegram',
            limit: 10,
            url: `${api()}/log?type=&page=1&limit=10`
        }

    }

    url = (type, page, limit) =>
        axios.get(api() + '/log', {
            params: {
                type: type,
                page: page,
                limit: limit
            }
        })
            .then(response => {
                this.setState({ log: response.data.data.logs, object: response.data.data, isLoading: false });
                console.log(this.state.object);
            })
            .catch(error => {
                console.log(error);
                alert('No available data')
                document.location = "/"
            })



    componentDidMount() {
        this.setState({ isLoading: true });
        axios.defaults.withCredentials = true;
        this.url(this.state.type, this.state.currentPage, this.state.limit)
    }




    onChange = (pageNumber, pageSize) => {
        this.url(this.state.type, pageNumber, pageSize);
    }


    handleFilter = type => () => {
        this.url(type, this.state.currentPage, this.state.limit)
        // console.log(this.state.url)
        // this.setState({isLoading: true})
        // const {log} = this.state;
        // const result = _.filter(log, (o) => _.includes(o, type));
        // this.setState({log: result, isLoading: false});
    }

    // handleSort = clickedColumn => () => {
    //     this.setState({ isLoading: true });
    //     const { column, log, direction } = this.state;

    //     if (column !== clickedColumn) {
    //         this.setState({
    //             column: clickedColumn,
    //             log: _.sortBy(log, [clickedColumn]),
    //             direction: 'descending',
    //             isLoading: true
    //         })
    //     }
    //     this.setState({
    //         log: log.reverse(),
    //         direction: direction === 'ascending' ? 'descending' : 'ascending',
    //         isLoading: false
    //     })
    // }


    render() {
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
                        <div className="card-header">Server
                                    <div className="btn-actions-pane-right">
                                <div role="group" className="btn-group-sm btn-group">
                                    {/* <button className="active btn btn-focus">Status</button> */}
                                    <button className="btn btn-focus" onClick={this.handleFilter('telegram')}>Telegram</button>
                                    <button className="btn btn-focus" onClick={this.handleFilter('email')}>Email</button>
                                </div>
                            </div>
                        </div>
                        <div id="main-content">

                            <div id="page-container">
                                <div id="flashmessage" className="hide">
                                </div>
                                <div className="tabbable">

                                    <div className="tab-content well">
                                        <div className="tab-pane active" id="log_status_content">
                                            <table className="table table-bordered table-striped">
                                                <thead>
                                                    <tr>
                                                        <th className="hidden-phone">Server ID</th>
                                                        <th className="hidden-phone">Message</th>
                                                        <th className="hidden-phone">Date</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.state.log.map(log =>
                                                        <tr key={log.log_id}>
                                                            <td>
                                                                <div className="table-body">
                                                                    <div className="table-cell">
                                                                        <Link to={`/server/${log.server_id}`}>

                                                                            <span
                                                                                className="title">
                                                                                {log.server_id}</span>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="hidden-phone">{log.message}</td>
                                                            <td className="hidden-phone tight">{formatDate(log.datetime)} <br /> {formatTime(log.datetime)}</td>
                                                        </tr>
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Pagination total={this.state.object.totalItems} onChange={this.onChange} />
                </div>
            </div>
        );
    }
}