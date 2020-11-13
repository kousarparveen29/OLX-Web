import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../components/Home";
import Form from "../components/Form";
import Sell from "../components/Sell";
import Details from "../components/Details";
import Category from "../components/Category";



class AppRouter extends Component {
    render() {
        return (
            < Router>
                < Route exact path="/" component={Home} />
                < Route path="/form" component={Form} />
                < Route path="/sell" component={Sell} />
                < Route path="/details" component={Details} />
                < Route path="/category" component={Category} />
            </Router>
        )
    }
}

export default AppRouter;