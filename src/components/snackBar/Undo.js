import back from "../../assets/images/back.svg";
import useAlert from "../../hooks/useAlert"
import { createUseStyles } from "react-jss";
import { useEffect } from "react";
import ReactCountdownClock from "react-countdown-clock";

const useStyles = createUseStyles(theme => ({
    '@keyframes fade': {
        '0%,100%': { opacity: 0 },
        '10%, 90%': { opacity: 1 }
    },
    toastBox: {
        borderRadius: '11px',
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        opacity: 0,
        animation: '$fade 5s linear'
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

const Undo = ({ toast }) => {
    const { closeAlert } = useAlert()
    const classes = useStyles()
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            closeAlert(toast.id)
        }, 5000)
        return () => {
            clearTimeout(timeoutId)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    console.log(toast)
    return (
        <div className={`${classes.toastBox} ${classes.toasBox__undo}`}>
            <div className={classes.toastItemBoxUndo}>
                <div className={classes.toastIconBox}>
                    <ReactCountdownClock seconds={5}
                        color="#F07478"
                        alpha={0.9}
                        weight={2}
                        size={18}
                        fontSize={9}
                        showMilliseconds={false}

                    />
                </div>
                <div className={classes.toastItem}>
                    <span className={classes.toastSpanTitleUndo}>{toast.title}</span>
                </div>
            </div>
            <div className={classes.toastButtonBoxUndo}>
                <button className={classes.toastButtonUndo}
                >
                    <div>
                        <img style={{ width: '16px', height: '16px' }} src={back} alt='back' />
                    </div>
                    <div>
                        <span className={classes.toastSpanUndo} onClick={toast?.action}>Undo</span>
                    </div>
                </button>
            </div>
        </div>
    )
}


export default Undo