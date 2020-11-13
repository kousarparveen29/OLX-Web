import React, { Component } from "react";
import "./style.css";
import SellFooter from "../Sell/SellFooter";
import SellHeader from "../Sell/SellHeader";
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import { connect } from "react-redux";
import { get_users, upload_data } from "../../store/action";
import firebase from "../../config/firebase";




class Form extends Component {
    state = {
        all_details: {},
        category: "",
        title: "",
        description: "",
        price: "",
        photos: null,
        province: "",
        city: "",
        profile_pic: "",
        user_name: "",
        user_number: "",
        key: ""
    }

    send_data = (history) => {
        let key = firebase.database().ref("/").push().key;
        var storageRef = firebase.storage().ref();
        var uploadTask = storageRef.child(`images/${this.state.photos.name}`).put(this.state.photos);
        console.log(uploadTask)
        let img = null;
        var promise = new Promise((res)=>{
        uploadTask.on('state_changed', function (snapshot) {
        }, function (error) {
        }, function () {
            uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                res(img = downloadURL)
                console.log('File available at', img)})
        }
        )
    });
        promise.then(() => {
        this.state.all_details = {
            category: this.props.category,
            title: this.state.title,
            description: this.state.description,
            price: this.state.price,
            photos: img,
            province: this.state.province,
            city: this.state.city,
            profile_pic: this.props.current_user.profilPic,
            user_name: this.props.current_user.name,
            user_number: this.state.user_number,
            key: key
        }

        this.setState({
            all_details: this.state.all_details

        })
        this.props.upload_data(this.state.all_details, history) })
    }

    componentDidMount() {
        this.props.get_users()
    }

    render() {
        let user = this.props.current_user;
        return (
            <>
                < SellHeader />
                <div className="container">
                    <h4 className="main-heading">POST YOUR AD</h4>
                </div>
                <div className="details-div">
                    <div className="div-1 px-3">
                        <h6>SELECTED CATEGORY</h6>
                        <p>{this.props.category}</p>
                    </div>
                    <div className="div-2 px-3">
                        <h6>INCLUDE SOME DETAILS</h6>
                        <label>Ad title*
                            <input value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} type="text" className="w-50" maxLength="70" />
                            <p className="pl-0">Mention the key features of your item (e.g. brand, model, age, type)<span className="pl-1 ml-4">0/70</span></p>
                        </label>
                        <label>Description*
                            <textarea value={this.state.description} onChange={(e) => this.setState({ description: e.target.value })} type="text" className="w-50" maxLength="4096"></textarea>
                            <p className="pl-0">Include condition, features and reason for selling<span className="span-textarea">0/4096</span></p>
                        </label>
                    </div>
                    <div className="div-3 px-3">
                        <h6>SET A PRICE</h6>
                        <label>Price*
                           <div><span>Rs</span><input value={this.state.price} onChange={(e) => this.setState({ price: e.target.value })} type="text" className="" /></div>
                        </label>
                    </div>
                    <div className="div-4 px-3">
                        <h6>UPLOAD UP TO 6 PHOTOS</h6>
                        <label htmlFor="uploadImg" className="d-inline-block p-4 ml-2 mb-2">< AddAPhotoIcon /><input id="uploadImg" type="file" onChange={(e) => this.setState({ photos: e.target.files[0] })} /></label>
                        <label className="d-inline-block p-4 ml-2 mb-2">< AddAPhotoIcon /></label>
                        <label className="d-inline-block p-4 ml-2 mb-2">< AddAPhotoIcon /></label>
                        <br />
                        <label className="d-inline-block p-4 ml-2 mb-2">< AddAPhotoIcon /></label>
                        <label className="d-inline-block p-4 ml-2 mb-2">< AddAPhotoIcon /></label>
                        <label className="d-inline-block p-4 ml-2 mb-2">< AddAPhotoIcon /></label>
                        <p className="madatory-para">This field is mandatory</p>
                    </div>
                    <div className="div-5 px-3">
                        <h6>CONFIRM YOUR LOCATION</h6>
                        <label>State*
                        <select className="w-50" onChange={(e) => this.setState({ province: e.target.value })}>
                                {this.props.pro.map((v, i) => {
                                    return <option value={v} key={i}>{v}</option>
                                })}
                            </select>
                        </label>
                        <label>City*
                        <select className="w-50" onChange={(e) => this.setState({ city: e.target.value })}>
                                {this.props.cities.map((v, i) => {
                                    return <option value={v} key={i}>{v}</option>
                                })}
                            </select>
                        </label>
                        <p className="madatory-para">This field is mandatory</p>
                    </div>
                    <div className="div-6 px-3">
                        <h6>REVIEW YOUR DETAILS</h6>
                        <div className="d-flex">
                            <div className="ml-2"><img src={user.profilPic} alt="" /></div>
                            <label>Name
                                <span className="userName">{user.name}</span>
                                <span className="userNameSpan">0/30</span>
                            </label>
                        </div>
                        <div className="my-3 mob-div">
                            <label>Mobile Number*
                           <input value={this.state.user_number} onChange={(e) => this.setState({ user_number: e.target.value })} type="text" className="" />
                            </label>
                        </div>
                    </div>
                    <div className="div-7 px-3">
                        <button onClick={() => this.send_data(this.props.history)}>Post now</button>
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
    current_user: state.current_user,
    category: state.category
})


const mapDispatchToProps = (dispatch) => ({
    get_users: () => dispatch(get_users()),
    upload_data: (alldetails, history) => dispatch(upload_data(alldetails, history))
}
)

export default connect(mapStateToProps, mapDispatchToProps)(Form);
