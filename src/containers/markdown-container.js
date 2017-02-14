import { connect } from 'react-redux'

import MarkdownView from '../components/markdown-view'


const mapStateToProps = (state, ownProps) => {

    console.log('markdown map state to props: ' + JSON.stringify(state))
    return {
        fetchStatus: state.mainPanelReducer.markdownReducer.fetchStatus,
        markdownContent: state.mainPanelReducer.markdownReducer.content
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
}

const MarkdownContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MarkdownView)

export default MarkdownContainer