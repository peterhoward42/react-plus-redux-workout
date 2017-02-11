import React from 'react'

import { Media } from 'react-bootstrap'


const MenuItem = (props) => {
    return (
        <Media>
            <Media.Left>
                <img
                    width={64} height={64}
                    src={props.imageUrl}
                    alt={props.altText} />
            </Media.Left>
            <Media.Body>
                <Media.Heading>{props.title}</Media.Heading>
                <p>{props.description}</p>
            </Media.Body>
        </Media>
    )
}

export default MenuItem