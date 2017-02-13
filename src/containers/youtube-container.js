import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
    return {
        url: articleSourceForTitle(state.menu.chosen)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
}
}

const YoutubeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(YoutubeView)

export default YoutubeContainer