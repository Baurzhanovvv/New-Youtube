import '../static/createStyles.scss'
import * as Yup from 'yup'
import { Formik, Form, Field } from 'formik'
import {useState} from "react";
import {Navigate, Route, Routes} from "react-router-dom";


const CreateChannel = props => {
    const initialValues = {
        title: '',
        desc: '',
        slug: '',
        // user: props.user.id
    }
    const validationSchema = Yup.object({
        title: '',
        desc: '',
        slug: '',
        // user: props.user.id
    })
    const handleSubmit = async values => {
        let files = state.file[0];
        setTimeout(async () => {
            const sendData = new FormData()
            sendData.append('title', values.title)
            sendData.append('desc', values.desc)
            sendData.append('slug', values.slug)
            sendData.append('user', props.userId)
            sendData.append('img', files)
            props.createChannel(sendData)
        }, 200)
    }
    const handleChange = values => {
        let file = values.target.files
        setState({
            file: file
        })
    }
    const [state, setState] = useState()
    return (
        <div>
            {props.is_creator ? <Routes>
                <Route
                    path="*"
                    element={<Navigate to="/add-video" />}
                />
            </Routes> : null}
            <div className="container">
                <div className="content">
                    <h2 style={{textAlign: 'center', paddingTop: '2.5rem'}}>Create a channel</h2>
                    <div>
                        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                            {
                                formik => {
                                    return <Form>
                                        <div>
                                            <div className="row">
                                      <span>
                                        <Field component="input" name="title" className="basic-slide" id="name" type="text" placeholder="There should be a text"/><label
                                          htmlFor="name">Title of your channel</label>
                                      </span>
                                                <span>
                                        <Field component="textarea" name="desc" className="basic-slide" id="email" rows={10} cols={20} placeholder="There should be a text"/><label
                                                    htmlFor="email">Description for your channel</label>
                                      </span>
                                                <span>
                                        <Field component="input" name="slug" className="basic-slide" id="phone" type="text" placeholder="There should be a text"/><label
                                                    htmlFor="phone">Slug (address link)</label>
                                      </span>
                                            </div>
                                        </div>
                                        <div className="upload-btn-wrapper">
                                            <button className="btn first fullwidth">Upload a file</button>
                                            <Field component="input" name="img" type="file" onChange={handleChange}/>
                                        </div>
                                        <button type="submit" disabled={formik.isSubmitting} className="btn third fullwidth">Submit form</button>
                                    </Form>
                                }
                            }
                        </Formik>
                </div>
            </div>
        </div>
        </div>
    )
}

export default CreateChannel
