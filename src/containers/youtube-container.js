import { connect } from 'react-redux'

import { articleFromTitle } from '../articles-metadata'
import { YoutubeView } from '../components/youtube-view'

const mapStateToProps = (state, ownProps) => {
    return {
        videoId: articleFromTitle[
            state.menuReducer.selectedArticle].articleSource
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
}

const YoutubeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(YoutubeView)

export { YoutubeContainer }