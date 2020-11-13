

const INITIAL_STATE = {
    province: ["", "Azad Kashmir", "Balochistan", "Gilgit Baltistan", "Khyber Pakhtunkhwa", "Punjab", "Sindh"],
    city: ["", "Gilgit", "Hyderabad", "Islamabad", "Karachi", "Lahore", "Muzaffarabad", "Peshawar", "Quetta", "Rawalpindi"],
    current_user: {},
    category: "",
    alldata: [],
    key: "",
    details: {},
    categoryName: "",
    onecategorydata: []
}


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SETUSERS":
            return ({
                ...state,
                current_user: action.payload,
            })
        case "SETCATEGORY":
            return ({
                ...state,
                category: action.payload
            })
        case "SETDATA":
            return ({
                ...state,
                alldata: action.payload

            })
            case "SETKEY":
            return ({
                ...state,
                key: action.payload

            })
            case "SETDETAILS":
            return ({
                ...state,
                details: action.payload

            })
            case "SETCATEGORYNAME":
            return ({
                ...state,
                categoryName: action.payload
            })
            case "SETCATEGORYDETAILS":
            return ({
                ...state,
                onecategorydata: action.payload
            })
    }

    return state;
}