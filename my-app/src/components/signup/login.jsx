import {useLocation} from "react-router";
import SignupForm from "./forms/signupform";
import LoginForm from "./forms/loginform";
import './static/signup.scss'
import {signInData, signUpData} from "../../store/reducers/auth";
import {connect} from "react-redux";

const Login = props => {
    const location = useLocation()
    const signUp = values => {
        props.signUpData(values)
    }
    const signIn = values => {
        props.signInData(values)
    }
    return (
        <div className="container">
            {
                location.pathname === '/login' ?
                <LoginForm user={props.authData} signIn={signIn} />
                : <SignupForm signUp={signUp} />
            }
        </div>
    )
}

let mapStateToProps = state => ({
    authData: state.authData.userData
})

export const LoginConnected = connect(mapStateToProps, {signUpData, signInData})(Login);