import * as actionTypes from './actionTypes';

import {fetchCategories} from '../../services/categoryService'

export const getCategories = () => {

    return async (dispatch) => {

        dispatch(toggleLoading())

        fetchCategories()

        .then(async (result) => {

            console.log(result)

            const {data} = result

            dispatch(saveCategories(data))

            console.log("checking it here")

            dispatch(toggleLoading())

        })
        .catch( err => {

            dispatch(saveMsg({type: "ERROR", msg: " An Error occur while trying to fetch categories, kindly try again."}))
   
            dispatch(toggleLoading())

            setTimeout( () => {

                dispatch(saveMsg(null))

            }, 5000)

        })
    }

}

export const toggleLoading = () => {

    return {

      type: actionTypes.TOGGLE_CATEGORY_LOADING,

    };

};

export const saveCategories = (data) => {

    return {

      type: actionTypes.SAVE_CATEGORIES,

      payload: data

    };

};

export const saveMsg = (msg) => {

    return {

        type: actionTypes.SAVE_CATEGORIES_MSG,

        payload: msg

    }

}