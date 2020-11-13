import React, { Component } from "react";
import "./style.css";
import Header from "../Header";
import Footer from "../Footer";
import { connect } from "react-redux";
import { get_details } from "../../store/action";
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import PhoneIcon from '@material-ui/icons/Phone';



class Details extends Component {
    componentDidMount() {
        this.props.get_details()
    }

    render() {
        let { title, description, price, photos, province, city, profile_pic, user_name, user_number } = this.props.details
        return (
            <>
                < Header />
                <div className="p-5 container-fluid">
                    <div className="row">
                        <div className="container col-md-8 col-sm-12">
                            <div className="img-div text-center">
                                <span>< FaChevronLeft /></span> <img src={photos} alt="" className="w-75" /> <span>< FaChevronRight /></span>
                            </div>
                            <div className="images-div row m-0">
                                <div className="img1-div">
                                    <img src={photos} alt="" className="img1" />
                                </div>
                                <div className="img1-div">
                                    <img src={photos} alt="" className="img1" />
                                </div>
                                <div className="img1-div">
                                    <img src={photos} alt="" className="img1" />
                                </div>
                                <div className="img1-div">
                                    <img src={photos} alt="" className="img1" />
                                </div>
                                <div className="img1-div">
                                    <img src={photos} alt="" className="img1" />
                                </div>
                                <div className="img1-div">
                                    <img src={photos} alt="" className="img1" />
                                </div>
                                <div className="img1-div">
                                    <img src={photos} alt="" className="img1" />
                                </div>
                                <div className="img1-div">
                                    <img src={photos} alt="" className="img1" />
                                </div>
                            </div>
                            <div className="descrp-div">
                                <h4>Description</h4>
                                <p>{description}</p>
                            </div>
                        </div>
                        <div className="container col-md-4 col-sm-12">
                            <div className="price-div m-2">
                                <h1>Rs {price}</h1>
                                <p>{title}</p>
                            </div>
                            <div className="seller-div m-2 mb-3">
                                <h6>Seller description</h6>
                                <img src={profile_pic} alt="" className="myImage mr-3" /><p className="d-inline-block m-0">{user_name}</p>
                                <button>Chat with seller</button>
                                <p>< PhoneIcon />{user_number}</p>
                            </div>
                            <div className="map-div m-2">
                                <h5>Posted in</h5>
                                <p>{city}, {province}</p>
                                <div className="embed-responsive embed-responsive map">
                                    <iframe className="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14143093.266671525!2d60.32595964777702!3d30.0682967538591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38db52d2f8fd751f%3A0x46b7a1f7e614925c!2sPakistan!5e0!3m2!1sen!2s!4v1604404199743!5m2!1sen!2s"></iframe>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                < Footer />
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    details: state.details
})

const mapDispatchToProps = (dispatch) => ({
    get_details: () => dispatch(get_details())
}
)


export default connect(mapStateToProps, mapDispatchToProps)(Details);



