import React from 'react'
import { Button, Glyphicon } from 'react-bootstrap'

const BackButtonBar = (props) => {
    return (
        <Button block onClick={props.onBackButtonClicked}>
            <Glyphicon glyph="arrow-left" />
            &nbsp;Back
        </Button>
    )
}

export { BackButtonBar }
