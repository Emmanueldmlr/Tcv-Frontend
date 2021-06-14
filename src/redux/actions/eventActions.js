import * as actionTypes from './actionTypes';

import {fetchLatestEvents, fetchSingleEvent, fetchPaginatedEvents} from '../../services/eventService'

export const getLatestEvents = () => {

    return async (dispatch) => {

        dispatch(toggleLoading())

        fetchLatestEvents()

        .then(async (result) => {

            console.log(result)

            const {data} = result

            dispatch(saveLatestEvents(data))


            dispatch(toggleLoading())

        })
        .catch( err => {

            dispatch(saveMsg({type: "ERROR", msg: " An Error occur while trying to fetch latest events, kindly try again."}))
   
            dispatch(toggleLoading())

            setTimeout( () => {

                dispatch(saveMsg(null))

            }, 5000)

        })
    }

}

export const getPaginatedEvents = (page) => {

    return async (dispatch) => {

        dispatch(toggleLoading())

        fetchPaginatedEvents(page)

        .then(async (result) => {

            const {data} = result

            dispatch(savePaginatedEvents(data))


            dispatch(toggleLoading())

        })
        .catch( err => {

            dispatch(saveMsg({type: "ERROR", msg: " An Error occur while trying to fetch latest events, kindly try again."}))
   
            dispatch(toggleLoading())

            setTimeout( () => {

                dispatch(saveMsg(null))

            }, 5000)

        })
    }

}

export const getSingleEvent = (slug) => {

    return async (dispatch) => {

        dispatch(toggleLoading())

        fetchSingleEvent(slug)

        .then(async (result) => {


            const {data} = result

            dispatch(saveSingleEvents(data))


            dispatch(toggleLoading())

        })
        .catch( err => {

            dispatch(saveMsg({type: "ERROR", msg: " An Error occur while trying to fetch latest events, kindly try again."}))
   
            dispatch(toggleLoading())

            setTimeout( () => {

                dispatch(saveMsg(null))

            }, 5000)

        })
    }

}

export const toggleLoading = () => {

    return {

      type: actionTypes.TOGGLE_EVENT_LOADING,

    };

};

export const saveLatestEvents = (data) => {

    return {

      type: actionTypes.SAVE_LATEST_EVENTS,

      payload: data

    };

};

export const saveSingleEvents = (data) => {

    return {

      type: actionTypes.SAVE_SINGLE_EVENTS,

      payload: data

    };

};

export const saveMsg = (msg) => {

    return {

        type: actionTypes.SAVE_EVENT_MSG,

        payload: msg

    }

}

export const savePaginatedEvents = (data) => {

    return {

        type: actionTypes.SAVE_PAGINATED_EVENTS,

        payload: data

    }

}