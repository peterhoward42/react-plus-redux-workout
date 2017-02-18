import { connect } from 'react-redux'

import { YoutubeView } from '../components/youtube-view'

const mapStateToProps = (state, ownProps) => {
    return {
        videoId: state.menuReducer.selectedArticle.articleSource
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