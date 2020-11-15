import React, { Component } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import logo from "../../images/logo.png";
import { facebook_login, get_category_data } from "../../store/action";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import firebase from "../../config/firebase";



class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            headerCategory: [
                { category: "Mobile" },
                { category: "Vehicles" },
                { category: "Property for Sale" },
                { category: "Property for Rent" },
                { category: "Bikes" },
                { category: "Services" },
                { category: "Jobs" }
            ]
        }
    }

    select_category = (c) => {
        firebase.database().ref("/").child("selectedcategory").set(c);
        this.props.get_category_data()
    }

    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light nav-1 bg-light py-2">
                    <div>
                        <Link className="navbar-brand" to="/"><img src={logo} alt="logo" className="logo-img ml-4" /></Link>
                    </div>
                    <div className="location-search">
                        <span className="loc-btn-search px-2 py-1">< FontAwesomeIcon icon={faSearch} /></span>
                        <input className="form-control pr-0" type="search" placeholder="Search city, area or locality" aria-label="Search city, area or location"></input>
                        <button className="arrow mr-3">< FontAwesomeIcon icon={faChevronDown} /></button>
                    </div>
                    <div className="input-group search-bar ml-3">
                        <input type="text" className="form-control " placeholder="Find Cars, Mobile Phones and more..." aria-label="Find Cars, Mobile Phones and more..." aria-describedby="button-addon2" />
                        <div className="item-search-bar">
                            <button className="btn item-btn-search" type="button" id="button-addon2">< FontAwesomeIcon icon={faSearch} /></button>
                        </div>
                    </div>
                    <div className="login-div ml-3">
                        <Link to="/" className="" onClick={() => this.props.facebook_login(this.props.hist, "/")}>Login</Link>
                    </div>
                    <div className="sellDiv ml-3">
                        <button onClick={() => this.props.facebook_login(this.props.hist, "/sell")}>< FontAwesomeIcon icon={faPlus} /> <span>SELL</span></button>
                    </div>
                </nav>
                <nav className="navbar navbar-expand-lg navbar-light bg-light catagory-bar p-1">
                    <Link className="navbar-brand ml-4" to="#">ALL CATAGORIES <button className="arrow mr-3">< FontAwesomeIcon icon={faChevronDown} /></button></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse navbarNav" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        {this.state.headerCategory.map((v, i) => {
                                return <li key={i} className="nav-item active" onClick={() => this.select_category(v.category)}>
                                    <Link className="nav-link" to="/category">{v.category} <span className="sr-only">(current)</span></Link>
                                </li>
                            })}
                        </ul>
                    </div>
                </nav>

            </>
        )
    }

}

const mapStateToProps = (state) => ({
    category: state.category
})

const mapDispatchToProps = (dispatch) => ({
    facebook_login: (history, path) => dispatch(facebook_login(history, path)),
    get_category_data: () => dispatch(get_category_data())
}
)

export default connect(mapStateToProps, mapDispatchToProps)(Header);
