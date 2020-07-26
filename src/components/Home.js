import React from 'react';
import axios from 'axios';
import './../App.css';
import { Link } from 'react-router-dom';
import { api, formatDate, formatTime } from './Constants';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jaringan: [],
            isLoading: false
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        axios.defaults.withCredentials = true;
        var config = {
            method: 'get',
            url: api() + `/server`
        }
        setInterval(() => {
            axios(config)
                .then(response => {
                    this.setState({ jaringan: response.data.data.servers, isLoading: false });
                    console.log(response.data.data.servers);
                })
                .catch(error => {
                    console.log(error);
                });
        }, 5000)

    }

    render() {
        const { isLoading } = this.state;
        if (isLoading) {
            return (
                <div className="lds-circle"><div className="lds-circle-here"></div></div>
            )
        }
        return (
            <div className="row">
                {this.state.jaringan.map(server =>
                    <div key={server.server_id} className="col-md-2.5 col-xl-2">
                        <Link
                            to={`/server/${server.server_id}`} className="card mb-3 widget-content badge-success">
                            <div className="widget-content-wrapper text-white">
                                <div className="widget-content-left">
                                    <div className="widget-heading">{server.label}</div>
                                    <div className="widget-subheading">Online {formatDate(server.last_online)}</div>
                                    <div className="widget-subheading">Offline {formatDate(server.last_offline)} <br /> {formatTime(server.last_offline)}</div>
                                    <div className="widget-subheading" />
                                </div>
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        )
    }
}