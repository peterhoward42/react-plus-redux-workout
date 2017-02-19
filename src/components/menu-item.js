/**
 * Both the mobile and desktop presentations of the app include a menu from
 * which you can choose an article. The menu is implemented using a high level
 * component from the Bootstrap library which gives complete freedom over how
 * each menu item is built.
 * 
 * This React element is the one we use for each item in that menu.
 * It renders a thumbnail image, a title and a short description - using the
 * <Media> element provided by Bootstrap.
 * 
 * It demands a callback be provided (onArticleChosen()), which it will call
 * when the user selects this menu item.
 * 
 */
import React from 'react'

import { Media } from 'react-bootstrap'


const MenuItem = (props) => {
    return (
        <Media onClick={() => { props.onArticleChosen(props.title) }}>
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

export { MenuItem }