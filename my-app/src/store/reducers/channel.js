import axios from "axios";
import {setIsCreatorTC} from "./auth";

const CREATE_CHANNEL = 'CREATE-CHANNEL'

let initialState = {
    channelData: []
}

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/'
})

export const ChannelReducer = (state=initialState, action) => {
    switch (action.type) {
        case CREATE_CHANNEL:
            return {
                ...state,
                channelData: action.channelData
            }

        default:
            return state
    }
}


const setChannelData = data => ({type: CREATE_CHANNEL, channelData: data})

export const createChannelTC = (data, id) => async dispatch => {
    const headers= {
        'accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.8',
        'Content-Type': `multipart/form-data`,
    }
    let response = await instance.post('channel/', data, headers)

    dispatch(setIsCreatorTC(id))

    return dispatch(setChannelData(response.data))
}

