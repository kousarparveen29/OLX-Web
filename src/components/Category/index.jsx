import React, { Component } from "react";
import "./style.css";
import Header from "../Header";
import Footer from "../Footer";
import { connect } from "react-redux";
import { goto_details, get_category_data } from "../../store/action";


class Category extends Component {
   
    componentDidMount() {
        this.props.get_category_data()
    }

    renderList = () => {
        return this.props.onecategorydata.map((v,i) => {
            return <div key={i} className="col-3 my-3">
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
                <div className="container mt-5">
                    <div className="recent-search-txt">
                        <h1>{this.props.categoryName}</h1>
                    </div>
                    <div className="row px-2">
                        {this.renderList()}
                    </div>
                    <div className="text-center pb-5 my-5">
                        <button className="load-more">Load more</button>
                    </div>
                </div>
                < Footer />
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    categoryName: state.categoryName,
    onecategorydata: state.onecategorydata
})

const mapDispatchToProps = (dispatch) => ({
    goto_details: (k,h) => dispatch(goto_details(k,h)),
    get_category_data: () => dispatch(get_category_data())
}
)


export default connect(mapStateToProps, mapDispatchToProps)(Category);