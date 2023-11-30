import { createUseStyles } from 'react-jss'
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import useError from "../../hooks/useError";

const useStyles = createUseStyles((theme) => ({

}))

const PrivateLayout = () => {
    const showError = useError()
    const classes = useStyles()

    return <>
        <Header />
        <main className={classes.main}>
            <Outlet />
        </main>
    </>
}

export default PrivateLayout
