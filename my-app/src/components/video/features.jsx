import {NavLink} from "react-router-dom";

const Features = props => {
    return (
        <div>
            <section className="features">
                {
                    props.featured.map(f =>
                        <NavLink to={`/vid_id=${f.id}`} style={{textDecoration: "none"}}>
                            <div className="card 2">
                                <div className="card_image">
                                    <img
                                        src={f.logo}/>
                                </div>
                                <div className="card_title">
                                    <p className="title-black">{f.title}</p>
                                </div>
                            </div>
                        </NavLink>
                    )
                }
            </section>
        </div>
    )
}

export default Features