import useAlert from "../hooks/useAlert"
import React, { useEffect } from 'react';
import { createUseStyles } from "react-jss";
import color from "../assets/images/color.svg";
import emojiSad from "../assets/images/emoji-sad.svg";

const useStyles = createUseStyles(theme => ({
    '@keyframes fade': {
        '0%,100%': { opacity: 0 },
        '50%': { opacity: 1 }
    },
    toastBox: {
        borderRadius: '11px',
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        opacity: 0,
        animation: '$fade 3s linear'
    },
    toastBox__error: {
        backgroundColor: '#d65359',
        top: '5%',
        left: '80%',
    },
    toastBox__success: {
        backgroundColor: '#469472',
        bottom: '5%',
        left: '80%',
    },
    toastItem: {
        color: 'white',
    },
    toastSpan: {
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
        letterSpacing: '0.3px',
    },
    toastItemBox: {
        display: 'flex',
        marginRight: '50px',
        alignItems: 'center',
    },
    toastButtonBox: {
        display: 'flex',
        alignItems: 'flex-start',
    },
    toastButton: {
        backgroundColor: 'transparent',
        border: 'none',
        color: 'white',
        cursor: 'pointer',
    },
    toastIconBox: {
        marginRight: '10px',
        display: 'flex',
        justifyContent: 'center'
    },
    marginLeft10: {
        marginLeft: '10px',
    }
    ,
}))





const Toast = ({ toast }) => {
    const { closeAlert } = useAlert()
    const classes = useStyles()
    const icons = {
        success: color,
        error: emojiSad,
    }
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            closeAlert(toast.id)
        }, 3000)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [])
    return (

        <div className={`${classes.toastBox} ${classes['toastBox__' + toast.severity]}`}>
            <div className={classes.toastItemBox}>
                <div className={classes.toastIconBox}>
                    <img style={{ width: '16px', height: '16px' }} src={icons[toast.severity]} alt='succes' />
                </div>
                <div className={classes.toastItem}>
                    <span className={classes.toastSpan}>{toast.title}</span>
                </div>
            </div>
            <div className={classes.toastButtonBox}>
                <button className={classes.toastButton} onClick={() => closeAlert(toast.id)}
                >x</button>
            </div>
        </div>
    )
}


export default Toast