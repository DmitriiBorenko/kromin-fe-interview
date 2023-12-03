import { createUseStyles } from "react-jss";
import useAlert from '../../hooks/useAlert';
import Toast from './Toast';
import cx from 'classnames'
import Undo from './Undo';


const useStyles = createUseStyles(theme => ({
    snackBarContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        position: 'absolute',
        zIndex: '5',
        alignItems: 'end'
    },
    snackBarContainerRightTop: {
        top: '10px',
        right: '40px',
    },
    snackBarContainerRightBottom: {
        bottom: '10px',
        right: '40px',
    },
    test: {
        display: 'flex'
    }
}))



const SnackBar = () => {
    const { alertData } = useAlert()
    const classes = useStyles()
    const { error, success, undo } = Object.groupBy(alertData, ({ severity }) => severity)
    return (
        <div className={classes.test}>
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
            <div className={cx(classes.snackBarContainer, classes.snackBarContainerRightBottom)}>
                {undo?.map((toast) => (
                    <Undo toast={toast} key={toast.id} />
                ))}
            </div>
        </div>
    )
}


export default SnackBar