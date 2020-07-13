import React from 'react';
import axios from 'axios';
import { api, formatDate } from './Constants';
import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';
// import { Link } from 'react-router-dom';
// import { Bar } from "react-chartjs-2";

export default class DataServer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: []
            // data: {
            //     labels: ["Jan 00", "03 Jan", "05 Jan", "07 Jan", "09 Jan", "11 Jan"],
            //     datasets: [
            //         {
            //             label: "History",
            //             data: [20, 15, 50, 75, 25],
            //             backgroundColor: "rgb(0, 143, 251)"
            //         }
            //     ]
            // }
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        const { match: { params } } = this.props;
        // console.log(api() + '/server/' + params.id);
        axios.defaults.withCredentials = true;
        axios.get(api() + '/server/' + params.id)
            .then(response => {
                this.setState({ detail: response.data.data, isLoading: false });
                console.log(response.data.data);
            })
            .catch(error => {
                console.log(error);
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
            <>
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
                {/* <HighchartsReact highcharts={Highcharts} options={{}} /> */}
                {/* <Bar options={{ responsive: true }} data={this.state.data} /> */}
                {/* <div className="pt-0 card-body" style={{ position: 'relative' }}>
                    <div id="chart-combined" style={{ minHeight: 411 }}>
                        <div id="apexcharts2tky3ns5"
                            className="apexcharts-canvas apexcharts2tky3ns5 zoomable"
                            style={{ width: 90, height: 39 }}><svg id="SvgjsSvg3172" width={623}
                                height={397} xmlns="http://www.w3.org/2000/svg" version="1.1"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                xmlns:svgjs="http://svgjs.com/svgjs"
                                                className="apexcharts-svg hovering-zoom" xmlns:data="ApexChartsNS"
                                                transform="translate(0, 0)" style={{ background: transparent }}>
                                                <foreignObject x="0" y="0" width={623} height={397}>
                                <div className="apexcharts-legend center position-bottom"
                                    xmlns="http://www.w3.org/1999/xhtml"
                                    style={{ right: 0, position: absolute, left: 0, top: auto, bottom: 10 }}>
                                    <div className="apexcharts-legend-series" rel="1"
                                        data: <span
                                        className="apexcharts-legend-marker" rel="1"
                                        data:collapsed="false"
                                                                style={{ background: rgb(0, 143, 251), color: rgb(0, 143, 251), height: 12, width: 12, left: 0, top: 0, borderWidth: 0, borderColor: rgb(255, 255, 255), borderRadius: 12 }}></span><span
                                    className="apexcharts-legend-text" rel="1"
                                    data:collapsed="false"
                                                                style={{ color: rgb(55, 61, 63), fontFamily: 'Helvetica, Arial, sans-serif' }}>Latency
                                                                (Average)
                                                            </span></div>
                        <div className="apexcharts-legend-series" rel="1"
                            data: <span
                            className="apexcharts-legend-marker" rel="1"
                            data:collapsed="false"
                                                                style={{ background: rgb(0, 227, 150), color: rgb(0, 227, 150), height: 12, width: 12, left: 0, top: 0, border- width: 0, border-color: rgb(255, 255, 255), border-radius: 12}}></span><span
                        className="apexcharts-legend-text" rel={1}
                        data:collapsed="false"
                                                                style={{ color: rgb(55, 61, 63), fontFamily: 'Helvetica, Arial, sans-serif' }}>Latency
                                                                (Min)
                                                            </span></div>

            <div className="apexcharts-legend-series" rel="2"
                data: <span
                    className="apexcharts-legend-marker" rel="2"
                    data: collapsed="false"
                    style={{ background: rgb(203, 0, 0), color: rgb(203, 0, 0), height: 12, width: 12, left: 0, top: 0, borderWidth: 0, borderColor: rgb(255, 255, 255), borderRadius: 12 }}></span><span
                className="apexcharts-legend-text" rel="2"
                data: collapsed="false"
                style={{ color: rgb(55, 61, 63), fontFamily: Helvetica, Arial, sans- serif}}> Latency
                    (Max)</span ></div >
                </div >
                
                                                </foreignObject >

    < g id="SvgjsG3174" className="apexcharts-inner apexcharts-graphical"
        transform="translate(71.19270833333333, 40)" >
        <defs id="SvgjsDefs3173">
            <clipPath id="gridRectMask2tky3ns5">
                <rect id="SvgjsRect3197" width={490.390625} height={297.348}
                    x={-2} y={-2} rx={0} ry={0} fill="#ffffff" opacity={1}
                    stroke-width={0} stroke="none" stroke-dasharray={0}>
                </rect>
            </clipPath>
            <clipPath id="gridRectMarkerMask2tky3ns5">
                <rect id="SvgjsRect3198" width={504.390625} height={311.348}
                    x={-9} y={-9} rx={0} ry={0} fill="#ffffff" opacity={1}
                    stroke-width={0} stroke="none" stroke-dasharray={0}>
                </rect>
            </clipPath>
        </defs>
        <rect id="SvgjsRect3180" width={1} height={293.348}
            x={389.0259271863844} y={0} rx={0} ry={0} fill="#b1b9c4"
            opacity={1} stroke-width={0} stroke-dasharray={0}
            className="apexcharts-xcrosshairs" filter="none" fill-opacity={0.9}>
        </rect>
        <g id="SvgjsG3255" className="apexcharts-xaxis"
            transform="translate(0, 0)">
            <g id="SvgjsG3256" className="apexcharts-xaxis-texts-g"
                transform="translate(0, -4)"><text id="SvgjsText3257"
                    font-family="Helvetica, Arial, sans-serif"
                    x="26.162189139384022" y="322.348" text-anchor="middle"
                    dominate-baseline="central" font-size="12"
                    fill="#373d3f"
                    className="apexcharts-xaxis-label apexcharts-xaxis-label"
                    style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                    <tspan id="SvgjsTspan3258"
                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                        Jan '00</tspan>
                    <title>Jan '00</title>
                </text><text id="SvgjsText3259"
                    font-family="Helvetica, Arial, sans-serif"
                    x={109.8811943854129} y={322.348} text-anchor="middle"
                    dominate-baseline="central" font-size={12}
                    fill="#373d3f"
                    className="apexcharts-xaxis-label apexcharts-xaxis-label"
                    style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                    <tspan id="SvgjsTspan3260"
                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                        03 Jan</tspan>
                    <title>03 Jan</title>
                </text><text id="SvgjsText3261"
                    font-family="Helvetica, Arial, sans-serif"
                    x="193.60019963144177" y={322.348} text-anchor="middle"
                    dominate-baseline="central" font-size={12}
                    fill="#373d3f"
                    className="apexcharts-xaxis-label apexcharts-xaxis-label"
                    style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                    <tspan id="SvgjsTspan3262"
                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                        05 Jan</tspan>
                    <title>05 Jan</title>
                </text><text id="SvgjsText3263"
                    font-family="Helvetica, Arial, sans-serif"
                    x="277.3192048774706" y="322.348" text-anchor="middle"
                    dominate-baseline="central" font-size="12"
                    fill="#373d3f"
                    className="apexcharts-xaxis-label apexcharts-xaxis-label"
                    style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                    <tspan id="SvgjsTspan3264"
                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                        07 Jan</tspan>
                    <title>07 Jan</title>
                </text><text id="SvgjsText3265"
                    font-family="Helvetica, Arial, sans-serif"
                    x="361.03821012349954" y="322.348" text-anchor="middle"
                    dominate-baseline="central" font-size="12"
                    fill="#373d3f"
                    className="apexcharts-xaxis-label apexcharts-xaxis-label"
                    style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                    <tspan id="SvgjsTspan3266"
                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                        09 Jan</tspan>
                    <title>09 Jan</title>
                </text><text id="SvgjsText3267"
                    font-family="Helvetica, Arial, sans-serif"
                    x="444.75721536952847" y="322.348" text-anchor="middle"
                    dominate-baseline="central" font-size="12"
                    fill="#373d3f"
                    className="apexcharts-xaxis-label apexcharts-xaxis-label"
                    style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                    <tspan id="SvgjsTspan3268"
                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                        11 Jan</tspan>
                    <title>11 Jan</title>
                </text></g>
            <line id="SvgjsLine3269" x1="0" y1="294.348" x2="486.390625"
                y2="294.348" stroke="#78909c" stroke-dasharray="0"
                stroke-width="1"></line>
        </g>
        <g id="SvgjsG3294" className="apexcharts-grid">
            <line id="SvgjsLine3295" x1="26.162189139384022" y1="294.348"
                x2="26.162189139384022" y2="300.348" stroke="#78909c"
                stroke-dasharray="0" className="apexcharts-xaxis-tick"></line>
            <line id="SvgjsLine3296" x1="109.8811943854129" y1="294.348"
                x2="109.8811943854129" y2="300.348" stroke="#78909c"
                stroke-dasharray="0" className="apexcharts-xaxis-tick"></line>
            <line id="SvgjsLine3297" x1="193.60019963144177" y1="294.348"
                x2="193.60019963144177" y2="300.348" stroke="#78909c"
                stroke-dasharray="0" className="apexcharts-xaxis-tick"></line>
            <line id="SvgjsLine3298" x1="277.3192048774706" y1="294.348"
                x2="277.3192048774706" y2="300.348" stroke="#78909c"
                stroke-dasharray="0" className="apexcharts-xaxis-tick"></line>
            <line id="SvgjsLine3299" x1="361.03821012349954" y1="294.348"
                x2="361.03821012349954" y2="300.348" stroke="#78909c"
                stroke-dasharray="0" className="apexcharts-xaxis-tick"></line>
            <line id="SvgjsLine3300" x1="444.75721536952847" y1="294.348"
                x2="444.75721536952847" y2="300.348" stroke="#78909c"
                stroke-dasharray="0" className="apexcharts-xaxis-tick"></line>
            <line id="SvgjsLine3301" x1="0" y1="0" x2="486.390625" y2="0"
                stroke="#e0e0e0" stroke-dasharray="0"
                className="apexcharts-gridline"></line>
            <line id="SvgjsLine3302" x1="0" y1="36.6685" x2="486.390625"
                y2="36.6685" stroke="#e0e0e0" stroke-dasharray="0"
                className="apexcharts-gridline"></line>
            <line id="SvgjsLine3303" x1="0" y1="73.337" x2="486.390625"
                y2="73.337" stroke="#e0e0e0" stroke-dasharray="0"
                className="apexcharts-gridline"></line>
            <line id="SvgjsLine3304" x1="0" y1="110.00550000000001"
                x2="486.390625" y2="110.00550000000001" stroke="#e0e0e0"
                stroke-dasharray="0" className="apexcharts-gridline"></line>
            <line id="SvgjsLine3305" x1="0" y1="146.674" x2="486.390625"
                y2="146.674" stroke="#e0e0e0" stroke-dasharray="0"
                className="apexcharts-gridline"></line>
            <line id="SvgjsLine3306" x1="0" y1="183.3425" x2="486.390625"
                y2="183.3425" stroke="#e0e0e0" stroke-dasharray="0"
                className="apexcharts-gridline"></line>
            <line id="SvgjsLine3307" x1="0" y1="220.011" x2="486.390625"
                y2="220.011" stroke="#e0e0e0" stroke-dasharray="0"
                className="apexcharts-gridline"></line>
            <line id="SvgjsLine3308" x1="0" y1="256.6795" x2="486.390625"
                y2="256.6795" stroke="#e0e0e0" stroke-dasharray="0"
                className="apexcharts-gridline"></line>
            <line id="SvgjsLine3309" x1="0" y1="293.348" x2="486.390625"
                y2="293.348" stroke="#e0e0e0" stroke-dasharray="0"
                className="apexcharts-gridline"></line>
            <line id="SvgjsLine3311" x1="0" y1="293.348" x2="486.390625"
                y2="293.348" stroke="transparent" stroke-dasharray="0">
            </line>
            <line id="SvgjsLine3310" x1="0" y1="1" x2="0" y2="293.348"
                stroke="transparent" stroke-dasharray="0"></line>
        </g>
        {/* <g id="SvgjsG3200"
                    className="apexcharts-bar-series apexcharts-plot-series"
                    clip-path="url(#gridRectMask2tky3ns5)">
                    <g id="SvgjsG3201" className="apexcharts-series Website-Blog"
                        rel="1" data:realIndex="0">
                                                            <path id="apexcharts-bar-area-0"
                        d="M -1.8604223388006407 293.348L -1.8604223388006407 132.0066L 27.441229497309465 132.0066L 27.441229497309465 293.348L -1.8604223388006407 293.348"
                        fill="rgba(0,143,251,0.85)" fill-opacity="1"
                        stroke-opacity="1" stroke-linecap="butt"
                        stroke-width="0" stroke-dasharray="0"
                        className="apexcharts-bar-area" index="0"
                        clip-path="url(#gridRectMask2tky3ns5)"
                        pathTo="M -1.8604223388006407 293.348L -1.8604223388006407 132.0066L 27.441229497309465 132.0066L 27.441229497309465 293.348L -1.8604223388006407 293.348"
                        pathFrom="M -1.8604223388006407 293.348L -1.8604223388006407 293.348L 27.441229497309465 293.348L 27.441229497309465 293.348L -1.8604223388006407 293.348"
                        cy="132.0066" cx="27.441229497309465" j="0" val="440"
                        barWidth="29.301651836110103"></path>
                    <path id="apexcharts-bar-area-0"
                        d="M 39.999080284213804 293.348L 39.999080284213804 108.172075L 69.30073212032391 108.172075L 69.30073212032391 293.348L 39.999080284213804 293.348"
                        fill="rgba(0,143,251,0.85)" fill-opacity="1"
                        stroke-opacity="1" stroke-linecap="butt"
                        stroke-width="0" stroke-dasharray="0"
                        className="apexcharts-bar-area" index="0"
                        clip-path="url(#gridRectMask2tky3ns5)"
                        pathTo="M 39.999080284213804 293.348L 39.999080284213804 108.172075L 69.30073212032391 108.172075L 69.30073212032391 293.348L 39.999080284213804 293.348"
                        pathFrom="M 39.999080284213804 293.348L 39.999080284213804 293.348L 69.30073212032391 293.348L 69.30073212032391 293.348L 39.999080284213804 293.348"
                        cy="108.172075" cx="69.30073212032391" j="1" val="505"
                        barWidth="29.301651836110103"></path>
                    <path id="apexcharts-bar-area-0"
                        d="M 81.85858290722824 293.348L 81.85858290722824 141.54041L 111.16023474333835 141.54041L 111.16023474333835 293.348L 81.85858290722824 293.348"
                        fill="rgba(0,143,251,0.85)" fill-opacity="1"
                        stroke-opacity="1" stroke-linecap="butt"
                        stroke-width="0" stroke-dasharray="0"
                        className="apexcharts-bar-area" index="0"
                        clip-path="url(#gridRectMask2tky3ns5)"
                        pathTo="M 81.85858290722824 293.348L 81.85858290722824 141.54041L 111.16023474333835 141.54041L 111.16023474333835 293.348L 81.85858290722824 293.348"
                        pathFrom="M 81.85858290722824 293.348L 81.85858290722824 293.348L 111.16023474333835 293.348L 111.16023474333835 293.348L 81.85858290722824 293.348"
                        cy="141.54041" cx="111.16023474333835" j="2" val="414"
                        barWidth="29.301651836110103"></path>
                    <path id="apexcharts-bar-area-0"
                        d="M 123.71808553024267 293.348L 123.71808553024267 47.30236500000001L 153.01973736635279 47.30236500000001L 153.01973736635279 293.348L 123.71808553024267 293.348"
                        fill="rgba(0,143,251,0.85)" fill-opacity="1"
                        stroke-opacity="1" stroke-linecap="butt"
                        stroke-width="0" stroke-dasharray="0"
                        className="apexcharts-bar-area" index="0"
                        clip-path="url(#gridRectMask2tky3ns5)"
                        pathTo="M 123.71808553024267 293.348L 123.71808553024267 47.30236500000001L 153.01973736635279 47.30236500000001L 153.01973736635279 293.348L 123.71808553024267 293.348"
                        pathFrom="M 123.71808553024267 293.348L 123.71808553024267 293.348L 153.01973736635279 293.348L 153.01973736635279 293.348L 123.71808553024267 293.348"
                        cy="47.30236500000001" cx="153.01973736635279" j="3"
                        val="671" barWidth="29.301651836110103"></path>
                    <path id="apexcharts-bar-area-0"
                        d="M 165.5775881532571 293.348L 165.5775881532571 210.110505L 194.8792399893672 210.110505L 194.8792399893672 293.348L 165.5775881532571 293.348"
                        fill="rgba(0,143,251,0.85)" fill-opacity="1"
                        stroke-opacity="1" stroke-linecap="butt"
                        stroke-width="0" stroke-dasharray="0"
                        className="apexcharts-bar-area" index="0"
                        clip-path="url(#gridRectMask2tky3ns5)"
                        pathTo="M 165.5775881532571 293.348L 165.5775881532571 210.110505L 194.8792399893672 210.110505L 194.8792399893672 293.348L 165.5775881532571 293.348"
                        pathFrom="M 165.5775881532571 293.348L 165.5775881532571 293.348L 194.8792399893672 293.348L 194.8792399893672 293.348L 165.5775881532571 293.348"
                        cy="210.110505" cx="194.8792399893672" j="4" val="227"
                        barWidth="29.301651836110103"></path>
                    <path id="apexcharts-bar-area-0"
                        d="M 207.43709077627153 293.348L 207.43709077627153 141.907095L 236.73874261238163 141.907095L 236.73874261238163 293.348L 207.43709077627153 293.348"
                        fill="rgba(0,143,251,0.85)" fill-opacity="1"
                        stroke-opacity="1" stroke-linecap="butt"
                        stroke-width="0" stroke-dasharray="0"
                        className="apexcharts-bar-area" index="0"
                        clip-path="url(#gridRectMask2tky3ns5)"
                        pathTo="M 207.43709077627153 293.348L 207.43709077627153 141.907095L 236.73874261238163 141.907095L 236.73874261238163 293.348L 207.43709077627153 293.348"
                        pathFrom="M 207.43709077627153 293.348L 207.43709077627153 293.348L 236.73874261238163 293.348L 236.73874261238163 293.348L 207.43709077627153 293.348"
                        cy="141.907095" cx="236.73874261238163" j="5" val="413"
                        barWidth="29.301651836110103"></path>
                    <path id="apexcharts-bar-area-0"
                        d="M 249.29659339928597 293.348L 249.29659339928597 219.644315L 278.59824523539606 219.644315L 278.59824523539606 293.348L 249.29659339928597 293.348"
                        fill="rgba(0,143,251,0.85)" fill-opacity="1"
                        stroke-opacity="1" stroke-linecap="butt"
                        stroke-width="0" stroke-dasharray="0"
                        className="apexcharts-bar-area" index="0"
                        clip-path="url(#gridRectMask2tky3ns5)"
                        pathTo="M 249.29659339928597 293.348L 249.29659339928597 219.644315L 278.59824523539606 219.644315L 278.59824523539606 293.348L 249.29659339928597 293.348"
                        pathFrom="M 249.29659339928597 293.348L 249.29659339928597 293.348L 278.59824523539606 293.348L 278.59824523539606 293.348L 249.29659339928597 293.348"
                        cy="219.644315" cx="278.59824523539606" j="6" val="201"
                        barWidth="29.301651836110103"></path>
                    <path id="apexcharts-bar-area-0"
                        d="M 291.15609602230046 293.348L 291.15609602230046 164.27488L 320.4577478584106 164.27488L 320.4577478584106 293.348L 291.15609602230046 293.348"
                        fill="rgba(0,143,251,0.85)" fill-opacity="1"
                        stroke-opacity="1" stroke-linecap="butt"
                        stroke-width="0" stroke-dasharray="0"
                        className="apexcharts-bar-area" index="0"
                        clip-path="url(#gridRectMask2tky3ns5)"
                        pathTo="M 291.15609602230046 293.348L 291.15609602230046 164.27488L 320.4577478584106 164.27488L 320.4577478584106 293.348L 291.15609602230046 293.348"
                        pathFrom="M 291.15609602230046 293.348L 291.15609602230046 293.348L 320.4577478584106 293.348L 320.4577478584106 293.348L 291.15609602230046 293.348"
                        cy="164.27488" cx="320.4577478584106" j="7" val="352"
                        barWidth="29.301651836110103"></path>
                    <path id="apexcharts-bar-area-0"
                        d="M 333.01559864531487 293.348L 333.01559864531487 17.600880000000018L 362.317250481425 17.600880000000018L 362.317250481425 293.348L 333.01559864531487 293.348"
                        fill="rgba(0,143,251,0.85)" fill-opacity="1"
                        stroke-opacity="1" stroke-linecap="butt"
                        stroke-width="0" stroke-dasharray="0"
                        className="apexcharts-bar-area" index="0"
                        clip-path="url(#gridRectMask2tky3ns5)"
                        pathTo="M 333.01559864531487 293.348L 333.01559864531487 17.600880000000018L 362.317250481425 17.600880000000018L 362.317250481425 293.348L 333.01559864531487 293.348"
                        pathFrom="M 333.01559864531487 293.348L 333.01559864531487 293.348L 362.317250481425 293.348L 362.317250481425 293.348L 333.01559864531487 293.348"
                        cy="17.600880000000018" cx="362.317250481425" j="8"
                        val="752" barWidth="29.301651836110103"></path>
                    <path id="apexcharts-bar-area-0"
                        d="M 374.87510126832933 293.348L 374.87510126832933 176.0088L 404.17675310443946 176.0088L 404.17675310443946 293.348L 374.87510126832933 293.348"
                        fill="rgba(0,143,251,0.85)" fill-opacity="1"
                        stroke-opacity="1" stroke-linecap="butt"
                        stroke-width="0" stroke-dasharray="0"
                        className="apexcharts-bar-area" index="0"
                        clip-path="url(#gridRectMask2tky3ns5)"
                        pathTo="M 374.87510126832933 293.348L 374.87510126832933 176.0088L 404.17675310443946 176.0088L 404.17675310443946 293.348L 374.87510126832933 293.348"
                        pathFrom="M 374.87510126832933 293.348L 374.87510126832933 293.348L 404.17675310443946 293.348L 404.17675310443946 293.348L 374.87510126832933 293.348"
                        cy="176.0088" cx="404.17675310443946" j="9" val="320"
                        barWidth="29.301651836110103"></path>
                    <path id="apexcharts-bar-area-0"
                        d="M 416.73460389134374 293.348L 416.73460389134374 199.109955L 446.03625572745386 199.109955L 446.03625572745386 293.348L 416.73460389134374 293.348"
                        fill="rgba(0,143,251,0.85)" fill-opacity="1"
                        stroke-opacity="1" stroke-linecap="butt"
                        stroke-width="0" stroke-dasharray="0"
                        className="apexcharts-bar-area" index="0"
                        clip-path="url(#gridRectMask2tky3ns5)"
                        pathTo="M 416.73460389134374 293.348L 416.73460389134374 199.109955L 446.03625572745386 199.109955L 446.03625572745386 293.348L 416.73460389134374 293.348"
                        pathFrom="M 416.73460389134374 293.348L 416.73460389134374 293.348L 446.03625572745386 293.348L 446.03625572745386 293.348L 416.73460389134374 293.348"
                        cy="199.109955" cx="446.03625572745386" j="10" val="257"
                        barWidth="29.301651836110103"></path>
                    <path id="apexcharts-bar-area-0"
                        d="M 458.5941065143582 293.348L 458.5941065143582 234.6784L 487.8957583504683 234.6784L 487.8957583504683 293.348L 458.5941065143582 293.348"
                        fill="rgba(0,143,251,0.85)" fill-opacity="1"
                        stroke-opacity="1" stroke-linecap="butt"
                        stroke-width="0" stroke-dasharray="0"
                        className="apexcharts-bar-area" index="0"
                        clip-path="url(#gridRectMask2tky3ns5)"
                        pathTo="M 458.5941065143582 293.348L 458.5941065143582 234.6784L 487.8957583504683 234.6784L 487.8957583504683 293.348L 458.5941065143582 293.348"
                        pathFrom="M 458.5941065143582 293.348L 458.5941065143582 293.348L 487.8957583504683 293.348L 487.8957583504683 293.348L 458.5941065143582 293.348"
                        cy="234.6784" cx="487.8957583504683" j="11" val="160"
                        barWidth="29.301651836110103"></path>
                    <g id="SvgjsG3202" className="apexcharts-datalabels"></g>
                </g>
            </g>
                                        <g id="SvgjsG3227"
                                            className="apexcharts-line-series apexcharts-plot-series">
                                            <g id="SvgjsG3228" className="apexcharts-series Social-Media"
                                                data:longestSeries="true" rel="1" data:realIndex="1">
                                                            <path id="apexcharts-line-0"
                                                d="M 12.790403579254411 152.78541666666666L 54.64990620226885 36.668499999999995L 96.50940882528329 79.44841666666665L 138.36891144829772 128.33974999999998L 180.22841407131216 30.55708333333331L 222.0879166943266 158.89683333333332L 263.94741931734103 189.45391666666666L 305.8069219403555 103.89408333333333L 347.6664245633699 158.89683333333332L 389.52592718638437 158.89683333333332L 431.3854298093988 220.01100000000002L 473.24493243241324 195.56533333333334"
                                                fill="none" fill-opacity="1"
                                                stroke="rgba(0,227,150,0.85)" stroke-opacity="1"
                                                stroke-linecap="butt" stroke-width="4"
                                                stroke-dasharray="0" className="apexcharts-line" index="1"
                                                clip-path="url(#gridRectMask2tky3ns5)"
                                                pathTo="M 12.790403579254411 152.78541666666666L 54.64990620226885 36.668499999999995L 96.50940882528329 79.44841666666665L 138.36891144829772 128.33974999999998L 180.22841407131216 30.55708333333331L 222.0879166943266 158.89683333333332L 263.94741931734103 189.45391666666666L 305.8069219403555 103.89408333333333L 347.6664245633699 158.89683333333332L 389.52592718638437 158.89683333333332L 431.3854298093988 220.01100000000002L 473.24493243241324 195.56533333333334"
                                                pathFrom="M -1 293.348L -1 293.348L 54.64990620226885 293.348L 96.50940882528329 293.348L 138.36891144829772 293.348L 180.22841407131216 293.348L 222.0879166943266 293.348L 263.94741931734103 293.348L 305.8069219403555 293.348L 347.6664245633699 293.348L 389.52592718638437 293.348L 431.3854298093988 293.348L 473.24493243241324 293.348">
                                            </path>
                                            <g id="SvgjsG3229" className="apexcharts-series-markers-wrap">
                                                <g id="SvgjsG3231" className="apexcharts-series-markers"
                                                    clip-path="url(#gridRectMarkerMask2tky3ns5)">
                                                    <circle id="SvgjsCircle3232" r="5"
                                                        cx="12.790403579254411" cy="152.78541666666666"
                                                        className="apexcharts-marker w0rmkaat0f"
                                                        stroke="#ffffff" fill="#00e396" fill-opacity="1"
                                                        stroke-width="2" stroke-opacity="0.9" rel="0"
                                                        j="0" index="1" default-marker-size="5">
                                                    </circle>
                                                    <circle id="SvgjsCircle3233" r="5"
                                                        cx="54.64990620226885" cy="36.668499999999995"
                                                        className="apexcharts-marker w6uy6d9qc"
                                                        stroke="#ffffff" fill="#00e396" fill-opacity="1"
                                                        stroke-width="2" stroke-opacity="0.9" rel="1"
                                                        j="1" index="1" default-marker-size="5">
                                                    </circle>
                                                </g>
                                                <g id="SvgjsG3234" className="apexcharts-series-markers"
                                                    clip-path="url(#gridRectMarkerMask2tky3ns5)">
                                                    <circle id="SvgjsCircle3235" r="5"
                                                        cx="96.50940882528329" cy="79.44841666666665"
                                                        className="apexcharts-marker whickg53v"
                                                        stroke="#ffffff" fill="#00e396" fill-opacity="1"
                                                        stroke-width="2" stroke-opacity="0.9" rel="2"
                                                        j="2" index="1" default-marker-size="5">
                                                    </circle>
                                                </g>
                                                <g id="SvgjsG3236" className="apexcharts-series-markers"
                                                    clip-path="url(#gridRectMarkerMask2tky3ns5)">
                                                    <circle id="SvgjsCircle3237" r="5"
                                                        cx="138.36891144829772" cy="128.33974999999998"
                                                        className="apexcharts-marker wucu8srwf"
                                                        stroke="#ffffff" fill="#00e396" fill-opacity="1"
                                                        stroke-width="2" stroke-opacity="0.9" rel="3"
                                                        j="3" index="1" default-marker-size="5">
                                                    </circle>
                                                </g>
                                                <g id="SvgjsG3238" className="apexcharts-series-markers"
                                                    clip-path="url(#gridRectMarkerMask2tky3ns5)">
                                                    <circle id="SvgjsCircle3239" r="5"
                                                        cx="180.22841407131216" cy="30.55708333333331"
                                                        className="apexcharts-marker wn8c1v0lr"
                                                        stroke="#ffffff" fill="#00e396" fill-opacity="1"
                                                        stroke-width="2" stroke-opacity="0.9" rel="4"
                                                        j="4" index="1" default-marker-size="5">
                                                    </circle>
                                                </g>
                                                <g id="SvgjsG3240" className="apexcharts-series-markers"
                                                    clip-path="url(#gridRectMarkerMask2tky3ns5)">
                                                    <circle id="SvgjsCircle3241" r="5"
                                                        cx="222.0879166943266" cy="158.89683333333332"
                                                        className="apexcharts-marker wsrih354b"
                                                        stroke="#ffffff" fill="#00e396" fill-opacity="1"
                                                        stroke-width="2" stroke-opacity="0.9" rel="5"
                                                        j="5" index="1" default-marker-size="5">
                                                    </circle>
                                                </g>
                                                <g id="SvgjsG3242" className="apexcharts-series-markers"
                                                    clip-path="url(#gridRectMarkerMask2tky3ns5)">
                                                    <circle id="SvgjsCircle3243" r="5"
                                                        cx="263.94741931734103" cy="189.45391666666666"
                                                        className="apexcharts-marker w71l29mer"
                                                        stroke="#ffffff" fill="#00e396" fill-opacity="1"
                                                        stroke-width="2" stroke-opacity="0.9" rel="6"
                                                        j="6" index="1" default-marker-size="5">
                                                    </circle>
                                                </g>
                                                <g id="SvgjsG3244" className="apexcharts-series-markers"
                                                    clip-path="url(#gridRectMarkerMask2tky3ns5)">
                                                    <circle id="SvgjsCircle3245" r="5"
                                                        cx="305.8069219403555" cy="103.89408333333333"
                                                        className="apexcharts-marker wzz55285g"
                                                        stroke="#ffffff" fill="#00e396" fill-opacity="1"
                                                        stroke-width="2" stroke-opacity="0.9" rel="7"
                                                        j="7" index="1" default-marker-size="5">
                                                    </circle>
                                                </g>
                                                <g id="SvgjsG3246" className="apexcharts-series-markers"
                                                    clip-path="url(#gridRectMarkerMask2tky3ns5)">
                                                    <circle id="SvgjsCircle3247" r="5"
                                                        cx="347.6664245633699" cy="158.89683333333332"
                                                        className="apexcharts-marker w95v9qrvlk"
                                                        stroke="#ffffff" fill="#00e396" fill-opacity="1"
                                                        stroke-width="2" stroke-opacity="0.9" rel="8"
                                                        j="8" index="1" default-marker-size="5">
                                                    </circle>
                                                </g>
                                                <g id="SvgjsG3248" className="apexcharts-series-markers"
                                                    clip-path="url(#gridRectMarkerMask2tky3ns5)">
                                                    <circle id="SvgjsCircle3249" r="5"
                                                        cx="389.52592718638437" cy="158.89683333333332"
                                                        className="apexcharts-marker w3hd8soe6i"
                                                        stroke="#ffffff" fill="#00e396" fill-opacity="1"
                                                        stroke-width="2" stroke-opacity="0.9" rel="9"
                                                        j="9" index="1" default-marker-size="5">
                                                    </circle>
                                                </g>
                                                <g id="SvgjsG3250" className="apexcharts-series-markers"
                                                    clip-path="url(#gridRectMarkerMask2tky3ns5)">
                                                    <circle id="SvgjsCircle3251" r="5"
                                                        cx="431.3854298093988" cy="220.01100000000002"
                                                        className="apexcharts-marker wji9rdc2y"
                                                        stroke="#ffffff" fill="#00e396" fill-opacity="1"
                                                        stroke-width="2" stroke-opacity="0.9" rel="10"
                                                        j="10" index="1" default-marker-size="5">
                                                    </circle>
                                                </g>
                                                <g id="SvgjsG3252" className="apexcharts-series-markers"
                                                    clip-path="url(#gridRectMarkerMask2tky3ns5)">
                                                    <circle id="SvgjsCircle3253" r="5"
                                                        cx="473.24493243241324" cy="195.56533333333334"
                                                        className="apexcharts-marker w33bsnda6"
                                                        stroke="#ffffff" fill="#00e396" fill-opacity="1"
                                                        stroke-width="2" stroke-opacity="0.9" rel="11"
                                                        j="11" index="1" default-marker-size="5">
                                                    </circle>
                                                </g>
                                            </g>
                                            <g id="SvgjsG3230" className="apexcharts-datalabels"></g>
                                        </g>
                                    </g >
                                    <line id="SvgjsLine3312" x1="0" y1="0" x2="486.390625" y2="0"
                                        stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1"
                                        className="apexcharts-ycrosshairs"></line>
                                    <line id="SvgjsLine3313" x1="0" y1="0" x2="486.390625" y2="0"
                                        stroke-dasharray="0" stroke-width="0"
                                        className="apexcharts-ycrosshairs-hidden"></line>
                                    <g id="SvgjsG3314" className="apexcharts-yaxis-annotations"></g>
                                    <g id="SvgjsG3315" className="apexcharts-xaxis-annotations"></g>
                                    <g id="SvgjsG3316" className="apexcharts-point-annotations"></g>
                                    <rect id="SvgjsRect3317" width="0" height="0" x="0" y="0" rx="0"
                                        ry="0" fill="#fefefe" opacity="1" stroke-width="0" stroke="none"
                                        stroke-dasharray="0" className="apexcharts-zoom-rect"></rect>
                                    <rect id="SvgjsRect3318" width="0" height="0" x="0" y="0" rx="0"
                                        ry="0" fill="#fefefe" opacity="1" stroke-width="0" stroke="none"
                                        stroke-dasharray="0" className="apexcharts-selection-rect"></rect>
                                                </g >
                                <g id="SvgjsG3270" className="apexcharts-yaxis" rel="0"
                                    transform="translate(31.83333333333333, 0)">
                                    <g id="SvgjsG3271" className="apexcharts-yaxis-texts-g"><text
                                        id="SvgjsText3272"
                                        font-family="Helvetica, Arial, sans-serif" x="20" y="41.8"
                                        text-anchor="end" dominate-baseline="central"
                                        font-size="11" fill="#373d3f"
                                        className="apexcharts-yaxis-label apexcharts-yaxis-label"
                                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>120</text><text
                                            id="SvgjsText3273"
                                            font-family="Helvetica, Arial, sans-serif" x="20"
                                            y="78.5685" text-anchor="end" dominate-baseline="central"
                                            font-size="11" fill="#373d3f"
                                            className="apexcharts-yaxis-label apexcharts-yaxis-label"
                                            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>100</text><text
                                                id="SvgjsText3274"
                                                font-family="Helvetica, Arial, sans-serif" x="20"
                                                y="115.337" text-anchor="end" dominate-baseline="central"
                                                font-size="11" fill="#373d3f"
                                                className="apexcharts-yaxis-label apexcharts-yaxis-label"
                                                style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>80</text><text
                                                    id="SvgjsText3275"
                                                    font-family="Helvetica, Arial, sans-serif" x="20"
                                                    y="152.1055" text-anchor="end" dominate-baseline="central"
                                                    font-size="11" fill="#373d3f"
                                                    className="apexcharts-yaxis-label apexcharts-yaxis-label"
                                                    style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>60</text><text
                                                        id="SvgjsText3276"
                                                        font-family="Helvetica, Arial, sans-serif" x="20"
                                                        y="188.87400000000002" text-anchor="end"
                                                        dominate-baseline="central" font-size="11" fill="#373d3f"
                                                        className="apexcharts-yaxis-label apexcharts-yaxis-label"
                                                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>40</text><text
                                                            id="SvgjsText3277"
                                                            font-family="Helvetica, Arial, sans-serif" x="20"
                                                            y="225.64250000000004" text-anchor="end"
                                                            dominate-baseline="central" font-size="11" fill="#373d3f"
                                                            className="apexcharts-yaxis-label apexcharts-yaxis-label"
                                                            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>30</text><text
                                                                id="SvgjsText3278"
                                                                font-family="Helvetica, Arial, sans-serif" x="20"
                                                                y="262.41100000000006" text-anchor="end"
                                                                dominate-baseline="central" font-size="11" fill="#373d3f"
                                                                className="apexcharts-yaxis-label apexcharts-yaxis-label"
                                                                style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>20</text><text
                                                                    id="SvgjsText3279"
                                                                    font-family="Helvetica, Arial, sans-serif" x="20"
                                                                    y="299.1795000000001" text-anchor="end"
                                                                    dominate-baseline="central" font-size="11" fill="#373d3f"
                                                                    className="apexcharts-yaxis-label apexcharts-yaxis-label"
                                                                    style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>10</text><text
                                                                        id="SvgjsText3280"
                                                                        font-family="Helvetica, Arial, sans-serif" x="20"
                                                                        y="335.9480000000001" text-anchor="end"
                                                                        dominate-baseline="central" font-size="11" fill="#373d3f"
                                                                        className="apexcharts-yaxis-label apexcharts-yaxis-label"
                                                                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>0</text>
                                    </g>
                                    <g id="SvgjsG3281" className="apexcharts-yaxis-title"><text
                                        id="SvgjsText3282"
                                        font-family="Helvetica, Arial, sans-serif" x="19.4453125"
                                        y="186.674" text-anchor="end" dominate-baseline="central"
                                        font-size="11" fill="#373d3f"
                                        className="apexcharts-yaxis-title-text apexcharts-yaxis-title"
                                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                                        transform="rotate(-90 -13.359375 182.6796875)">Latency
                                                            (Average) : 50.98</text></g>
                                </g>

                                            </svg >


                        </div >
                    </div >

                </div >
            </div >
                        </div >
            <div className="col-sm-12 col-lg-5">
                <div className="mb-3 card">
                    <div className="card-header-tab card-header">
                        <div className="card-header-title font-size-lg text-capitalize font-weight-normal">Lact
                                        Week</div>
                    </div>
                    <div className="pt-0 card-body" style="position: relative;">
                        <div id="chart-combined" style="min-height: 411;">
                            <div id="apexcharts2tky3ns5"
                                className="apexcharts-canvas apexcharts2tky3ns5 zoomable"
                                style="width: 900; height: 397;"><svg id="SvgjsSvg3172" width="400"
                                    height="397" xmlns="http://www.w3.org/2000/svg" version="1.1"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                xmlns:svgjs="http://svgjs.com/svgjs"
                                                className="apexcharts-svg hovering-zoom" xmlns:data="ApexChartsNS"
                                                transform="translate(0, 0)" style="background: transparent;">
                                                <foreignObject x="0" y="0" width="400" height="397">
                                    <div className="apexcharts-legend center position-bottom"
                                        xmlns="http://www.w3.org/1999/xhtml"
                                        style="right: 0; position: absolute; left: 0; top: auto; bottom: 10;">
                                        <div className="apexcharts-legend-series" rel="1"
                                            data: <span
                                            className="apexcharts-legend-marker" rel="1"
                                            data:collapsed="false"
                                                                style="background: rgb(0, 143, 251); color: rgb(0, 143, 251); height: 12; width: 12; left: 0; top: 0; border-width: 0; border-color: rgb(255, 255, 255); border-radius: 12;"></span><span
                                        className="apexcharts-legend-text" rel="1"
                                        data:collapsed="false"
                                                                style={{color: rgb(55, 61, 63); font-family: Helvetica, Arial, sans-serif}}>Latency

                                                            </span></div>



                        </div>
                        <style type="text/css">
                            .apexcharts-legend {
                                display: flex;
                                                            overflow: auto;
                                                            padding: 0 10;
                                                        }

                                                        .apexcharts-legend.position-bottom,
                                                        .apexcharts-legend.position-top {
                                flex - wrap: wrap
                                                        }

                                                        .apexcharts-legend.position-right,
                                                        .apexcharts-legend.position-left {
                                flex - direction: column;
                                                            bottom: 0;
                                                        }

                                                        .apexcharts-legend.position-bottom.left,
                                                        .apexcharts-legend.position-top.left,
                                                        .apexcharts-legend.position-right,
                                                        .apexcharts-legend.position-left {
                                justify - content: flex-start;
                                                        }

                                                        .apexcharts-legend.position-bottom.center,
                                                        .apexcharts-legend.position-top.center {
                                justify - content: center;
                                                        }

                                                        .apexcharts-legend.position-bottom.right,
                                                        .apexcharts-legend.position-top.right {
                                justify - content: flex-end;
                                                        }

                                                        .apexcharts-legend-series {
                                cursor: pointer;
                                                        }

                                                        .apexcharts-legend.position-bottom .apexcharts-legend-series,
                                                        .apexcharts-legend.position-top .apexcharts-legend-series {
                                display: flex;
                                                            align-items: center;
                                                        }

                                                        .apexcharts-legend-text {
                                position: relative;
                                                            font-size: 14;
                                                        }

                                                        .apexcharts-legend-marker {
                                position: relative;
                                                            display: inline-block;
                                                            cursor: pointer;
                                                            margin-right: 3;
                                                        }

                                                        .apexcharts-legend.right .apexcharts-legend-series,
                                                        .apexcharts-legend.left .apexcharts-legend-series {
                                display: inline-block;
                                                        }

                                                        .apexcharts-legend-series.no-click {
                                cursor: auto;
                                                        }

                                                        .apexcharts-legend .apexcharts-hidden-zero-series {
                                display: none !important;
                                                        }

                                                        .inactive-legend {
                                opacity: 0.45;
                                                        }
                                                    </style>
                                                </foreignObject>
                    <g id="SvgjsG3174" className="apexcharts-inner apexcharts-graphical"
                        transform="translate(71.19270833333333, 40)">
                        <defs id="SvgjsDefs3173">
                            <clipPath id="gridRectMask2tky3ns5">
                                <rect id="SvgjsRect3197" width="490.390625" height="297.348"
                                    x="-2" y="-2" rx="0" ry="0" fill="#ffffff" opacity="1"
                                    stroke-width="0" stroke="none" stroke-dasharray="0">
                                </rect>
                            </clipPath>
                            <clipPath id="gridRectMarkerMask2tky3ns5">
                                <rect id="SvgjsRect3198" width="504.390625" height="311.348"
                                    x="-9" y="-9" rx="0" ry="0" fill="#ffffff" opacity="1"
                                    stroke-width="0" stroke="none" stroke-dasharray="0">
                                </rect>
                            </clipPath>
                        </defs>
                        <rect id="SvgjsRect3180" width="1" height="293.348"
                            x="389.0259271863844" y="0" rx="0" ry="0" fill="#b1b9c4"
                            opacity="1" stroke-width="0" stroke-dasharray="0"
                            className="apexcharts-xcrosshairs" filter="none" fill-opacity="0.9">
                        </rect>
                        <g id="SvgjsG3255" className="apexcharts-xaxis"
                            transform="translate(0, 0)">
                            <g id="SvgjsG3256" className="apexcharts-xaxis-texts-g"
                                transform="translate(0, -4)"><text id="SvgjsText3257"
                                    font-family="Helvetica, Arial, sans-serif"
                                    x="26.162189139384022" y="322.348" text-anchor="middle"
                                    dominate-baseline="central" font-size="12"
                                    fill="#373d3f"
                                    className="apexcharts-xaxis-label apexcharts-xaxis-label"
                                    style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                                    <tspan id="SvgjsTspan3258"
                                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                                        Jan '00</tspan>
                                    <title>Jan '00</title>
                                </text><text id="SvgjsText3259"
                                    font-family="Helvetica, Arial, sans-serif"
                                    x="109.8811943854129" y="322.348" text-anchor="middle"
                                    dominate-baseline="central" font-size="12"
                                    fill="#373d3f"
                                    className="apexcharts-xaxis-label apexcharts-xaxis-label"
                                    style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                                    <tspan id="SvgjsTspan3260"
                                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                                        03 Jan</tspan>
                                    <title>03 Jan</title>
                                </text><text id="SvgjsText3261"
                                    font-family="Helvetica, Arial, sans-serif"
                                    x="193.60019963144177" y="322.348" text-anchor="middle"
                                    dominate-baseline="central" font-size="12"
                                    fill="#373d3f"
                                    className="apexcharts-xaxis-label apexcharts-xaxis-label"
                                    style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                                    <tspan id="SvgjsTspan3262"
                                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                                        05 Jan</tspan>
                                    <title>05 Jan</title>
                                </text><text id="SvgjsText3263"
                                    font-family="Helvetica, Arial, sans-serif"
                                    x="277.3192048774706" y="322.348" text-anchor="middle"
                                    dominate-baseline="central" font-size="12"
                                    fill="#373d3f"
                                    className="apexcharts-xaxis-label apexcharts-xaxis-label"
                                    style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                                    <tspan id="SvgjsTspan3264"
                                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                                        07 Jan</tspan>
                                    <title>07 Jan</title>
                                </text><text id="SvgjsText3265"
                                    font-family="Helvetica, Arial, sans-serif"
                                    x="361.03821012349954" y="322.348" text-anchor="middle"
                                    dominate-baseline="central" font-size="12"
                                    fill="#373d3f"
                                    className="apexcharts-xaxis-label apexcharts-xaxis-label"
                                    style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                                    <tspan id="SvgjsTspan3266"
                                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                                        09 Jan</tspan>
                                    <title>09 Jan</title>
                                </text><text id="SvgjsText3267"
                                    font-family="Helvetica, Arial, sans-serif"
                                    x="444.75721536952847" y="322.348" text-anchor="middle"
                                    dominate-baseline="central" font-size="12"
                                    fill="#373d3f"
                                    className="apexcharts-xaxis-label apexcharts-xaxis-label"
                                    style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                                    <tspan id="SvgjsTspan3268"
                                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                                        11 Jan</tspan>
                                    <title>11 Jan</title>
                                </text></g>
                            <line id="SvgjsLine3269" x1="0" y1="294.348" x2="486.390625"
                                y2="294.348" stroke="#78909c" stroke-dasharray="0"
                                stroke-width="1"></line>
                        </g>
                        <g id="SvgjsG3294" className="apexcharts-grid">
                            <line id="SvgjsLine3295" x1="26.162189139384022" y1="294.348"
                                x2="26.162189139384022" y2="300.348" stroke="#78909c"
                                stroke-dasharray="0" className="apexcharts-xaxis-tick"></line>
                            <line id="SvgjsLine3296" x1="109.8811943854129" y1="294.348"
                                x2="109.8811943854129" y2="300.348" stroke="#78909c"
                                stroke-dasharray="0" className="apexcharts-xaxis-tick"></line>
                            <line id="SvgjsLine3297" x1="193.60019963144177" y1="294.348"
                                x2="193.60019963144177" y2="300.348" stroke="#78909c"
                                stroke-dasharray="0" className="apexcharts-xaxis-tick"></line>
                            <line id="SvgjsLine3298" x1="277.3192048774706" y1="294.348"
                                x2="277.3192048774706" y2="300.348" stroke="#78909c"
                                stroke-dasharray="0" className="apexcharts-xaxis-tick"></line>
                            <line id="SvgjsLine3299" x1="361.03821012349954" y1="294.348"
                                x2="361.03821012349954" y2="300.348" stroke="#78909c"
                                stroke-dasharray="0" className="apexcharts-xaxis-tick"></line>
                            <line id="SvgjsLine3300" x1="444.75721536952847" y1="294.348"
                                x2="444.75721536952847" y2="300.348" stroke="#78909c"
                                stroke-dasharray="0" className="apexcharts-xaxis-tick"></line>
                            <line id="SvgjsLine3301" x1="0" y1="0" x2="486.390625" y2="0"
                                stroke="#e0e0e0" stroke-dasharray="0"
                                className="apexcharts-gridline"></line>
                            <line id="SvgjsLine3302" x1="0" y1="36.6685" x2="486.390625"
                                y2="36.6685" stroke="#e0e0e0" stroke-dasharray="0"
                                className="apexcharts-gridline"></line>
                            <line id="SvgjsLine3303" x1="0" y1="73.337" x2="486.390625"
                                y2="73.337" stroke="#e0e0e0" stroke-dasharray="0"
                                className="apexcharts-gridline"></line>
                            <line id="SvgjsLine3304" x1="0" y1="110.00550000000001"
                                x2="486.390625" y2="110.00550000000001" stroke="#e0e0e0"
                                stroke-dasharray="0" className="apexcharts-gridline"></line>
                            <line id="SvgjsLine3305" x1="0" y1="146.674" x2="486.390625"
                                y2="146.674" stroke="#e0e0e0" stroke-dasharray="0"
                                className="apexcharts-gridline"></line>
                            <line id="SvgjsLine3306" x1="0" y1="183.3425" x2="486.390625"
                                y2="183.3425" stroke="#e0e0e0" stroke-dasharray="0"
                                className="apexcharts-gridline"></line>
                            <line id="SvgjsLine3307" x1="0" y1="220.011" x2="486.390625"
                                y2="220.011" stroke="#e0e0e0" stroke-dasharray="0"
                                className="apexcharts-gridline"></line>
                            <line id="SvgjsLine3308" x1="0" y1="256.6795" x2="486.390625"
                                y2="256.6795" stroke="#e0e0e0" stroke-dasharray="0"
                                className="apexcharts-gridline"></line>
                            <line id="SvgjsLine3309" x1="0" y1="293.348" x2="486.390625"
                                y2="293.348" stroke="#e0e0e0" stroke-dasharray="0"
                                className="apexcharts-gridline"></line>
                            <line id="SvgjsLine3311" x1="0" y1="293.348" x2="486.390625"
                                y2="293.348" stroke="transparent" stroke-dasharray="0">
                            </line>
                            <line id="SvgjsLine3310" x1="0" y1="1" x2="0" y2="293.348"
                                stroke="transparent" stroke-dasharray="0"></line>
                        </g>

                        <g id="SvgjsG3227"
                            className="apexcharts-line-series apexcharts-plot-series">
                            <g id="SvgjsG3228" className="apexcharts-series Social-Media"
                                data:longestseries="true" rel="1" data:realindex="1">
                                                            <path id="apexcharts-line-0"
                                d="M 12.790403579254411 152.78541666666666L 54.64990620226885 36.668499999999995L 96.50940882528329 79.44841666666665L 138.36891144829772 128.33974999999998L 180.22841407131216 30.55708333333331L 222.0879166943266 158.89683333333332L 263.94741931734103 189.45391666666666L 305.8069219403555 103.89408333333333L 347.6664245633699 158.89683333333332L 389.52592718638437 158.89683333333332L 431.3854298093988 220.01100000000002L 473.24493243241324 195.56533333333334"
                                fill="none" fill-opacity="1"
                                stroke="rgba(0,227,150,0.85)" stroke-opacity="1"
                                stroke-linecap="butt" stroke-width="4"
                                stroke-dasharray="0" className="apexcharts-line" index="1"
                                clip-path="url(#gridRectMask2tky3ns5)"
                                pathto="M 12.790403579254411 152.78541666666666L 54.64990620226885 36.668499999999995L 96.50940882528329 79.44841666666665L 138.36891144829772 128.33974999999998L 180.22841407131216 30.55708333333331L 222.0879166943266 158.89683333333332L 263.94741931734103 189.45391666666666L 305.8069219403555 103.89408333333333L 347.6664245633699 158.89683333333332L 389.52592718638437 158.89683333333332L 431.3854298093988 220.01100000000002L 473.24493243241324 195.56533333333334"
                                pathfrom="M -1 293.348L -1 293.348L 54.64990620226885 293.348L 96.50940882528329 293.348L 138.36891144829772 293.348L 180.22841407131216 293.348L 222.0879166943266 293.348L 263.94741931734103 293.348L 305.8069219403555 293.348L 347.6664245633699 293.348L 389.52592718638437 293.348L 431.3854298093988 293.348L 473.24493243241324 293.348">
                            </path>
                            <g id="SvgjsG3229" className="apexcharts-series-markers-wrap">
                                <g id="SvgjsG3231" className="apexcharts-series-markers"
                                    clip-path="url(#gridRectMarkerMask2tky3ns5)">
                                    <circle id="SvgjsCircle3232" r="5"
                                        cx="12.790403579254411" cy="152.78541666666666"
                                        className="apexcharts-marker w0rmkaat0f"
                                        stroke="#ffffff" fill="#00e396" fill-opacity="1"
                                        stroke-width="2" stroke-opacity="0.9" rel="0"
                                        j="0" index="1" default-marker-size="5">
                                    </circle>
                                    <circle id="SvgjsCircle3233" r="5"
                                        cx="54.64990620226885" cy="36.668499999999995"
                                        className="apexcharts-marker w6uy6d9qc"
                                        stroke="#ffffff" fill="#00e396" fill-opacity="1"
                                        stroke-width="2" stroke-opacity="0.9" rel="1"
                                        j="1" index="1" default-marker-size="5">
                                    </circle>
                                </g>
                                <g id="SvgjsG3234" className="apexcharts-series-markers"
                                    clip-path="url(#gridRectMarkerMask2tky3ns5)">
                                    <circle id="SvgjsCircle3235" r="5"
                                        cx="96.50940882528329" cy="79.44841666666665"
                                        className="apexcharts-marker whickg53v"
                                        stroke="#ffffff" fill="#00e396" fill-opacity="1"
                                        stroke-width="2" stroke-opacity="0.9" rel="2"
                                        j="2" index="1" default-marker-size="5">
                                    </circle>
                                </g>
                                <g id="SvgjsG3236" className="apexcharts-series-markers"
                                    clip-path="url(#gridRectMarkerMask2tky3ns5)">
                                    <circle id="SvgjsCircle3237" r="5"
                                        cx="138.36891144829772" cy="128.33974999999998"
                                        className="apexcharts-marker wucu8srwf"
                                        stroke="#ffffff" fill="#00e396" fill-opacity="1"
                                        stroke-width="2" stroke-opacity="0.9" rel="3"
                                        j="3" index="1" default-marker-size="5">
                                    </circle>
                                </g>
                                <g id="SvgjsG3238" className="apexcharts-series-markers"
                                    clip-path="url(#gridRectMarkerMask2tky3ns5)">
                                    <circle id="SvgjsCircle3239" r="5"
                                        cx="180.22841407131216" cy="30.55708333333331"
                                        className="apexcharts-marker wn8c1v0lr"
                                        stroke="#ffffff" fill="#00e396" fill-opacity="1"
                                        stroke-width="2" stroke-opacity="0.9" rel="4"
                                        j="4" index="1" default-marker-size="5">
                                    </circle>
                                </g>
                                <g id="SvgjsG3240" className="apexcharts-series-markers"
                                    clip-path="url(#gridRectMarkerMask2tky3ns5)">
                                    <circle id="SvgjsCircle3241" r="5"
                                        cx="222.0879166943266" cy="158.89683333333332"
                                        className="apexcharts-marker wsrih354b"
                                        stroke="#ffffff" fill="#00e396" fill-opacity="1"
                                        stroke-width="2" stroke-opacity="0.9" rel="5"
                                        j="5" index="1" default-marker-size="5">
                                    </circle>
                                </g>
                                <g id="SvgjsG3242" className="apexcharts-series-markers"
                                    clip-path="url(#gridRectMarkerMask2tky3ns5)">
                                    <circle id="SvgjsCircle3243" r="5"
                                        cx="263.94741931734103" cy="189.45391666666666"
                                        className="apexcharts-marker w71l29mer"
                                        stroke="#ffffff" fill="#00e396" fill-opacity="1"
                                        stroke-width="2" stroke-opacity="0.9" rel="6"
                                        j="6" index="1" default-marker-size="5">
                                    </circle>
                                </g>
                                <g id="SvgjsG3244" className="apexcharts-series-markers"
                                    clip-path="url(#gridRectMarkerMask2tky3ns5)">
                                    <circle id="SvgjsCircle3245" r="5"
                                        cx="305.8069219403555" cy="103.89408333333333"
                                        className="apexcharts-marker wzz55285g"
                                        stroke="#ffffff" fill="#00e396" fill-opacity="1"
                                        stroke-width="2" stroke-opacity="0.9" rel="7"
                                        j="7" index="1" default-marker-size="5">
                                    </circle>
                                </g>
                                <g id="SvgjsG3246" className="apexcharts-series-markers"
                                    clip-path="url(#gridRectMarkerMask2tky3ns5)">
                                    <circle id="SvgjsCircle3247" r="5"
                                        cx="347.6664245633699" cy="158.89683333333332"
                                        className="apexcharts-marker w95v9qrvlk"
                                        stroke="#ffffff" fill="#00e396" fill-opacity="1"
                                        stroke-width="2" stroke-opacity="0.9" rel="8"
                                        j="8" index="1" default-marker-size="5">
                                    </circle>
                                </g>
                                <g id="SvgjsG3248" className="apexcharts-series-markers"
                                    clip-path="url(#gridRectMarkerMask2tky3ns5)">
                                    <circle id="SvgjsCircle3249" r="5"
                                        cx="389.52592718638437" cy="158.89683333333332"
                                        className="apexcharts-marker w3hd8soe6i"
                                        stroke="#ffffff" fill="#00e396" fill-opacity="1"
                                        stroke-width="2" stroke-opacity="0.9" rel="9"
                                        j="9" index="1" default-marker-size="5">
                                    </circle>
                                </g>
                                <g id="SvgjsG3250" className="apexcharts-series-markers"
                                    clip-path="url(#gridRectMarkerMask2tky3ns5)">
                                    <circle id="SvgjsCircle3251" r="5"
                                        cx="431.3854298093988" cy="220.01100000000002"
                                        className="apexcharts-marker wji9rdc2y"
                                        stroke="#ffffff" fill="#00e396" fill-opacity="1"
                                        stroke-width="2" stroke-opacity="0.9" rel="10"
                                        j="10" index="1" default-marker-size="5">
                                    </circle>
                                </g>
                                <g id="SvgjsG3252" className="apexcharts-series-markers"
                                    clip-path="url(#gridRectMarkerMask2tky3ns5)">
                                    <circle id="SvgjsCircle3253" r="5"
                                        cx="473.24493243241324" cy="195.56533333333334"
                                        className="apexcharts-marker w33bsnda6"
                                        stroke="#ffffff" fill="#00e396" fill-opacity="1"
                                        stroke-width="2" stroke-opacity="0.9" rel="11"
                                        j="11" index="1" default-marker-size="5">
                                    </circle>
                                </g>
                            </g>
                            <g id="SvgjsG3230" className="apexcharts-datalabels"></g>
                        </g>
                    </g>
                    <line id="SvgjsLine3312" x1="0" y1="0" x2="486.390625" y2="0"
                        stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1"
                        className="apexcharts-ycrosshairs"></line>
                    <line id="SvgjsLine3313" x1="0" y1="0" x2="486.390625" y2="0"
                        stroke-dasharray="0" stroke-width="0"
                        className="apexcharts-ycrosshairs-hidden"></line>
                    <g id="SvgjsG3314" className="apexcharts-yaxis-annotations"></g>
                    <g id="SvgjsG3315" className="apexcharts-xaxis-annotations"></g>
                    <g id="SvgjsG3316" className="apexcharts-point-annotations"></g>
                    <rect id="SvgjsRect3317" width="0" height="0" x="0" y="0" rx="0"
                        ry="0" fill="#fefefe" opacity="1" stroke-width="0" stroke="none"
                        stroke-dasharray="0" className="apexcharts-zoom-rect"></rect>
                    <rect id="SvgjsRect3318" width="0" height="0" x="0" y="0" rx="0"
                        ry="0" fill="#fefefe" opacity="1" stroke-width="0" stroke="none"
                        stroke-dasharray="0" className="apexcharts-selection-rect"></rect>
                                                </g>
                <g id="SvgjsG3270" className="apexcharts-yaxis" rel="0"
                    transform="translate(31.83333333333333, 0)">
                    <g id="SvgjsG3271" className="apexcharts-yaxis-texts-g"><text
                        id="SvgjsText3272"
                        font-family="Helvetica, Arial, sans-serif" x="20" y="41.8"
                        text-anchor="end" dominate-baseline="central"
                        font-size="11" fill="#373d3f"
                        className="apexcharts-yaxis-label apexcharts-yaxis-label"
                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>120</text><text
                            id="SvgjsText3273"
                            font-family="Helvetica, Arial, sans-serif" x="20"
                            y="78.5685" text-anchor="end" dominate-baseline="central"
                            font-size="11" fill="#373d3f"
                            className="apexcharts-yaxis-label apexcharts-yaxis-label"
                            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>100</text><text
                                id="SvgjsText3274"
                                font-family="Helvetica, Arial, sans-serif" x="20"
                                y="115.337" text-anchor="end" dominate-baseline="central"
                                font-size="11" fill="#373d3f"
                                className="apexcharts-yaxis-label apexcharts-yaxis-label"
                                style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>80</text><text
                                    id="SvgjsText3275"
                                    font-family="Helvetica, Arial, sans-serif" x="20"
                                    y="152.1055" text-anchor="end" dominate-baseline="central"
                                    font-size="11" fill="#373d3f"
                                    className="apexcharts-yaxis-label apexcharts-yaxis-label"
                                    style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>60</text><text
                                        id="SvgjsText3276"
                                        font-family="Helvetica, Arial, sans-serif" x="20"
                                        y="188.87400000000002" text-anchor="end"
                                        dominate-baseline="central" font-size="11" fill="#373d3f"
                                        className="apexcharts-yaxis-label apexcharts-yaxis-label"
                                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>40</text><text
                                            id="SvgjsText3277"
                                            font-family="Helvetica, Arial, sans-serif" x="20"
                                            y="225.64250000000004" text-anchor="end"
                                            dominate-baseline="central" font-size="11" fill="#373d3f"
                                            className="apexcharts-yaxis-label apexcharts-yaxis-label"
                                            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>30</text><text
                                                id="SvgjsText3278"
                                                font-family="Helvetica, Arial, sans-serif" x="20"
                                                y="262.41100000000006" text-anchor="end"
                                                dominate-baseline="central" font-size="11" fill="#373d3f"
                                                className="apexcharts-yaxis-label apexcharts-yaxis-label"
                                                style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>20</text><text
                                                    id="SvgjsText3279"
                                                    font-family="Helvetica, Arial, sans-serif" x="20"
                                                    y="299.1795000000001" text-anchor="end"
                                                    dominate-baseline="central" font-size="11" fill="#373d3f"
                                                    className="apexcharts-yaxis-label apexcharts-yaxis-label"
                                                    style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>10</text><text
                                                        id="SvgjsText3280"
                                                        font-family="Helvetica, Arial, sans-serif" x="20"
                                                        y="335.9480000000001" text-anchor="end"
                                                        dominate-baseline="central" font-size="11" fill="#373d3f"
                                                        className="apexcharts-yaxis-label apexcharts-yaxis-label"
                                                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>0</text>
                    </g>
                    <g id="SvgjsG3281" className="apexcharts-yaxis-title"><text
                        id="SvgjsText3282"
                        font-family="Helvetica, Arial, sans-serif" x="19.4453125"
                        y="186.674" text-anchor="end" dominate-baseline="central"
                        font-size="11" fill="#373d3f"
                        className="apexcharts-yaxis-title-text apexcharts-yaxis-title"
                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                        transform="rotate(-90 -13.359375 182.6796875)">Latency
                                                            (Average) : 50.98</text></g>
                </g> 

                                            </svg>
*/}
                {/* </div >
                    </div >

                </div > */}


            </>
        )
    }
}