import firebase from "../../config/firebase";

const facebook_login = (history, path) => {
    return (dispatch) => {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                var user = result.user;
                let newUser = {
                    name: user.displayName,
                    email: user.email,
                    profilPic: user.photoURL,
                    uid: user.uid
                }
                firebase.database().ref("/").child(`loginUsers`).set(newUser)
                    .then(() => {
                        alert("Login Successfully");
                        history.push(`${path}`)
                    })
            })
    }
}

const get_users = () => {
    return (dispatch) => {
        let userDetail = {};
        firebase.database().ref("/").child(`loginUsers`).on("value", (data) => {
            userDetail = data.val();
            dispatch({ type: "SETUSERS", payload: userDetail })
        })
    }
}

const goto_form = (c, history) => {
    return (dispatch) => {
        history.push("/form")
        dispatch({ type: "SETCATEGORY", payload: c })
    }
}

const upload_data = (alldetails, history) => {
    return (dispatch) => {
        firebase.database().ref("/").child(`allcategories/${alldetails.category}`).push(alldetails)
        firebase.database().ref("/").child(`recentdata/${alldetails.key}`).set(alldetails)
            .then(() => {
                alert("Data has been uploaded");
                history.push("/")
            })
    }
}

const get_data = () => {
    return dispatch => {
        let alldata = [];
        let promise = new Promise((res, rej) => {
            firebase.database().ref("/").child("recentdata").on("child_added", (data) => {
                res(alldata.unshift(data.val()))
            })
        })
        promise.then(() => {
            dispatch({ type: "SETDATA", payload: alldata })
        })
    }
}

const goto_details = (v, history) => {
    return (dispatch) => {
        firebase.database().ref("/").child("key").set(v);
        history.push("/details");
    }
}

const get_details = () => {
    return (dispatch) => {
        let key = "";
        let promise = new Promise((res, rej) => {
            firebase.database().ref("/").child("key").on("value", (data) => {
                res(key = data.val())
            })
        });
        promise.then(() => {
            dispatch({ type: "SETKEY", payload: key })
            let d = {};
            firebase.database().ref("/").child(`recentdata/${key}`).on("value", (data) => {
                d = data.val()
                dispatch({ type: "SETDETAILS", payload: d })
            })
        })
    }
}


const get_category_data = () => {
    return (dispatch) => {
        let get_cate = "";
        let p = new Promise((res, rej) => {
            firebase.database().ref("/").child("selectedcategory").on("value", (data) => {
                res(get_cate = data.val())
            })
        });
        p.then(() => {
            dispatch({ type: "SETCATEGORYNAME", payload: get_cate })
            let categorydata = [];
            let promise = new Promise((res, rej) => {
                firebase.database().ref("/").child(`allcategories/${get_cate}`).on("child_added", (data) => {
                    res(categorydata.unshift(data.val()))
                })
            });
            promise.then(() => {
                dispatch({ type: "SETCATEGORYDETAILS", payload: categorydata })
            })
        })
    }
}


export {
    facebook_login,
    get_users,
    goto_form,
    upload_data,
    get_data,
    goto_details,
    get_details,
    get_category_data
}