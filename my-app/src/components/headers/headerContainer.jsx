import Header from "./header";
import {connect} from "react-redux";
import {getCategoryTC} from "../../store/reducers/categories";
import {useEffect} from "react";
import {getVideoByTitleTC} from "../../store/reducers/videos";

const HeaderContainer = props => {
    const findVideoByTitle = title => {
        props.getVideoByTitleTC(title)
    }
    useEffect(() => {
        props.getCategoryTC()
    }, [])
    return (
        <div>
            <Header user={props.authData} categories={props.categories} findVideoByTitle={findVideoByTitle} />
        </div>
    )
}

let mapStateToProps = state => ({
    categories: state.categoryData.category_list,
    authData: state.authData.userData
})

export const HeaderConnected = connect(mapStateToProps, {getCategoryTC, getVideoByTitleTC})(HeaderContainer)
