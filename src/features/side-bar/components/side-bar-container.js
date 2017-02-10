import { connect } from 'react-redux'

import SideBar from './side-bar.js'

const mapStateToProps = () => {
    return null
}

const mapDispatchToProps = () => {
    return null
}

const SideBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SideBar)

export default SideBarContainer