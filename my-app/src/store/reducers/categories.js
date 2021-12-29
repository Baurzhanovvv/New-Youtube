import axios from "axios";

const GET_CATEGORIES = "GET-CATEGORIES"

let initialState = {
    category_list: []
}

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/'
})

export const CategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                category_list: action.category_list
            }

        default:
            return state
    }
}

const setCategoryData = data => ({ type: GET_CATEGORIES, category_list: data })


export const getCategoryTC = () => async dispatch => {
    let response = await instance.get('category/')
    return dispatch(setCategoryData(response.data))
}

