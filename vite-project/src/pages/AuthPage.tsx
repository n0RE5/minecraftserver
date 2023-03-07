import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Inputbox from '../components/UI/Inputbox/Inputbox';
import { authLogin, authRegistration } from '../httpAPI/userAPI';
import { setIsAuth, setUser } from '../store/userSlice';
import "../styles/AuthPage.scss";

function AuthPage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [authType, setAuthType] = useState<boolean>(true)
    const [username, setUsername] = useState<string>("")
    const [login, setLogin] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [searchParams] = useSearchParams()
    const type = searchParams.get("authType")

    const auth = async (e: React.MouseEvent) => {
        try {
            e.preventDefault()
            let response
            if(authType) {
                response = await authLogin({email: login, password: password})
            } else {
                response = await authRegistration({username, email: login, password: password})
            }
            console.log(response);
            navigate('/profile')
            dispatch(setIsAuth(true))
            dispatch(setUser(response))
        } catch (error) {
            console.log(error)
        }
    }   

    useEffect(() => {
        if (type === "register") {
            setAuthType(false)
        }
    }, [])

    return (
        <>
            <Navbar />
            <div className='auth'>
                <form className='auth_w'>
                    <div className='auth_login'>{authType ? "Login" : "Registration"}</div>
                    {authType
                        ? null
                        : <Inputbox value={username} setValue={setUsername}>Username</Inputbox>
                    }
                    <Inputbox value={login} setValue={setLogin}>{authType ? "Login" : "Email"}</Inputbox>
                    <Inputbox value={password} type="password" setValue={setPassword}>
                        <div>Password</div>
                        {authType
                            ? <Link to={''}>Forget password?</Link>
                            : null
                        }
                    </Inputbox>
                    <button onClick={auth} className='auth_authbtn'>{authType ? "Login" : "Register"}</button>
                    <div className='auth_switch' onClick={() => setAuthType((prev) => !prev)}>No account? <Link to={''}>{authType ? "Register" : "Login"}</Link></div>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default AuthPage;