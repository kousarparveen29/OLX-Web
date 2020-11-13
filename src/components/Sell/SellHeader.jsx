import React, { Component } from "react";
import "./style.css";
import logo from "../../images/logo.png";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


class SellHeader extends Component {
    render() {
        return (
            <>
                <div className="container-fluid sell-header">
                    <div>
                        < ArrowBackIcon /><img src={logo} alt="logo" />
                    </div>
                </div>
            </>
        )
    }
}



export default SellHeader;