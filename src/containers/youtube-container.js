import { connect } from 'react-redux'

import { articleSourceForTitle } from '../articles-metadata'
import { YoutubeView } from '../components/youtube-view'

const mapStateToProps = (state, ownProps) => {
    return {
        videoId: articleSourceForTitle(state.menuReducer.selectedArticle)
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