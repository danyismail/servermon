import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Header extends React.Component {

    handleLogout() {
        console.log("Logout kepanggil")
        axios.defaults.withCredentials = true;
        axios.delete("http://dev.beacukai.go.id:9012/logout", document.cookie)
            .then(response => {
                console.log(response);
                document.location = "/login"
            })
            .catch(e => {
                console.log(e.response.data.message)
            })
    }


    render() {
        return (
            <div className="app-header header-shadow">
                <div className="app-header__logo">
                    <div className="logo-src" />
                    <div className="header__pane ml-auto">
                        <div>
                            <button type="button" className="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
                                <span className="hamburger-box">
                                    <span className="hamburger-inner" />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="app-header__mobile-menu">
                    <div>
                        <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
                            <span className="hamburger-box">
                                <span className="hamburger-inner" />
                            </span>
                        </button>
                    </div>
                </div>
                <div className="app-header__menu">
                    <span>
                        <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                            <span className="btn-icon-wrapper">
                                <i className="fa fa-ellipsis-v fa-w-6" />
                            </span>
                        </button>
                    </span>
                </div>
                <div className="app-header__content">
                    <div className="app-header-left">
                        <div className="search-wrapper">
                            <div className="input-holder">
                                <input type="text" className="search-input" placeholder="Type to search" />
                                <button className="search-icon"><span /></button>
                            </div>
                            <button className="close" />
                        </div>
                        <ul className="header-menu nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    <i className="nav-link-icon fa fa-laptop-house"> </i>
                 Home
               </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/server" className="nav-link">
                                    <i className="nav-link-icon fa fa-desktop"> </i>
                 Server
               </Link>
                            </li>
                            <li className="btn-group nav-item">
                                <Link to="/log" className="nav-link">
                                    <i className="nav-link-icon fa fa-file-alt" />
                 Log
               </Link>
                            </li>
                            <li className="dropdown nav-item">
                                <Link to="/user" className="nav-link">

                                    <i className="nav-link-icon fa fa-user-alt" />
                 Users
               </Link>
                            </li>
                            <li className="dropdown nav-item">
                                <Link to="/config" className="nav-link">
                                    <i className="nav-link-icon fa fa-cogs" />
                 Config
               </Link>
                            </li>
                            <li className="dropdown nav-item">
                                {/* <Link to="" className="nav-link">
                                    <i className="nav-link-icon fa fa-sync-alt" />
                 Update
               </Link> */}
                            </li>
                            <li className="dropdown nav-item">
                                <span className="nav-link" onClick={this.handleLogout}>
                                    <i className="nav-link-icon fa fa-logout" />
                 Logout
               </span>
                            </li>
                        </ul>
                    </div>
                    <div className="app-header-right">
                        <div className="header-btn-lg pr-0">
                            <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                    <div className="widget-content-left">
                                        <div className="btn-group">
                                            <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="p-0 btn">
                                                <img width={42} className="rounded-circle" src="../assets/images/avatars/1.jpg" alt="profile-pic" />
                                                <i className="fa fa-angle-down ml-2 opacity-8" />
                                            </button>

                                            <div role="menu" aria-hidden="true" className="dropdown-menu dropdown-menu-right">
                                                <button className="dropdown-item">User Account</button>
                                                <button className="dropdown-item">Settings</button>
                                                <button onClick={(e) => {
                                                    e.preventDefault()
                                                    console.log("Trigger logout dari profile menu")
                                                }} className="dropdown-item">Logout</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-content-left  ml-3 header-user-info">
                                        <div className="widget-heading">
                                            {this.props.user_name}
                                        </div>
                                        <div className="widget-subheading">
                                            Mitra Infosarana
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user_name: state.user_name,
        servers: state.servers
    }
}

export default connect(mapStateToProps)(Header)