import React, { createContext, useCallback, useEffect, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid';
import SnackBar from '../components/SnackBar';

export const AlertContext = createContext(null)

const SET_VISIBILITY_ACTION = 'SET_VISIBILITY'
const TRIGGER_ALERT_ACTION = 'TRIGGER_ALERT'

const alertReducer = (state, action) => {
    switch (action.type) {
        case SET_VISIBILITY_ACTION:
            return {
                ...state,
                data: state.data.filter((toast) =>
                    toast.id !== action.payload
                )
            }
        case TRIGGER_ALERT_ACTION:
            return {
                ...state,
                data: [...state.data, { ...action.payload, id: uuidv4() }],
            }
        default:
            return state
    }
}

const AlertProvider = ({ children }) => {
    const initialState = {
        data: [],
    }
    const [alert, dispatch] = useReducer(alertReducer, initialState)

    const closeAlert = useCallback((id) => {
        dispatch({ type: SET_VISIBILITY_ACTION, payload: id })
    }, [])


    const triggerAlert = useCallback(payload => {
        dispatch({ type: TRIGGER_ALERT_ACTION, payload })
    }, [])

    return (
        <AlertContext.Provider
            value={{
                dispatchAlert: dispatch,
                isAlertOpen: alert.isOpen,
                alertData: alert.data,
                closeAlert,
                triggerAlert,
            }}
        >
            <SnackBar />
            {children}
        </AlertContext.Provider>
    )
}

export default AlertProvider
