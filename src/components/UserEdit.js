import React from 'react';
import axios from 'axios';
import { api } from './Constants';
import { Link } from 'react-router-dom';

export default class UserEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: [],
            isLoding: false
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        const { match: { params } } = this.props;
        axios.defaults.withCredentials = true;
        axios.get(api() + '/user?userId=' + params.id)
            .then(response => {
                console.log(response.data.data);
                this.setState({ detail: response.data.data, isLoading: false });
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
            <div className="col-md-12">
                <div className="main-card mb-3 card">
                    <div className="card-header">Server
                                <div className="btn-actions-pane-right">

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="main-card mb-3 card">
                                <div className="card-body">
                                    <h5 className="card-title">Username</h5>
                                    <div>
                                        <div className="input-group">
                                            <div className="input-group-prepend"><span
                                                className="input-group-text">Username</span></div>
                                            <input type="username" id="user_name" name="user_name" value="admin"
                                                className="form-control" />
                                        </div>
                                        <br />
                                        <h5 className="card-title">Name</h5>

                                        <div className="input-group">
                                            <div className="input-group-prepend"><span
                                                className="input-group-text">Name</span></div>
                                            <input type="text" id="name" name="name" value="No Name"
                                                className="form-control" />
                                        </div>
                                        <br />
                                        <h5 className="card-title">Level</h5>

                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <button type="button" data-toggle="dropdown"
                                                    aria-haspopup="true" aria-expanded="false"
                                                    className="dropdown-toggle btn btn-secondary">Level</button>
                                                <div tabindex="-1" role="menu" aria-hidden="true"
                                                    className="dropdown-menu" x-placement="top-start">
                                                    {/* style={{ position: absolute, willChange: transform, top: 0, left: 0, transform: translate3d(0, -4, 0) }}> */}
                                                    <h6 tabindex="-1" className="dropdown-header">Level</h6>

                                                    <button type="button" tabindex="0"
                                                        className="dropdown-item">Yes</button>
                                                    <button type="button" tabindex="0"
                                                        className="dropdown-item">No</button>
                                                    <div tabindex="-1" className="dropdown-divider"></div>

                                                </div>
                                            </div>
                                            <input type="text" id="level" name="level" value="Yes"
                                                className="form-control" />
                                        </div>
                                        <br />
                                        <p className="help-block"><b>Administrators</b> have full access: they can
                                                    manage servers, users and edit the global
                                                    configuration.<br /><b>Users</b> can only view and run the updater for
                                                    the servers that have been assigned to them.
                                                    </p>
                                        <br />

                                    </div>
                                </div>
                            </div>
                            <div className="main-card mb-3 card">
                                <div className="card-body">
                                    <h5 className="card-title">Monitoring</h5>

                                    <div className="input-group">
                                        <div className="input-group-prepend"><span className="input-group-text">Pushover
                                                        Key</span></div>
                                        <input type="text" id="name" name="name"
                                            value="u345j1bvynmfkd3yesnb5421fqji99" className="form-control" />
                                    </div>
                                    <br />
                                    <div className="input-group">
                                        <div className="input-group-prepend"><span className="input-group-text">Pushover
                                                        Device</span></div>
                                        <input type="text" id="name" name="name" value="mi5"
                                            className="form-control" />
                                    </div>
                                    <br />
                                    <div className="input-group">
                                        <div className="input-group-prepend"><span
                                            className="input-group-text">Telegram</span></div>
                                        <input type="text" id="name" name="name"
                                            value="u345j1bvynmfkd3yesnb5421fqji99" className="form-control" />
                                    </div>
                                    <br />
                                </div>
                            </div>

                        </div>
                        <div className="col-md-6">
                            <div className="main-card mb-3 card">
                                <div className="card-body">
                                    <h5 className="card-title">Password</h5>
                                    <div>

                                        <div className="input-group">
                                            <div className="input-group-prepend"><span
                                                className="input-group-text">password</span></div>
                                            <input type="password" id="password" name="password"
                                                placeholder="Leave blank to keep unchanged"
                                                className="form-control" />
                                        </div>
                                        <br />
                                        <h5 className="card-title">Password Repeat</h5>

                                        <div className="input-group">
                                            <div className="input-group-prepend"><span
                                                className="input-group-text">password Repeat</span></div>
                                            <input type="password" id="password" name="password"
                                                placeholder="Leave blank to keep unchanged"
                                                className="form-control" />
                                        </div>

                                    Masukkan Ulang Password
                                    <br />
                                        <br />
                                        <h5 className="card-title">Email</h5>

                                        <div className="input-group"><input type="email" id="email" name="email"
                                            value="demo" className="form-control" />
                                            <div className="input-group-append"><span
                                                className="input-group-text">@yourmail.com</span></div>
                                        </div>
                                        <br />
                                        <h5 className="card-title">Mobile</h5>

                                        <div className="input-group">
                                            <div className="input-group-prepend"><span
                                                className="input-group-text">Mobile</span></div>
                                            <input type="number" id="number" name="number"
                                                placeholder="Input your mobile phone" className="form-control" />
                                        </div>
                                        <br />
                                    </div>
                                </div>
                            </div>
                            <div className="main-card mb-3 card">
                                <div className="card-body">
                                    <h5 className="card-title">Pilih Server</h5>
                                    <div className="control-group">
                                        <div className="controls">
                                            <select className="multiselect" multiple="multiple" id="server_id"
                                                name="server_id[]">
                                                {/* style={{ display: none }}> */}
                                                <option value="266"> Perbendaharaan_209</option>
                                                <option value="249"> BAR KIR MADYA 78_2</option>
                                                <option value="250" selected="&quot;selected&quot;"> BAR KIR
                                                            MADYA 78_3</option>
                                                <option value="251"> BAR KIR MADYA 78_4</option>
                                                <option value="185" selected="&quot;selected&quot;">
                                                    BAR_KIR_BATAM_166</option>
                                                <option value="186" selected="&quot;selected&quot;">
                                                    BAR_KIR_BATAM_180</option>
                                                <option value="246" selected="&quot;selected&quot;">
                                                    BAR_KIR_BESAR_2</option>
                                                <option value="238" selected="&quot;selected&quot;">
                                                    BAR_KIR_BESAR_62</option>
                                                <option value="242" selected="&quot;selected&quot;">
                                                    BAR_KIR_BESAR_62_1</option>
                                                <option value="243" selected="&quot;selected&quot;">
                                                    BAR_KIR_BESAR_62_2</option>
                                                <option value="244" selected="&quot;selected&quot;">
                                                    BAR_KIR_BESAR_62_3</option>
                                                <option value="239" selected="&quot;selected&quot;">
                                                    BAR_KIR_BESAR_74</option>
                                                <option value="245" selected="&quot;selected&quot;">
                                                    BAR_KIR_BESAR_74_1</option>
                                                <option value="247" selected="&quot;selected&quot;">
                                                    BAR_KIR_BESAR_74_2</option>
                                                <option value="241"> BAR_KIR_MADYA_78</option>
                                                <option value="211" selected="&quot;selected&quot;"> Ekspor
                                                            Kecil 201</option>
                                                <option value="212" selected="&quot;selected&quot;"> Ekspor
                                                            Kecil 202</option>
                                                <option value="213" selected="&quot;selected&quot;"> Ekspor
                                                            Kecil 203</option>
                                                <option value="214" selected="&quot;selected&quot;"> Ekspor
                                                            Kecil 204</option>
                                                <option value="215" selected="&quot;selected&quot;"> Ekspor
                                                            Kecil 207</option>
                                                <option value="216" selected="&quot;selected&quot;"> Ekspor
                                                            Kecil 208</option>
                                                <option value="217" selected="&quot;selected&quot;"> Ekspor
                                                            Kecil 209</option>
                                                <option value="218" selected="&quot;selected&quot;"> Ekspor
                                                            Kecil 210</option>
                                                <option value="203" selected="&quot;selected&quot;"> Ekspor
                                                            Madya 201</option>
                                                <option value="204" selected="&quot;selected&quot;"> Ekspor
                                                            Madya 202</option>
                                                <option value="205" selected="&quot;selected&quot;"> Ekspor
                                                            Madya 203</option>
                                                <option value="206" selected="&quot;selected&quot;"> Ekspor
                                                            Madya 204</option>
                                                <option value="207" selected="&quot;selected&quot;"> Ekspor
                                                            Madya 207</option>
                                                <option value="208" selected="&quot;selected&quot;"> Ekspor
                                                            Madya 208</option>
                                                <option value="209" selected="&quot;selected&quot;"> Ekspor
                                                            Madya 209</option>
                                                <option value="210" selected="&quot;selected&quot;"> Ekspor
                                                            Madya 210</option>
                                                <option value="219" selected="&quot;selected&quot;"> Ekspor
                                                            Priok 201</option>
                                                <option value="220" selected="&quot;selected&quot;"> Ekspor
                                                            Priok 202</option>
                                                <option value="221" selected="&quot;selected&quot;"> Ekspor
                                                            Priok 203</option>
                                                <option value="222" selected="&quot;selected&quot;"> Ekspor
                                                            Priok 204</option>
                                                <option value="227" selected="&quot;selected&quot;"> Ekspor
                                                            Priok 207</option>
                                                <option value="224" selected="&quot;selected&quot;"> Ekspor
                                                            Priok 208</option>
                                                <option value="225" selected="&quot;selected&quot;"> Ekspor
                                                            Priok 209</option>
                                                <option value="226" selected="&quot;selected&quot;"> Ekspor
                                                            Priok 210</option>
                                                <option value="193" selected="&quot;selected&quot;"> EKSPOR
                                                            PRIOK_202</option>
                                                <option value="194" selected="&quot;selected&quot;"> EKSPOR
                                                            PRIOK_206</option>
                                                <option value="191" selected="&quot;selected&quot;"> EKSPOR
                                                            PRIOK_207</option>
                                                <option value="192" selected="&quot;selected&quot;">
                                                    EKSPOR_PRIOK_201</option>
                                                <option value="275"> ESB_EKSTERNAL 29</option>
                                                <option value="277"> ESB_EKSTERNAL_8081</option>
                                                <option value="278"> ESB_EKSTERNAL_8082 29</option>
                                                <option value="279"> ESB_EKSTERNAL_8083 30</option>
                                                <option value="280"> ESB_EKSTERNAL_8084 33</option>
                                                <option value="281"> ESB_EKSTERNAL_8085 118</option>
                                                <option value="282"> ESB_EKSTERNAL_8087</option>
                                                <option value="283"> ESB_EKSTERNAL_8092</option>
                                                <option value="284"> ESB_EKSTERNAL_9011</option>
                                                <option value="285"> ESB_EKSTERNAL_9080</option>
                                                <option value="286"> ESB_EKSTERNAL_9081</option>
                                                <option value="287"> ESB_EKSTERNAL_9082</option>
                                                <option value="288"> ESB_EKSTERNAL_9083</option>
                                                <option value="289"> ESB_EKSTERNAL_9084</option>
                                                <option value="290"> ESB_EKSTERNAL_9085</option>
                                                <option value="291"> ESB_EKSTERNAL_9086</option>
                                                <option value="292"> ESB_EKSTERNAL_9087</option>
                                                <option value="293"> ESB_EKSTERNAL_9088</option>
                                                <option value="294"> ESB_EKSTERNAL_9089</option>
                                                <option value="276"> ESB_EKS_03 8</option>
                                                <option value="295"> ESB_INTERNAL</option>
                                                <option value="296"> ESB_INTERNAL_8080</option>
                                                <option value="297"> ESB_INTERNAL_8081</option>
                                                <option value="298"> ESB_INTERNAL_8082</option>
                                                <option value="299"> ESB_INTERNAL_8083</option>
                                                <option value="300"> ESB_INTERNAL_8084</option>
                                                <option value="303"> ESB_INTERNAL_8085</option>
                                                <option value="301"> ESB_INTERNAL_87</option>
                                                <option value="75" selected="&quot;selected&quot;"> IDG
                                                            10.241.245.49</option>
                                                <option value="76" selected="&quot;selected&quot;"> IDG
                                                            10.241.245.50</option>
                                                <option value="78" selected="&quot;selected&quot;"> IDG
                                                            10.241.245.91</option>
                                                <option value="74" selected="&quot;selected&quot;"> IDG
                                                            10.241.245.92</option>
                                                <option value="228" selected="&quot;selected&quot;"> Impor
                                                            Madya_201</option>
                                                <option value="133" selected="&quot;selected&quot;"> Impor
                                                            Madya_202</option>
                                                <option value="134" selected="&quot;selected&quot;"> Impor
                                                            Madya_203</option>
                                                <option value="135" selected="&quot;selected&quot;"> Impor
                                                            Madya_204</option>
                                                <option value="136" selected="&quot;selected&quot;"> Impor
                                                            Madya_207</option>
                                                <option value="137" selected="&quot;selected&quot;"> Impor
                                                            Madya_208</option>
                                                <option value="138" selected="&quot;selected&quot;"> Impor
                                                            Madya_209</option>
                                                <option value="139" selected="&quot;selected&quot;"> Impor
                                                            Madya_210</option>
                                                <option value="120" selected="&quot;selected&quot;">
                                                    IMPOR_KECIL_201</option>
                                                <option value="121" selected="&quot;selected&quot;">
                                                    IMPOR_KECIL_202</option>
                                                <option value="122" selected="&quot;selected&quot;">
                                                    IMPOR_KECIL_203</option>
                                                <option value="123" selected="&quot;selected&quot;">
                                                    IMPOR_KECIL_204</option>
                                                <option value="124" selected="&quot;selected&quot;">
                                                    IMPOR_KECIL_207</option>
                                                <option value="125" selected="&quot;selected&quot;">
                                                    IMPOR_KECIL_208</option>
                                                <option value="126" selected="&quot;selected&quot;">
                                                    IMPOR_KECIL_209</option>
                                                <option value="127" selected="&quot;selected&quot;">
                                                    IMPOR_KECIL_210</option>
                                                <option value="140" selected="&quot;selected&quot;">
                                                    IMPOR_PRIOK_201</option>
                                                <option value="141" selected="&quot;selected&quot;">
                                                    IMPOR_PRIOK_202</option>
                                                <option value="197" selected="&quot;selected&quot;">
                                                    IMPOR_PRIOK_203</option>
                                                <option value="198" selected="&quot;selected&quot;">
                                                    IMPOR_PRIOK_204</option>
                                                <option value="199" selected="&quot;selected&quot;">
                                                    IMPOR_PRIOK_207</option>
                                                <option value="200" selected="&quot;selected&quot;">
                                                    IMPOR_PRIOK_208</option>
                                                <option value="201" selected="&quot;selected&quot;">
                                                    IMPOR_PRIOK_209</option>
                                                <option value="202" selected="&quot;selected&quot;">
                                                    IMPOR_PRIOK_210</option>
                                                <option value="86" selected="&quot;selected&quot;"> PDE ENABLE
                                                        </option>
                                                <option value="255"> PDE JOB</option>
                                                <option value="256"> PDE JOBPARSING 12</option>
                                                <option value="257"> PDE JOBPARSING 13</option>
                                                <option value="258"> PDE JOBPARSING MADYA_16</option>
                                                <option value="259"> PDE JOBPARSING PRIOK_17</option>
                                                <option value="260"> PDE JOBRESPON_12</option>
                                                <option value="261"> PDE RESPONGW</option>
                                                <option value="262"> PDE SERVICE</option>
                                                <option value="302"> PDE_WSLOADER_16</option>
                                                <option value="263"> Perbendaharaan 201</option>
                                                <option value="264"> Perbendaharaan_203</option>
                                                <option value="265"> Perbendaharaan_207</option>
                                                <option value="267"> Perijinan Online_151</option>
                                                <option value="305"> Perijinan_TPB 125</option>
                                                <option value="304"> P_Online_Publik_105</option>
                                                <option value="179" selected="&quot;selected&quot;"> SAC3_112_80
                                                        </option>
                                                <option value="180" selected="&quot;selected&quot;"> SAC3_112_81
                                                        </option>
                                                <option value="181" selected="&quot;selected&quot;"> SAC3_112_82
                                                        </option>
                                                <option value="171" selected="&quot;selected&quot;"> SAC3_150_80
                                                        </option>
                                                <option value="173" selected="&quot;selected&quot;"> SAC3_150_81
                                                        </option>
                                                <option value="172" selected="&quot;selected&quot;"> SAC3_150_82
                                                        </option>
                                                <option value="176" selected="&quot;selected&quot;"> SAC3_39_80
                                                        </option>
                                                <option value="175" selected="&quot;selected&quot;"> SAC3_39_81
                                                        </option>
                                                <option value="174" selected="&quot;selected&quot;"> SAC3_39_82
                                                        </option>
                                                <option value="177" selected="&quot;selected&quot;">
                                                    SAC3_Service_139_80</option>
                                                <option value="178" selected="&quot;selected&quot;">
                                                    SAC3_Service_70_80</option>
                                                <option value="182" selected="&quot;selected&quot;">
                                                    SAC3_Service_95_80</option>
                                                <option value="156" selected="&quot;selected&quot;">
                                                    SAC_UNITED_01</option>
                                                <option value="157" selected="&quot;selected&quot;">
                                                    SAC_UNITED_02</option>
                                                <option value="158" selected="&quot;selected&quot;">
                                                    SAC_UNITED_03</option>
                                                <option value="159" selected="&quot;selected&quot;">
                                                    SAC_UNITED_04</option>
                                                <option value="160" selected="&quot;selected&quot;">
                                                    SAC_UNITED_05</option>
                                                <option value="161" selected="&quot;selected&quot;">
                                                    SAC_UNITED_06</option>
                                                <option value="162" selected="&quot;selected&quot;">
                                                    SAC_UNITED__07</option>
                                                <option value="163" selected="&quot;selected&quot;">
                                                    SAC_UNITED__08</option>
                                                <option value="164" selected="&quot;selected&quot;">
                                                    SAC_UNITED__09</option>
                                                <option value="165" selected="&quot;selected&quot;">
                                                    SAC_UNITED__10</option>
                                                <option value="166" selected="&quot;selected&quot;">
                                                    SAC_UNITED__11</option>
                                                <option value="167" selected="&quot;selected&quot;">
                                                    SAC_UNITED__12</option>
                                                <option value="230" selected="&quot;selected&quot;">
                                                    SRV_BAR_Kiriman_01</option>
                                                <option value="229" selected="&quot;selected&quot;">
                                                    SRV_BAR_Kiriman_02</option>
                                                <option value="232" selected="&quot;selected&quot;">
                                                    SRV_Bar_Kiriman_03</option>
                                                <option value="233" selected="&quot;selected&quot;">
                                                    SRV_BAR_Kiriman_04</option>
                                                <option value="234" selected="&quot;selected&quot;">
                                                    Srv_Bar_Kir_Batam_01</option>
                                                <option value="235" selected="&quot;selected&quot;">
                                                    Srv_Bar_Kir_Batam_02</option>
                                                <option value="236" selected="&quot;selected&quot;">
                                                    Srv_Bar_Kir_Batam_03</option>
                                                <option value="237" selected="&quot;selected&quot;">
                                                    Srv_Bar_Kir_Batam_04</option>
                                                <option value="268"> TPB Kecil 195_1</option>
                                                <option value="269"> TPB Kecil 195_2</option>
                                                <option value="270"> TPB Kecil 196_1</option>
                                                <option value="271"> TPB Kecil 196_2</option>
                                                <option value="272"> TPB Kecil 197_1</option>
                                                <option value="273"> TPB Kecil 197_2</option>
                                                <option value="274"> TPB Kecil 198</option>
                                                <option value="128" selected="&quot;selected&quot;"> TPB
                                                            Madya_194</option>
                                                <option value="116" selected="&quot;selected&quot;"> TPB
                                                            Madya_195</option>
                                                <option value="117" selected="&quot;selected&quot;"> TPB
                                                            Madya_196</option>
                                                <option value="119" selected="&quot;selected&quot;"> TPB
                                                            Madya_197</option>
                                                <option value="131" selected="&quot;selected&quot;"> TPB
                                                            Madya_198</option>
                                                <option value="25" selected="&quot;selected&quot;"> TPB N02
                                                        </option>
                                                <option value="32" selected="&quot;selected&quot;"> TPB N03
                                                        </option>
                                                <option value="33" selected="&quot;selected&quot;"> TPB N04
                                                        </option>
                                                <option value="155" selected="&quot;selected&quot;"> TPBinhouse1
                                                        </option>
                                                <option value="129" selected="&quot;selected&quot;"> TPBinhouse2
                                                        </option>
                                                <option value="118" selected="&quot;selected&quot;"> TPBinhouse3
                                                        </option>
                                                <option value="130" selected="&quot;selected&quot;"> TPBinhouse4
                                                        </option>
                                                <option value="190" selected="&quot;selected&quot;">
                                                    EKSPOR_PRIOK_101</option>
                                            </select>
                                            <div className="btn-group"><button type="button"
                                                className="multiselect dropdown-toggle btn btn-default"
                                                data-toggle="dropdown"
                                                title=" BAR KIR MADYA 78_3,  BAR_KIR_BATAM_166,  BAR_KIR_BATAM_180,  BAR_KIR_BESAR_2,  BAR_KIR_BESAR_62,  BAR_KIR_BESAR_62_1,  BAR_KIR_BESAR_62_2,  BAR_KIR_BESAR_62_3,  BAR_KIR_BESAR_74,  BAR_KIR_BESAR_74_1,  BAR_KIR_BESAR_74_2,  Ekspor Kecil 201,  Ekspor Kecil 202,  Ekspor Kecil 203,  Ekspor Kecil 204,  Ekspor Kecil 207,  Ekspor Kecil 208,  Ekspor Kecil 209,  Ekspor Kecil 210,  Ekspor Madya 201,  Ekspor Madya 202,  Ekspor Madya 203,  Ekspor Madya 204,  Ekspor Madya 207,  Ekspor Madya 208,  Ekspor Madya 209,  Ekspor Madya 210,  Ekspor Priok 201,  Ekspor Priok 202,  Ekspor Priok 203,  Ekspor Priok 204,  Ekspor Priok 207,  Ekspor Priok 208,  Ekspor Priok 209,  Ekspor Priok 210,  EKSPOR PRIOK_202,  EKSPOR PRIOK_206,  EKSPOR PRIOK_207,  EKSPOR_PRIOK_201,  IDG 10.241.245.49,  IDG 10.241.245.50,  IDG 10.241.245.91,  IDG 10.241.245.92,  Impor Madya_201,  Impor Madya_202,  Impor Madya_203,  Impor Madya_204,  Impor Madya_207,  Impor Madya_208,  Impor Madya_209,  Impor Madya_210,  IMPOR_KECIL_201,  IMPOR_KECIL_202,  IMPOR_KECIL_203,  IMPOR_KECIL_204,  IMPOR_KECIL_207,  IMPOR_KECIL_208,  IMPOR_KECIL_209,  IMPOR_KECIL_210,  IMPOR_PRIOK_201,  IMPOR_PRIOK_202,  IMPOR_PRIOK_203,  IMPOR_PRIOK_204,  IMPOR_PRIOK_207,  IMPOR_PRIOK_208,  IMPOR_PRIOK_209,  IMPOR_PRIOK_210,  PDE ENABLE,  SAC3_112_80,  SAC3_112_81,  SAC3_112_82,  SAC3_150_80,  SAC3_150_81,  SAC3_150_82,  SAC3_39_80,  SAC3_39_81,  SAC3_39_82,  SAC3_Service_139_80,  SAC3_Service_70_80,  SAC3_Service_95_80,  SAC_UNITED_01,  SAC_UNITED_02,  SAC_UNITED_03,  SAC_UNITED_04,  SAC_UNITED_05,  SAC_UNITED_06,  SAC_UNITED__07,  SAC_UNITED__08,  SAC_UNITED__09,  SAC_UNITED__10,  SAC_UNITED__11,  SAC_UNITED__12,  SRV_BAR_Kiriman_01,  SRV_BAR_Kiriman_02,  SRV_Bar_Kiriman_03,  SRV_BAR_Kiriman_04,  Srv_Bar_Kir_Batam_01,  Srv_Bar_Kir_Batam_02,  Srv_Bar_Kir_Batam_03,  Srv_Bar_Kir_Batam_04,  TPB Madya_194,  TPB Madya_195,  TPB Madya_196,  TPB Madya_197,  TPB Madya_198,  TPB N02,  TPB N03,  TPB N04,  TPBinhouse1,  TPBinhouse2,  TPBinhouse3,  TPBinhouse4,  EKSPOR_PRIOK_101">113
                                                            selected <b className="caret"></b></button>
                                                <ul className="multiselect-container dropdown-menu">
                                                    {/* style={{maxHeight: 400, overflow: hidden auto}}> */}
                                                    <li className="multiselect-item filter" value="0">
                                                        <div className="input-group"><span
                                                            className="input-group-addon"><i
                                                                className="glyphicon glyphicon-search"></i></span><input
                                                                className="form-control multiselect-search"
                                                                type="text" placeholder="Search" /></div>
                                                    </li>
                                                    <li className="multiselect-item multiselect-all"><a
                                                        href="/"
                                                        className="multiselect-all"><label
                                                            className="checkbox"><input type="checkbox"
                                                                name="multiselect" value="multiselect-all" />
                                                                                                                            Select all</label></a></li>
                                                    <li><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="266" />
                                                                                                                            Perbendaharaan_209</label></a></li>
                                                    <li><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="249" /> BAR KIR
                                                                        MADYA 78_2</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="250" /> BAR KIR
                                                                        MADYA 78_3</label></a></li>
                                                    <li><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="251" /> BAR KIR
                                                                        MADYA 78_4</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="185" />
                                                                                                                                            BAR_KIR_BATAM_166</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="186" />
                                                                                                                                                BAR_KIR_BATAM_180</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="246" />
                                                                                                                                                    BAR_KIR_BESAR_2</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="238" />
                                                                                                                                                        BAR_KIR_BESAR_62</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="242" />
                                                                                                                                                            BAR_KIR_BESAR_62_1</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="243" />
                                                                                                                                                                BAR_KIR_BESAR_62_2</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="244" />
                                                                                                                                                                    BAR_KIR_BESAR_62_3</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="239" />
                                                                                                                                                                        BAR_KIR_BESAR_74</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="245" />
                                                                                                                                                                            BAR_KIR_BESAR_74_1</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="247" />
                                                                                                                                                                                BAR_KIR_BESAR_74_2</label></a></li>
                                                    <li><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="241" />
                                                                                                                                                                                    BAR_KIR_MADYA_78</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="211" /> Ekspor Kecil
                                                                        201</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="212" /> Ekspor Kecil
                                                                        202</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="213" /> Ekspor Kecil
                                                                        203</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="214" /> Ekspor Kecil
                                                                        204</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="215" /> Ekspor Kecil
                                                                        207</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="216" /> Ekspor Kecil
                                                                        208</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="217" /> Ekspor Kecil
                                                                        209</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="218" /> Ekspor Kecil
                                                                        210</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="203" /> Ekspor Madya
                                                                        201</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="204" /> Ekspor Madya
                                                                        202</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="205" /> Ekspor Madya
                                                                        203</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="206" /> Ekspor Madya
                                                                        204</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="207" /> Ekspor Madya
                                                                        207</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="208" /> Ekspor Madya
                                                                        208</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="209" /> Ekspor Madya
                                                                        209</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="210" /> Ekspor Madya
                                                                        210</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="219" /> Ekspor Priok
                                                                        201</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="220" /> Ekspor Priok
                                                                        202</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="221" /> Ekspor Priok
                                                                        203</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="222" /> Ekspor Priok
                                                                        204</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="227" /> Ekspor Priok
                                                                        207</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="224" /> Ekspor Priok
                                                                        208</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="225" /> Ekspor Priok
                                                                        209</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="226" /> Ekspor Priok
                                                                        210</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="193" /> EKSPOR
                                                                        PRIOK_202</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="194" /> EKSPOR
                                                                        PRIOK_206</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="191" /> EKSPOR
                                                                        PRIOK_207</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="192" />
                                                                                                                                                                                                                                                                                                    EKSPOR_PRIOK_201</label></a></li>
                                                    <li><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="275" />
                                                                                                                                                                                                                                                                                                        ESB_EKSTERNAL 29</label></a></li>
                                                    <li><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="277" />
                                                                                                                                                                                                                                                                                                            ESB_EKSTERNAL_8081</label></a></li>
                                                    <li><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="278" />
                                                                                                                                                                                                                                                                                                                ESB_EKSTERNAL_8082 29</label></a></li>
                                                    <li><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="279" />
                                                                                                                                                                                                                                                                                                                    ESB_EKSTERNAL_8083 30</label></a></li>
                                                    <li><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="280" />
                                                                                                                                                                                                                                                                                                                        ESB_EKSTERNAL_8084 33</label></a></li>
                                                    <li><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="281" />
                                                                                                                                                                                                                                                                                                                            ESB_EKSTERNAL_8085 118</label></a></li>
                                                    <li><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="282" />
                                                                                                                                                                                                                                                                                                                                ESB_EKSTERNAL_8087</label></a></li>
                                                    <li><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="283" />
                                                                                                                                                                                                                                                                                                                                    ESB_EKSTERNAL_8092</label></a></li>
                                                    <li><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="284" />
                                                                                                                                                                                                                                                                                                                                        ESB_EKSTERNAL_9011</label></a></li>
                                                    <li><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="285" />
                                                                                                                                                                                                                                                                                                                                            ESB_EKSTERNAL_9080</label></a></li>
                                                    <li><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="286" />
                                                                                                                                                                                                                                                                                                                                                ESB_EKSTERNAL_9081</label></a></li>
                                                    <li><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="287" />
                                                                                                                                                                                                                                                                                                                                                    ESB_EKSTERNAL_9082</label></a></li>
                                                    <li><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="288" />
                                                                                                                                                                                                                                                                                                                                                        ESB_EKSTERNAL_9083</label></a></li>
                                                    <li><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="289" />
                                                                                                                                                                                                                                                                                                                                                            ESB_EKSTERNAL_9084</label></a></li>
                                                    <li><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="290" />
                                                                                                                                                                                                                                                                                                                                                                ESB_EKSTERNAL_9085</label></a></li>
                                                    <li><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="291" />
                                                                                                                                                                                                                                                                                                                                                                    ESB_EKSTERNAL_9086</label></a></li>
                                                    <li><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="292" />
                                                                                                                                                                                                                                                                                                                                                                        ESB_EKSTERNAL_9087</label></a></li>
                                                    <li><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="293" />
                                                                                                                                                                                                                                                                                                                                                                            ESB_EKSTERNAL_9088</label></a></li>
                                                    <li><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="294" />
                                                                                                                                                                                                                                                                                                                                                                                ESB_EKSTERNAL_9089</label></a></li>
                                                    <li><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="276" /> ESB_EKS_03
                                                                        8</label></a></li>
                                                    <li><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="295" />
                                                                                                                                                                                                                                                                                                                                                                                        ESB_INTERNAL</label></a></li>
                                                    <li><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="296" />
                                                                                                                                                                                                                                                                                                                                                                                            ESB_INTERNAL_8080</label></a></li>
                                                    <li><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="297" />
                                                                                                                                                                                                                                                                                                                                                                                                ESB_INTERNAL_8081</label></a></li>
                                                    <li><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="298" />
                                                                                                                                                                                                                                                                                                                                                                                                    ESB_INTERNAL_8082</label></a></li>
                                                    <li><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="299" />
                                                                                                                                                                                                                                                                                                                                                                                                        ESB_INTERNAL_8083</label></a></li>
                                                    <li><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="300" />
                                                                ESB_INTERNAL_8084</label></a></li>
                                                    <li><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="303" />
                                                                    ESB_INTERNAL_8085</label></a></li>
                                                    <li><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="301" />
                                                                        ESB_INTERNAL_87</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="75" /> IDG
                                                                        10.241.245.49</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="76" /> IDG
                                                                        10.241.245.50</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="78" /> IDG
                                                                        10.241.245.91</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="74" /> IDG
                                                                        10.241.245.92</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="228" /> Impor
                                                                        Madya_201</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="133" /> Impor
                                                                        Madya_202</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="134" /> Impor
                                                                        Madya_203</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="135" /> Impor
                                                                        Madya_204</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="136" /> Impor
                                                                        Madya_207</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="137" /> Impor
                                                                        Madya_208</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="138" /> Impor
                                                                        Madya_209</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="139" /> Impor
                                                                        Madya_210</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="120" />
                                                                                                                            IMPOR_KECIL_201</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="121" />
                                                                                                                                IMPOR_KECIL_202</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="122" />
                                                                                                                                    IMPOR_KECIL_203</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="123" />
                                                                                                                                        IMPOR_KECIL_204</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="124" />
                                                                                                                                            IMPOR_KECIL_207</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="125" />
                                                                                                                                                IMPOR_KECIL_208</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="126" />
                                                                                                                                                    IMPOR_KECIL_209</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="127" />
                                                                                                                                                        IMPOR_KECIL_210</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="140" />
                                                                                                                                                            IMPOR_PRIOK_201</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="141" />
                                                                                                                                                                IMPOR_PRIOK_202</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="197" />
                                                                                                                                                                    IMPOR_PRIOK_203</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="198" />
                                                                                                                                                                        IMPOR_PRIOK_204</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="199" />
                                                                                                                                                                            IMPOR_PRIOK_207</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="200" />
                                                                                                                                                                                IMPOR_PRIOK_208</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="201" />
                                                                                                                                                                                    IMPOR_PRIOK_209</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="202" />
                                                                                                                                                                                        IMPOR_PRIOK_210</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="86" /> PDE
                                                                        ENABLE</label></a></li>
                                                    <li><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="255" /> PDE
                                                                        JOB</label></a></li>
                                                    <li><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="256" /> PDE
                                                                        JOBPARSING 12</label></a></li>
                                                    <li><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="257" /> PDE
                                                                        JOBPARSING 13</label></a></li>
                                                    <li><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="258" /> PDE
                                                                        JOBPARSING MADYA_16</label></a></li>
                                                    <li><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="259" /> PDE
                                                                        JOBPARSING PRIOK_17</label></a></li>
                                                    <li><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="260" /> PDE
                                                                        JOBRESPON_12</label></a></li>
                                                    <li><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="261" /> PDE
                                                                        RESPONGW</label></a></li>
                                                    <li><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="262" /> PDE
                                                                        SERVICE</label></a></li>
                                                    <li><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="302" />
                                                                                                                                                                                                                                PDE_WSLOADER_16</label></a></li>
                                                    <li><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="263" />
                                                                                                                                                                                                                                    Perbendaharaan 201</label></a></li>
                                                    <li><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="264" />
                                                                                                                                                                                                                                        Perbendaharaan_203</label></a></li>
                                                    <li><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="265" />
                                                                                                                                                                                                                                            Perbendaharaan_207</label></a></li>
                                                    <li><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="267" /> Perijinan
                                                                        Online_151</label></a></li>
                                                    <li><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="305" />
                                                                                                                                                                                                                                                    Perijinan_TPB 125</label></a></li>
                                                    <li><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="304" />
                                                                                                                                                                                                                                                        P_Online_Publik_105</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="179" />
                                                                                                                                                                                                                                                            SAC3_112_80</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="180" />
                                                                                                                                                                                                                                                                SAC3_112_81</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="181" />
                                                                                                                                                                                                                                                                    SAC3_112_82</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="171" />
                                                                                                                                                                                                                                                                        SAC3_150_80</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="173" />
                                                                                                                                                                                                                                                                            SAC3_150_81</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="172" />
                                                                                                                                                                                                                                                                                SAC3_150_82</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="176" />
                                                                                                                                                                                                                                                                                    SAC3_39_80</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="175" />
                                                                                                                                                                                                                                                                                        SAC3_39_81</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="174" />
                                                                                                                                                                                                                                                                                            SAC3_39_82</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="177" />
                                                                                                                                                                                                                                                                                                SAC3_Service_139_80</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="178" />
                                                                                                                                                                                                                                                                                                    SAC3_Service_70_80</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="182" />
                                                                                                                                                                                                                                                                                                        SAC3_Service_95_80</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="156" />
                                                                                                                                                                                                                                                                                                            SAC_UNITED_01</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="157" />
                                                                                                                                                                                                                                                                                                                SAC_UNITED_02</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="158" />
                                                                                                                                                                                                                                                                                                                    SAC_UNITED_03</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="159" />
                                                                                                                                                                                                                                                                                                                        SAC_UNITED_04</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="160" />
                                                                                                                                                                                                                                                                                                                            SAC_UNITED_05</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="161" />
                                                                                                                                                                                                                                                                                                                                SAC_UNITED_06</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="162" />
                                                                                                                                                                                                                                                                                                                                    SAC_UNITED__07</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="163" />
                                                                                                                                                                                                                                                                                                                                        SAC_UNITED__08</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="164" />
                                                                                                                                                                                                                                                                                                                                            SAC_UNITED__09</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="165" />
                                                                                                                                                                                                                                                                                                                                                SAC_UNITED__10</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="166" />
                                                                                                                                                                                                                                                                                                                                                    SAC_UNITED__11</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="167" />
                                                                                                                                                                                                                                                                                                                                                        SAC_UNITED__12</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="230" />
                                                                                                                                                                                                                                                                                                                                                            SRV_BAR_Kiriman_01</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="229" />
                                                                                                                                                                                                                                                                                                                                                                SRV_BAR_Kiriman_02</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="232" />
                                                                                                                                                                                                                                                                                                                                                                    SRV_Bar_Kiriman_03</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="233" />
                                                                                                                                                                                                                                                                                                                                                                        SRV_BAR_Kiriman_04</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="234" />
                                                                                                                                                                                                                                                                                                                                                                            Srv_Bar_Kir_Batam_01</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="235" />
                                                                                                                                                                                                                                                                                                                                                                                Srv_Bar_Kir_Batam_02</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="236" />
                                                                                                                                                                                                                                                                                                                                                                                    Srv_Bar_Kir_Batam_03</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="237" />
                                                                                                                                                                                                                                                                                                                                                                                        Srv_Bar_Kir_Batam_04</label></a></li>
                                                    <li><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="268" /> TPB Kecil
                                                                        195_1</label></a></li>
                                                    <li><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="269" /> TPB Kecil
                                                                        195_2</label></a></li>
                                                    <li><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="270" /> TPB Kecil
                                                                        196_1</label></a></li>
                                                    <li><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="271" /> TPB Kecil
                                                                        196_2</label></a></li>
                                                    <li><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="272" /> TPB Kecil
                                                                        197_1</label></a></li>
                                                    <li><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="273" /> TPB Kecil
                                                                        197_2</label></a></li>
                                                    <li><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="274" /> TPB Kecil
                                                                        198</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="128" /> TPB
                                                                        Madya_194</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="116" /> TPB
                                                                        Madya_195</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="117" /> TPB
                                                                        Madya_196</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="119" /> TPB
                                                                        Madya_197</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="131" /> TPB
                                                                        Madya_198</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="25" /> TPB
                                                                        N02</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="32" /> TPB
                                                                        N03</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="33" /> TPB
                                                                        N04</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="155" /> TPBinhouse1</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="129" /> TPBinhouse2</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="118" /> TPBinhouse3</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="130" /> TPBinhouse4</label></a></li>
                                                    <li className="active"><a href="/"><label
                                                        className="checkbox"><input type="checkbox"
                                                            name="multiselect" value="190" /> EKSPOR_PRIOK_101</label></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="d-block text-center card-footer">

                        <div className="card-body">

                            <Link to={'/user'} className="mb-2 mr-2 btn btn-success">Save
                                    </Link>
                            <Link to={'/user'} className="mb-2 mr-2 btn btn-secondary">Go Back
                                    </Link>

                        </div>
                    </div>
                </div >
            </div >
        )
    }
}