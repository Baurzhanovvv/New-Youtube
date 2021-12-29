import {useEffect} from "react";
import {connect} from "react-redux";
import Content from "./content";
import {getVideoByCategoryIdTC, getVideoTC} from "../../store/reducers/videos";
import {useLocation} from "react-router";

const ContentContainer = props => {
    const categoryId = useLocation().pathname.slice(10)
    useEffect(() => {
        if (categoryId > 0) {
            props.getVideoByCategoryIdTC(categoryId)
        } else {
            props.getVideoTC()
        }
    }, [props && categoryId])
    return (
        <div>
            <Content video={props.video} />
        </div>
    )
}

let mapStateToProps = state => ({
    video: state.videoData.video
})

export const ContentConnected = connect(mapStateToProps, {getVideoByCategoryIdTC, getVideoTC})(ContentContainer)