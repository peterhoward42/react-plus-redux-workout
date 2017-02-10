import React from 'react'

import { MenuOfEmailFolders } from '../../../react-components/presentation.js'

export function SideBar(props) {
    return (
        <MenuOfEmailFolders
            folders={props.folders}
            selectedFolder={props.selectedFolder}
        />
    )
}       