import useAlert from "../../hooks/useAlert"
import React, { useEffect } from 'react';
import { createUseStyles } from "react-jss";
import color from "../../assets/images/color.svg";
import emojiSad from "../../assets/images/emoji-sad.svg";

const useStyles = createUseStyles(theme => ({
    '@keyframes fade': {
        '0%,100%': { opacity: 0 },
        '20%, 80%': { opacity: 1 }
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
    },
    toastBox__success: {
        backgroundColor: '#469472',
    },
    toasBox__undo: {
        minWidth: '230px',
        minHeight: '50px',
        maxWidth: '230px',
        maxHeight: '50px',
        padding: '13px 16px',
        backgroundColor: '#11181C',
    },
    toastItemBox: {
        display: 'flex',
        marginRight: '50px',
        alignItems: 'center',
    },
    toastItem: {
        color: 'white',
    },
    toastSpanTitle: {
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
        letterSpacing: '0.3px',
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
    },
    fontWeightLight: {
        fontWeight: 500
    },

    toastButtonBoxUndo: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer'
    },
    toastSpanUndo: {
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
        letterSpacing: '0.3px',
        color: '#F07478',
    },
    toastItemBoxUndo: {
        display: 'flex',
        alignItems: 'center',
    },
    toastSpanTitleUndo: {
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 'normal',
        letterSpacing: '0.3px',
    },
    toastButtonUndo: {
        display: 'flex',
        alignContent: 'center',
        gap: '5px'
    }
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            <div className={`${classes.toastBox} ${classes['toastBox__' + toast.severity]}`}>
                <div className={classes.toastItemBox}>
                    <div className={classes.toastIconBox}>
                        <img style={{ width: '16px', height: '16px' }} src={icons[toast.severity]} alt='succes' />
                    </div>
                    <div className={classes.toastItem}>
                        <span className={classes.toastSpanTitle}>{toast.title}</span>
                    </div>
                </div>
                <div className={classes.toastButtonBox}>
                    <button className={classes.toastButton} onClick={() => closeAlert(toast.id)}
                    >x</button>
                </div>
            </div>
        </>
    )
}


export default Toast