import logo from './static/logo.png'
import './static/styles.scss'
import {Formik, Field, Form} from "formik";
import * as Yup from "yup"
import {NavLink} from "react-router-dom";

const Header = props => {
    const initialValues = {
        inputText: ''
    }
    const validationSchema = Yup.object({
        inputText: ''
    })
    const handleSubmit = values => {
        props.findVideoByTitle(values.inputText)
    }
    return (
        <div>
            <div className="header">
                <div className="header__inner">
                    <div className="header__title">
                        <NavLink to="/" style={{textDecoration: "none", display: "flex", alignItems: "center"}}>
                            <img src={logo} alt="There should be logo"/>
                            <h2>MineTube</h2>
                        </NavLink>
                    </div>
                    <div className="header__search">
                        <Formik
                            className="search-container"
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {
                                formik => {
                                    return <Form>
                                        <Field
                                            component="input"
                                            name="inputText"
                                            id="search-bar"
                                            placeholder="There should be a video title!"
                                        />
                                        <button type="submit" className="search-icon">
                                            <i className="fa fa-search" ></i>
                                        </button>
                                    </Form>
                                }
                            }
                        </Formik>
                    </div>
                    <div className="header__nav">
                        <NavLink to="/" className="header__nav-link">Home <i className="fas fa-home"/></NavLink>
                        <a href="#!" className="header__nav-link">Category <i className="fas fa-chevron-down"/>
                            <ol className="dropdown">
                                {
                                    props.categories.map(ct =>
                                        <li className="dropdown__el" key={ct.id}>
                                            <NavLink to={`/category/${ct.id}`} className="dropdown__el-a">{ct.title}</NavLink>
                                        </li>
                                    )
                                }
                            </ol>
                        </a>
                        <NavLink to="/login" className="header__nav-link">
                            {
                                props.user.username ? <NavLink style={{textDecoration: "none"}} to="/create-channel">{props.user.username} <i className = "fas fa-user-circle" /></NavLink> : <>Login <i className="fas fa-sign-in-alt"/></>
                            }
                            </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
