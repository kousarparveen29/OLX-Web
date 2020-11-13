import React, { Component } from "react";
import "./style.css";
import SellFooter from "./SellFooter";
import SellHeader from "./SellHeader";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import TvIcon from "@material-ui/icons/Tv";
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import RoomServiceOutlinedIcon from '@material-ui/icons/RoomServiceOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import PetsIcon from '@material-ui/icons/Pets';
import WeekendIcon from '@material-ui/icons/Weekend';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import HouseIcon from '@material-ui/icons/House';
import WatchIcon from '@material-ui/icons/Watch';
import { connect } from "react-redux";
import { goto_form } from "../../store/action";




class Sell extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                { icon: < PhoneIphoneIcon />, category: "Mobile" },
                { icon: < DriveEtaIcon />, category: "Vehicles" },
                { icon: < HouseIcon />, category: "Property for Sale" },
                { icon: < HouseIcon />, category: "Property for Rent" },
                { icon: < TvIcon />, category: "Electronics & Home Appliances" },
                { icon: < MotorcycleIcon />, category: "Bikes" },
                { icon: < BusinessCenterOutlinedIcon />, category: "Business, Industrial & Agriculture" },
                { icon: < RoomServiceOutlinedIcon />, category: "Services" },
                { icon: < WorkOutlineOutlinedIcon />, category: "Jobs" },
                { icon: < PetsIcon />, category: "Animals" },
                { icon: < WeekendIcon />, category: "Furniture & Home Decor" },
                { icon: < WatchIcon />, category: "Fashion & Beauty" },
                { icon: < MenuBookIcon />, category: "Books, Sports & Hobbies" },
                { icon: < ChildCareIcon />, category: "Kids" }
            ]
        }
    }
    render() {
        return (
            <>
                < SellHeader />
                <div className="container">
                    <h4 className="main-heading">POST YOUR AD</h4>
                    <div className="sell-div">
                        <h6>CHOOSE A CATEGORY</h6>
                        <ul className="sell-items">
                            {this.state.list.map((v, i) => {
                                return <li key={i} onClick={() => this.props.goto_form(v.category, this.props.history)}>
                                    <span className="mr-1">{v.icon}</span> {v.category}
                                    <span>< ArrowForwardIosIcon /></span></li>
                            })}
                        </ul>
                    </div>
                </div>
                < SellFooter />
            </>
        )
    }
}


const mapStateToProps = (state) => ({
    pro: state.province,
    cities: state.city,
    current_user: state.current_user
})

const mapDispatchToProps = (dispatch) => ({
    goto_form: (c, history) => dispatch(goto_form(c, history))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sell);