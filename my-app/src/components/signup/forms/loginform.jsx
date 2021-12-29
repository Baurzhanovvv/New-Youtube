import * as Yup from 'yup'
import { Formik, Form, Field } from 'formik'
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';

const LoginForm = props => {
    const initialValues = {
        username: '',
        password: '',
        rememberMe: false
    }
    const validationSchema = Yup.object({
        username: '',
        password: Yup.string().required('Invalid password'),
        rememberMe: Yup.boolean()
    })
    const handleSubmit = values => {
        props.signIn(values);
    }
    return (
        <div className="formik">
            <div className="form">
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    {
                        formik => {
                            return <Form className="login-form">
                                <i className="fas fa-user-circle"/>
                                <Field component="input" className="user-input" type="text" name="username" placeholder="Username" required/>
                                <Field component="input" className="user-input" type="password" name="password" placeholder="Password" required/>
                                <div className="options-01">
                                    <label className="remember-me">
                                        <Field component="input" type="checkbox" name="rememberMe" />
                                        Remember me
                                    </label>
                                    <a href="#!">Forgot your password?</a>
                                </div>
                                <button className="button" type="submit" disabled={formik.isSubmitting}>Log in</button>
                                <div className="options-02">
                                    <p>Not Registered? <NavLink to="/sign-up">Create an Account</NavLink></p>
                                </div>
                            </Form>
                        }
                    }
                </Formik>
                {
                    props.user.id > 0 ? <Routes>
                        <Route
                            path="*"
                            element={<Navigate to="/" />}
                        />
                    </Routes> : null
                }
            </div>
        </div>
    )
}

export default LoginForm