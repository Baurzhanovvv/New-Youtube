import {Helmet} from "react-helmet";
import "./static/styles.scss"
import {NavLink} from "react-router-dom";

const Content = props => {
    return (
        <div className="container content">
            <Helmet>
                <title>Home</title>
            </Helmet>
            <h2 style={{textAlign: "center", paddingTop: "25px", color: "#fff"}}>New Videos</h2>
            <div className="cards-list">

                {
                    props.video.map(v => <NavLink to={`/vid_id=${v.id}`} style={{textDecoration: "none"}}>
                            <div className="card 1">
                                <div className="card_image"><img src={v.logo}/></div>
                                <div className="card_title">
                                    <p className="title-black">{v.title}</p>
                                </div>
                            </div>
                        </NavLink>
                    )
                }

            </div>
        </div>
    )
}

export default Content