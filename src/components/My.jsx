import Profile from './Profile';
import Login from './Login';


const My = ({session = {}, logout }) => {

    return (
    <>
        (session.loginUser? <Profile session = {session} /> : <Login />)
    </>

    )
}

export default My;