import * as Yup from 'yup'
import { Formik, Form, Field } from 'formik'
import {useState} from "react";
import '../static/videoStyles.scss'


const AddVideo = props => {
    const initialValues = {
        title: '',
        desc: '',
        category: '',
        channel: '',
    }
    const validationSchema = Yup.object({
        title: '',
        desc: '',
        category: '',
        channel: '',
    })
    const handleSubmit = values => {
        console.log(values.category)
        const formData = new FormData();
        formData.append('title', values.title)
        formData.append('desc', values.desc)
        formData.append('category', id.id)
        formData.append('channel', props.channel)
        formData.append('file', video.video[0])
        formData.append('logo', image.image[0])
        props.createVideo(formData)
    }
    const handleVideoChange = values => {
        setVideo({
            video: values.target.files
        })
    }
    const handleImageChange = values => {
        setImage({
            image: values.target.files
        })
    }
    const handleId = values => {
        setId({
            id: values.target.value
        })
    }
    const [video, setVideo] = useState()
    const [image, setImage] = useState()
    const [id, setId] = useState()
    return (
        <div>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {
                    formik => {
                        return <Form>
                            <div>
                                <div className="row">
                                      <span>
                                        <Field component="input" name="title" className="basic-slide" id="name" type="text" placeholder="There should be a text"/><label
                                          htmlFor="name">Title of your video</label>
                                      </span>
                                    <span>
                                        <Field component="textarea" name="desc" className="basic-slide" id="email" rows={10} cols={20} placeholder="There should be a text"/><label
                                        htmlFor="email">Description for your video</label>
                                      </span>
                                    <div className="select" style={{marginTop: "30px", marginLeft: "10px"}}>
                                        <Field name="category" as="select" onClick={handleId}>
                                            {
                                                props.category.map(ct =>
                                                    <option value={ct.id}>{ct.title}</option>
                                                )
                                            }
                                        </Field>
                                    </div>
                                </div>
                            </div>
                            <div className="upload-btn-wrapper">
                                <button className="btn first fullwidth">Upload a video</button>
                                <Field component="input" name="logo" type="file" onChange={handleVideoChange}/>
                            </div>
                            <div className="upload-btn-wrapper" style={{marginTop: "20px"}}>
                                <button className="btn first fullwidth">Upload a image</button>
                                <Field component="input" name="file" type="file" onChange={handleImageChange}/>
                            </div>
                            <button type="submit" disabled={formik.isSubmitting} className="btn third fullwidth">Submit form</button>
                        </Form>
                    }
                }
            </Formik>
        </div>
    )
}

export default AddVideo;
