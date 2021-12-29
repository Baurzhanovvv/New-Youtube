import {connect} from "react-redux";
import {createChannelTC} from "../../../store/reducers/channel";
import CreateChannel from "./createChannel";

const CreateChannelContainer = props => {
    const createChannel = (values) => {
        if (props.userData.profileData.id > 0) {
            props.createChannelTC(values, props.userData.profileData.id)
        } else {
            props.createChannelTC(values, props.userId)
        }
    }
    return (
        <div>
            <CreateChannel
                userId={!props.userData.profileData.id ? props.userId : props.userData.profileData.id}
                is_creator={props.userData.profileData.is_creator}
                createChannel={createChannel}
            />
        </div>
    )
}

let mapStateToProps = state => ({
    userData: state.authData,
    userId: state.authData.userId
})

export const CreateChannelConnected = connect(mapStateToProps, {createChannelTC})(CreateChannelContainer)