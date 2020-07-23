import React from 'react';
import axios from 'axios';
import { api, formatDate, formatDateHour } from './Constants';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

class DataServer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            detail: {},
            param: {}
        }
    }

    getServerUptime = () => {
        const servers = this.state.detail

        let serverLabel = []
        servers.server_uptime.map((item) => {
            serverLabel.push(formatDateHour(item.date))
        })

        let rTime = []
        servers.server_uptime.map((item) => {
            rTime.push(item.latency)
        })
        //Create highcarts param
        let paramHighChart = {
            chart: {
                type: 'line'
            },
            title: {
                text: servers.label + ' Performance'
            },
            legend: {
                enabled: false
            },
            xAxis: {
                title: {
                    text: 'Date - Time'
                },
                labels: {
                    enabled: false
                },
                categories: [],
            },
            yAxis: {
                title: {
                    text: 'Latency'
                }
            },
            tooltip: {
                pointFormat: '<span style="color:{series.color}"></span><b>rtime</b> ({point.y} s)<br/>',
                split: true
            },
            series:
            {
                name: 'rtime ',
                data: []
            }
            ,
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: false
                    }
                }
            }
        }

        paramHighChart.xAxis.categories = serverLabel
        paramHighChart.series.data = rTime

        this.setState({ param: paramHighChart })
    }

    componentDidMount() {
        this.setState({ isLoading: true })
        const { match: { params } } = this.props
        // console.log(params.id)
        // console.log(api() + '/server/' + params.id);
        axios.defaults.withCredentials = true
        axios.get(api() + '/server/' + params.id)
            .then(response => {
                // console.log(response.data.data);
                this.setState({ detail: response.data.data, isLoading: false })
                this.getServerUptime()
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { isLoading } = this.state;
        return (
            <div>
                {isLoading ? (<div className="lds-circle" > <div className="lds-circle-here"></div></div>)
                    : (<div>
                        <div className="row">
                            <div className="d-xl-none d-lg-block col-md-6 col-xl-4">
                                <div className="card mb-3 widget-content bg-premium-dark">
                                    <div className="widget-content-wrapper text-white">
                                        <div className="widget-content-left">
                                            <div className="widget-heading">Products Sold</div>
                                            <div className="widget-subheading">Revenue streams</div>
                                        </div>
                                        <div className="widget-content-right">
                                            <div className="widget-numbers text-warning"><span>$14M</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="main-card mb-3 card">
                                    <div className="card-header">Active Users
                            </div>
                                    <div className="table-responsive">
                                        <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                                            <thead>
                                                <tr>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="text-left text-muted">Status :</td>
                                                    <td className="text-left">
                                                        {this.state.detail.status === "on" ? <div className="badge badge-success">ON</div> : <div className="badge badge-danger">OFF</div>}
                                                        {/* No connection could be made because the target machine actively
                                                    refused it. */}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-left text-muted">Type :</td>
                                                    <td className="text-left text-capitalize">
                                                        {this.state.detail.type}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-left text-muted">Domain / IP :</td>
                                                    <td className="text-left">
                                                        {this.state.detail.ip}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-left text-muted">Port :</td>
                                                    <td className="text-left">
                                                        {this.state.detail.port}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-left text-muted">Last Check :</td>
                                                    <td className="text-left">
                                                        {formatDate(this.state.detail.last_check)}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-left text-muted">Last Online :</td>
                                                    <td className="text-left">
                                                        {formatDate(this.state.detail.last_online)}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-left text-muted">Latency :</td>
                                                    <td className="text-left">
                                                        {this.state.detail.rtime} s
                                                </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-left text-muted">Monitoring :</td>
                                                    <td className="text-left text-capitalize">
                                                        {this.state.detail.active}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-left text-muted">Telegram :</td>
                                                    <td className="text-left text-capitalize">
                                                        {this.state.detail.telegram}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-left text-muted">Timeout :</td>
                                                    <td className="text-left">
                                                        {this.state.detail.last_offline_duration}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-left text-muted">Username :</td>
                                                    <td className="text-left">
                                                        {this.state.detail.ssh_username}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="d-block text-center card-footer">
                                        {/* <button className="mr-2 btn-icon btn-icon-only btn btn-outline-success"><Link to={`/user_edit/${this.state.detail.server_id}`} className="fa fa-edit btn-icon-wrapper"> </Link></button> */}
                                        <button className="mr-2 btn-icon btn-icon-only btn btn-outline-danger"><i
                                            className="fa fa-save btn-icon-wrapper"> </i></button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <HighchartsReact
                                    highcharts={Highcharts}
                                    options={this.state.param}
                                />
                            </div>
                        </div>
                        <div>
                            {/* <h3>Hovering over {hoverData}</h3> */}
                            {/* <button onClick={this.updateSeries.bind(this)}>Update Series</button> */}
                        </div>
                    </div>
                    )
                }
            </div>
        )
    }
}


export default DataServer