import {Field, Form, Formik} from "formik";
import {NavLink} from "react-router-dom";
import * as Yup from "yup";

const SignupForm = props => {
    const initialValues = {
        username: '',
        email: '',
        password: '',
    }
    const validationSchema = Yup.object({
        username: '',
        email: '',
        password: Yup.string().required('Invalid password'),
    })
    const handleSubmit = values => {
        props.signUp(values)
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
                                <Field component="input" className="user-input" type="email" name="email" placeholder="Email" required/>
                                <Field component="input" className="user-input" type="password" name="password" placeholder="Password" required/>

                                <button className="button" type="submit" disabled={formik.isSubmitting}>Sign up</button>
                                <div className="options-02">
                                    <p>Not Registered? <NavLink to="/sign-up">Create an Account</NavLink></p>
                                </div>
                            </Form>
                        }
                    }
                </Formik>
            </div>
        </div>
    )
}

export default SignupForm