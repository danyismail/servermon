import React from 'react'
import axios from 'axios'
import { api } from './Constants'

export default class Config extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            config: [],
            isLoading: false
        }
    }

    componentDidMount() {
        this.setState({ isLoading: false });
        axios.defaults.withCredentials = true;
        axios.get(api() + '/config')
            .then(response => {
                console.log(response.data.data);
                this.setState({ config: response.data.data, isLoading: false });
            })
            .catch(error => {
                console.log(error);
            })
    }
    render() {
        return (
            <>
                <div class="app-page-title">
                    <div class="page-title-wrapper">
                        <div class="page-title-heading">
                            <div class="page-title-icon">
                                <i class="nav-link-icon fa fa-cogs">
                                </i>
                            </div>
                            <div>Form Config
                                    <div class="page-title-subheading"> Form Config
                                    </div>
                            </div>
                        </div>

                    </div>
                </div>
                <ul class="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav">
                    <li class="nav-item">
                        <a role="tab" class="nav-link" id="tab-0" data-toggle="tab" href="#tab-content-0"
                            aria-selected="false">
                            <span>Email</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a role="tab" class="nav-link active show" id="tab-1" data-toggle="tab"
                            href="#tab-content-1" aria-selected="true">
                            <span>General</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a role="tab" class="nav-link active show" id="tab-1" data-toggle="tab" href="#"
                            aria-selected="true">
                            <span>Telegram</span>
                        </a>
                    </li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane tabs-animation fade" id="tab-content-0" role="tabpanel">
                        <div class="main-card mb-3 card">
                            <div class="card-body">
                                <h5 class="card-title">Email Setting</h5>
                                <form class="">


                                    <div class="position-relative form-check"><label class="form-check-label"><input
                                        type="checkbox" class="form-check-input" /> Allow Sending
                                                Email</label>
                                    </div>
                                    <div class="position-relative form-check"><label class="form-check-label"><input
                                        type="checkbox" class="form-check-input" /> Log Emails sent by the
                                            script</label>
                                    </div>
                                    <div class="position-relative row form-group"><label for="examplePassword"
                                        class="col-sm-2 col-form-label">Email from name</label>
                                        <div class="col-sm-10"><input type="text" id="proxy_username"
                                            value="Server Monitor" name="email_from_input" id="examplePassword"
                                            type="password" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="position-relative row form-group"><label for="examplePassword"
                                        class="col-sm-2 col-form-label">Email from address</label>
                                        <div class="col-sm-10"><input type="text" id="proxy_username"
                                            value="monitor@example.org" name="email_from_input"
                                            id="examplePassword" type="password" class="form-control" />
                                        </div>
                                    </div>

                                    <div class="position-relative form-check"><label class="form-check-label"><input
                                        type="checkbox" class="form-check-input" /> Enable SMTP</label>
                                    </div>


                                    <div class="position-relative row form-group"><label for="examplePassword"
                                        class="col-sm-2 col-form-label">SMTP Host</label>
                                        <div class="col-sm-10"><input type="text" id="proxy_username" value=""
                                            name="email_from_input" id="examplePassword" type="password"
                                            class="form-control" />
                                        </div>
                                    </div>
                                    <div class="position-relative row form-group"><label for="examplePassword"
                                        class="col-sm-2 col-form-label">SMTP Port</label>
                                        <div class="col-sm-10"><input type="text" id="proxy_username" value=""
                                            name="email_from_input" id="examplePassword" type="password"
                                            class="form-control" />
                                        </div>
                                    </div>


                                    <div class="position-relative row form-group"><label for="exampleSelect"
                                        class="col-sm-2 col-form-label">SMTP Security</label>
                                        <div class="col-sm-10"><select name="select" id="exampleSelect"
                                            class="form-control">
                                            <option value="status" selected="selected">None</option>
                                            <option value="offline">SSL</option>
                                            <option value="always">TLS</option>
                                        </select></div>
                                    </div>
                                    <div class="position-relative row form-group"><label for="examplePassword"
                                        class="col-sm-2 col-form-label">SMTP Username</label>
                                        <div class="col-sm-10"><input type="text" id="proxy_username" value="admin"
                                            name="password" id="examplePassword"
                                            placeholder="password placeholder" type="password"
                                            class="form-control" />
                                        </div>
                                    </div>
                                    <div class="position-relative row form-group"><label for="examplePassword"
                                        class="col-sm-2 col-form-label">SMTP Password</label>
                                        <div class="col-sm-10"><input type="text" id="proxy_username"
                                            value="********" name="password" id="examplePassword"
                                            type="password" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="position-relative row form-check">
                                        <div class="col-sm-10 offset-sm-2">
                                            <button class="btn btn-secondary">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>



                    <div class="tab-pane tabs-animation fade active show" id="tab-content-1" role="tabpanel">
                        <div class="main-card mb-3 card">
                            <div class="card-body">
                                <h5 class="card-title">General Setting</h5>
                                <form class="">

                                    <div class="position-relative row form-group"><label for="exampleSelect"
                                        class="col-sm-2 col-form-label">Language</label>
                                        <div class="col-sm-10"><select name="select" id="exampleSelect"
                                            class="form-control">
                                            <option value="bg_BG">Български - Bulgarian</option>
                                            <option value="cs_CZ">Česky - Czech</option>
                                            <option value="da_DK">Dansk - Danish</option>
                                            <option value="de_DE">Deutsch - German</option>
                                            <option value="en_US" selected="selected">English</option>
                                            <option value="es_ES">Español - Spanish</option>
                                            <option value="et_ET">Estonian - Eesti keel</option>
                                            <option value="fa_IR">فارسی - Persian</option>
                                            <option value="fi_FI">Suomi - Finnish</option>
                                            <option value="fr_FR">Français - French</option>
                                            <option value="it_IT">Italiano - Italian</option>
                                            <option value="ko_KR">한국 - Korean</option>
                                            <option value="nl_NL">Nederlands - Dutch</option>
                                            <option value="pl_PL">Polski - Polish</option>
                                            <option value="pt_BR">Português - Brazilian Portuguese</option>
                                            <option value="ru_RU">Russian - Русский</option>
                                            <option value="sk_SK">Slovensky - Slovak</option>
                                            <option value="sl_SI">Slovenščina - Slovenian</option>
                                            <option value="sv_SE">Svenska - Swedish</option>
                                            <option value="tr_TR">Türkçe - Turkish</option>
                                            <option value="vi_VN">Tiếng Việt</option>
                                            <option value="zh_CN">中文 - Chinese</option>
                                        </select></div>
                                    </div>
                                    <div class="position-relative form-check"><label class="form-check-label"><input
                                        type="checkbox" class="form-check-input" /> Check for update?</label>
                                    </div>

                                    <div class="position-relative row form-group"><label for="examplePassword"
                                        class="col-sm-2 col-form-label">Auto-refresh</label>
                                        <div class="col-sm-10">
                                            <input type="text" id="Auto-refresh" value="1" class="form-control"
                                                data-toggle="tooltip" data-placement="top" title=""
                                                data-original-title="Time in seconds, if 0 the page won't refresh" />
                                        </div>
                                    </div>



                                    <h5 class="card-title">Notification Settings</h5>
                                    <div class="position-relative row form-group"><label for="exampleSelect"
                                        class="col-sm-2 col-form-label">Select when you'd like to be
                                                notified.</label>
                                        <div class="col-sm-10"><select name="select" id="exampleSelect"
                                            class="form-control">
                                            <option value="status" selected="selected">Status change</option>
                                            <option value="offline">Offline</option>
                                            <option value="always">Always</option>
                                        </select></div>


                                    </div>
                                    <small class="form-text text-muted"><b>Status change:</b> You will receive a
                                            notifcation
                                            when a server has a change in status. So from online -&gt; offline or
                                            offline -&gt; online.<br /><br /><b>Offline:</b> You will receive a
                                            notification when a server goes offline for the *FIRST TIME ONLY*. For
                                            example, your cronjob is every 15 mins and your server goes down at 1 am
                                            and stays down till 6 am. You will get 1 notification at 1 am and thats
                                            it.<br /><br /><b>Always:</b> You will receive a notification every time the
                                            script runs and a site is down, even if the site has been offline for
                                            hours.</small>
                                    <br />
                                    <h5 class="card-title">Log Settings</h5>
                                    <div class="position-relative form-check"><label class="form-check-label"><input
                                        type="checkbox" class="form-check-input" /> Log Status</label>
                                    </div>
                                    <div class="position-relative row form-group"><label for="examplePassword"
                                        class="col-sm-2 col-form-label">Log retention period</label>
                                        <div class="col-sm-10">
                                            <input type="text" id="Auto-refresh" value="365" class="form-control"
                                                data-toggle="tooltip" data-placement="top" title=""
                                                data-original-title="Number of days to keep logs of notifications and archives of server uptime. Enter 0 to disable log cleanup." />
                                        </div>
                                    </div>

                                    <h5 class="card-title">Proxy Setting</h5>
                                    <div class="position-relative form-check"><label class="form-check-label"><input
                                        type="checkbox" class="form-check-input" /> Enable Proxyy</label>
                                        <small class="form-text text-muted"><b>Even if enabled, procy is never
                                        used
                                                    for services</b></small>
                                    </div>
                                    <br />
                                    <div class="position-relative row form-group"><label for="examplePassword"
                                        class="col-sm-2 col-form-label">Proxy URL</label>
                                        <div class="col-sm-10"><input name="password" id="examplePassword"
                                            placeholder="" type="password" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="position-relative row form-group"><label for="examplePassword"
                                        class="col-sm-2 col-form-label">Proxy Username</label>
                                        <div class="col-sm-10"><input type="text" id="proxy_username" value="admin"
                                            name="password" id="examplePassword"
                                            placeholder="password placeholder" type="password"
                                            class="form-control" />
                                        </div>
                                    </div>
                                    <div class="position-relative row form-group"><label for="examplePassword"
                                        class="col-sm-2 col-form-label">Proxy Password</label>
                                        <div class="col-sm-10"><input type="text" id="proxy_username"
                                            value="********" name="password" id="examplePassword"
                                            type="password" class="form-control" />
                                        </div>
                                    </div>

                                    <div class="position-relative row form-check">
                                        <div class="col-sm-10 offset-sm-2">
                                            <button class="btn btn-secondary">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}