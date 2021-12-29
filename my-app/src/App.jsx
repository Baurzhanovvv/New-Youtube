import './App.scss'
import {Route, Routes} from "react-router";
import {LoginConnected} from "./components/signup/login";
import {HeaderConnected} from "./components/headers/headerContainer";
import {ContentConnected} from "./components/content/contentContainer";
import {VideoConnected} from "./components/video/videoContainer";
import {CreateChannelConnected} from "./components/channel/create/createChannelContainer";
import {AddVideoConnected} from "./components/channel/add_video/add_videoContainer";

const App = () => {
    return (
        <div>
            <HeaderConnected />
            <Routes>
                <Route exact path="/" element={<ContentConnected />}/>

                <Route exact path="/category/:id" element={<ContentConnected />}/>

                <Route exact path="/login" element={<LoginConnected/>}/>
                <Route exact path="/sign-up" element={<LoginConnected/>}/>
                <Route exact path="/create-channel" element={<CreateChannelConnected/>}/>

                <Route exact path="/vid_id=:id" element={<VideoConnected/>}/>
                <Route exact path="/add-video" element={<AddVideoConnected/>}/>
            </Routes>
        </div>
    )
}

export default App
