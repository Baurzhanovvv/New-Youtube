import axios from "axios";

const GET_VIDEO = "GET-VIDEO"
const GET_VIDEO_DATA = "GET-VIDEO-DATA"
const GET_FEATURED = "GET-FEATURED"

let initialState = {
    video: [],
    video_data: [],
    featured: [],
}

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/'
})

export const VideoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_VIDEO:
            return {
                ...state,
                video: action.video
            }

        case GET_VIDEO_DATA:
            return {
                ...state,
                video_data: action.video_data
            }

        case GET_FEATURED:
            return {
                ...state,
                featured: action.featured
            }

        default:
            return state
    }
}

const setVideo = data => ({ type: GET_VIDEO, video: data })
const setVideoData = data => ({ type: GET_VIDEO_DATA, video_data: data })
const setFeatured = data => ({ type: GET_FEATURED, featured: data })

export const getVideoByCategoryIdTC = id => async dispatch => {
    let response = await instance.get(`video/?category=${id}`)
    return dispatch(setVideo(response.data))
}

export const getVideoTC = () => async dispatch => {
    let response = await instance.get('video/')
    return dispatch(setVideo(response.data))
}

export const getVideoByIdTC = id => async dispatch => {
    let response = await instance.get(`video/${id}/`)
    return dispatch(setVideoData(response.data))
}

export const getFeaturedByIdTC = id => async dispatch => {
    let response = await instance.get(`video/?except_id=${id}`)
    return dispatch(setFeatured(response.data))
}

export const getVideoByTitleTC = title => async dispatch => {
    let response = await instance.get(`video/?title=${title}`)
    return dispatch(setVideo(response.data))
}

export const createVideoTC = data => async dispatch => {
    const headers = {
        'accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.8',
        'Content-Type': `multipart/form-data`,
    }
    let response = await instance.post('create/video', data, headers)
    return dispatch(setVideoData(response.data))
}

export const createCommentTC = (data, id, profile, comments) => async dispatch => {
    let response = await instance.post('create/comment', {text:data, profile:profile})
    let comment = []
    for (let k of comments) {
        comment.push(k.id)
        comment.push(response.data.id)
    }
    let res = await instance.patch(`change/video/${id}/`, {comments: comment})
    let newResponse = await instance.get(`video/${id}/`)
    return dispatch(setVideoData(newResponse.data))
}
