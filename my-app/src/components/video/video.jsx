import './static/styles.scss'
import { Formik, Form, Field } from 'formik'
import Features from "./features";
import u from "./static/user-post.module.css";
import * as Yup from 'yup'

let defaultImageURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvts5aHBstDkR8PigS4RmZkbZy78zpZoSuOw&usqp=CAU";

const Video = props => {
    const initialValues = {
        insertedText: ''
    }
    const validationSchema = Yup.object({
        insertedText: ''
    })
    const handleSubmit = values => {
        props.createComment(values)
    }
    return (
        <div>
            <div className="container video" style={{marginTop: "50px"}}>
                <section className="vid">
                    <video src={props.video.file} autoPlay controls preload="true" />
                    <div className="vid__info">
                        <div className="vid__info-images">
                            <img src={props.video.length !== 0 ? props.video.channel.img : defaultImageURL} alt="here should be a logo of channel"/>
                        </div>
                        <h2 style={{marginTop: "20px"}}>{props.video.title}</h2> <br/>
                        <p>Date: {props.video.date}</p>
                    </div> <hr/>
                <div className="comments">
                    <h2 style={{textAlign: "center", paddingTop: "20px"}}>Comments (
                        {props.video.length !== 0 ? props.video.comments.length : 0}
                        )</h2>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                        {
                            formik => {
                                return <Form>
                                    <Field
                                        component="textarea"
                                        name="insertedText"
                                        type="text"
                                        cols="99" rows="15"
                                        placeholder="Here should be your text..."
                                    />
                                    <button type="submit" className="btn first">Send the text</button>
                                </Form>
                            }
                        }
                    </Formik>
                    {props.video.length !== 0 ? props.video.comments.map(c =>
                        <div>
                            <div className={u.info}>
                                <div className={u.avatar}>
                                    <img
                                        src={defaultImageURL}
                                        alt="logo" />
                                </div>
                                <div className={u.name}>
                                    <h4>
                                        NoName
                                    </h4>
                                </div>
                                <div className={u.text}>
                                    {c.text}
                                </div>
                            </div>
                        </div>
                    ) : <div>Nothing</div>}
                </div>
                </section>
                <Features featured={props.featured}/>
            </div>

        </div>
    )
}

export default Video