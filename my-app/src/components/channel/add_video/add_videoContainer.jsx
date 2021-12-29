import {connect} from "react-redux";
import {createVideoTC} from "../../../store/reducers/videos";
import AddVideo from "./add_video";

const AddVideoContainer = props => {
    const createVideo = data => {
        props.createVideoTC(data)
    }
    return (
        <div>
            <AddVideo
                createVideo={createVideo}
                userId={!props.userData.profileData.id ? props.userId : props.userData.profileData.id}
                channel={props.channel}
                category={props.category}
            />
        </div>
    )
}

const mapStateToProps = state => ({
    userData: state.authData,
    userId: state.authData.userId,
    category: state.categoryData.category_list,
    channel: state.authData.userData.id
})

export const AddVideoConnected = connect(mapStateToProps, {createVideoTC})(AddVideoContainer)

