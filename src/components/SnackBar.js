import React, { useContext, useEffect, useState } from 'react';
import { createUseStyles } from "react-jss";
import useAlert from '../hooks/useAlert';
import Toast from './Toast';
import cx from 'classnames'


const useStyles = createUseStyles(theme => ({
    snackBarContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        position: 'absolute',
        zIndex: '5',
    },
    snackBarContainerRightTop: {
        top: '10px',
        right: '40px',
    },
    snackBarContainerRightBottom: {
        bottom: '10px',
        right: '40px',
    },
}))



const SnackBar = ({ }) => {
    const { alertData } = useAlert()
    const classes = useStyles()
    const { error, success } = Object.groupBy(alertData, ({ severity }) => severity)
    return (
        <>
            <div className={cx(classes.snackBarContainer, classes.snackBarContainerRightBottom)}>
                {success?.map((toast) => (
                    <Toast toast={toast} key={toast.id} />
                ))}
            </div>
            <div className={cx(classes.snackBarContainer, classes.snackBarContainerRightTop)}>
                {error?.map((toast) => (
                    <Toast toast={toast} key={toast.id} />
                ))}
            </div>
        </>
    )
}


export default SnackBar