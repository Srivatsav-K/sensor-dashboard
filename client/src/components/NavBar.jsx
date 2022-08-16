import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
//----------------------------------------------------------------------------------------
import { userLoggedIn, userLoggedOut } from '../actions/userActions'
//----------------------------------------------------------------------------------------

const NavBar = (props) => {
    const isLoggedIn = useSelector((state) => {
        return state.user.isLoggedIn
    })

    const dispatch = useDispatch()

    useEffect(() => {
        if (localStorage.getItem('token')) {
            dispatch(userLoggedIn())
        }
    }, [dispatch])


    const handleLogOut = () => {
        localStorage.clear('token')
        dispatch(userLoggedOut())
        props.history.push('/')
    }

    return (
        <div>
            {(isLoggedIn) && (
                <button onClick={handleLogOut}>
                    Log out
                </button>
            )}
        </div>
    )
}

export default withRouter(NavBar)