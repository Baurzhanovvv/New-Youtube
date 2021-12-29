import axios from "axios";

const SIGN_UP = "SIGN-UP"
const SET_SIGN_IN = "SET-SIGN-IN"
const SET_IS_CREATOR = "SET_IS_CREATOR"

let initialState = {
    userData: [],
    profileData: [],
    userId: '',
}

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/'
})

export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP:
            return {
                ...state,
                userData: action.userData,
                userId: action.id
            }

        case SET_SIGN_IN:
            return {
                ...state,
                userData: action.userData,
                profileData: action.profileData
            }

        case SET_IS_CREATOR:
            return {
                ...state,
                profileData: action.profileData
            }

        default:
            return state
    }
}

const setUserData = (data, id) => ({type: SIGN_UP, userData: data, id: id})
const setSignUserData = (userData, profileData) => ({type: SET_SIGN_IN, userData: userData, profileData: profileData})
const setIsCreator = profileData => ({type: SET_IS_CREATOR, profileData: profileData})


export const signUpData = data => async dispatch => {
    let response = await instance.post('auth/users/', {
        email: data.email,
        password: data.password,
        username: data.username
    })  // http://127.0.0.1:8000/api/auth/users/
    let res = await instance.post('profile/', {user: response.data.id})
    return dispatch(setUserData(response.data, res.data.id))
}

export const signInData = data => async dispatch => {
    let response = await instance.post('auth/token/', {
        username: data.username,
        password: data.password
    })

    let headers = {
        "Authorization": `Bearer ${response.data.access}`
    }
    let res = await instance.get('auth/users/me/', {headers:headers})
    let resData = await instance.get(`profile/?id=${res.data.id}`)

    return dispatch(setSignUserData(res.data, resData.data[0]))
}


export const setIsCreatorTC = id => async dispatch => {
    let res = await instance.put(`profile/${id}/`, {is_creator: true, user: id})
    return dispatch(setIsCreator(res.data))
}

