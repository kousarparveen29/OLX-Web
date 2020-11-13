import React, { Component } from "react";
import "./style.css";
import { connect } from "react-redux";
import Header from "../Header";
import Footer from "../Footer";
import mainImage from "../../images/olx main image.jpg";
import phoneApp from "../../images/phone app.png";
import googleApp from "../../images/google play icon.png";
import appleApp from "../../images/apple store icon.png";
import { get_data, goto_details } from "../../store/action"




class Home extends Component {

    componentDidMount() {
        this.props.get_data()
    }

    renderList = () => {
        return this.props.alldata.map((v,i) => {
            return <div key={i} className="col-lg-3 col-md-6 col-xs-12 my-3">
                <div className="card" onClick={()=>{this.props.goto_details(v.key,this.props.history)}}>
                    <span><img src={v.photos} className="card-img-top w-75" alt="..." /></span>
                    <div className="card-body">
                        <h5 className="card-title m-0">Rs {v.price}</h5>
                        <p className="card-text desc-para">{v.description}</p>
                        <p className="card-text"><small className="text-muted">{v.city}, {v.province}</small></p>
                    </div>
                </div>
            </div>
        })
    }

    render() {
        return (
            <>
                < Header hist={this.props.history} />
                < img className="w-100" src={mainImage} alt="Olx" />
                <div className="home_div container mt-5">
                    <div className="recent-search-txt">
                        <h1>Fresh recommendations</h1>
                    </div>
                    <div className="row px-2">
                        {this.renderList()}
                    </div>
                    <div className="text-center pb-5 my-5">
                        <button className="load-more">Load more</button>
                    </div>
                </div>
                <div className="container-fluid footer-heading">
                    <div className="col-md-4 col-sm-12">
                        <img src={phoneApp} alt="phone app" className="w-100" />
                    </div>
                    <div className="ml-2 col-md-4">
                        <h2 className="mb-2">TRY THE OLX APP</h2>
                        <h5>Buy, sell and find just about anything using <br />the app on your mobile.</h5>
                    </div>
                    <div className="icon-div col-md-3">
                        <h6>GET YOUR APP TODAY</h6>
                        <img src={googleApp} alt="google play icon" className="google-icon1 mr-2" /> <img src={appleApp} alt="apple store icon" className="apple-icon1" />
                    </div>
                </div>
                < Footer />
            </>
        )
    }
}


const mapStateToProps = (state) => ({
    alldata: state.alldata
})

const mapDispatchToProps = (dispatch) => ({
    get_data: () => dispatch(get_data()),
    goto_details: (v, history) => dispatch(goto_details(v, history))

}
)


export default connect(mapStateToProps, mapDispatchToProps)(Home);