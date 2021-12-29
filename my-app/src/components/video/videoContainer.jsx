import {connect} from "react-redux";
import {createCommentTC, getFeaturedByIdTC, getVideoByIdTC, getVideoTC} from "../../store/reducers/videos";
import {useEffect} from "react";
import {useLocation} from "react-router";
import Video from "./video";

const VideoContainer = props => {
    const videoId = useLocation().pathname.slice(8)
    useEffect(() => {
        props.getVideoByIdTC(videoId)
        props.getVideoTC()
        props.getFeaturedByIdTC(videoId)
    }, [props && videoId])

    const createComment = text => {
        props.createCommentTC(
            text.insertedText,
            videoId,
            !props.userData.profileData.id ? props.userId : props.userData.profileData.id,
            props.video.comments
        )
    }
    return (
        <div>
            <Video video={props.video} featured={props.featured} createComment={createComment}/>
        </div>
    )
}

let mapStateToProps = state => ({
    video: state.videoData.video_data,
    featured: state.videoData.featured,
    userData: state.authData,
    userId: state.authData.userId
})

export const VideoConnected = connect(mapStateToProps, {getVideoByIdTC, getVideoTC, getFeaturedByIdTC, createCommentTC})(VideoContainer)