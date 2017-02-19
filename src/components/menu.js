/**
 * Both the mobile and desktop presentations of the app include a menu from
 * which you can choose an article. The menu is implemented using a high level
 * component from the Bootstrap library which gives complete freedom over how
 * each menu item is built.
 * 
 * This React element is that menu.
 */

import React from 'react'

import { ListGroup, ListGroupItem } from 'react-bootstrap'

import { MenuItem } from './menu-item'
import { articlesSequence } from '../articles-metadata'

const Menu = (props) => {
    return (< ListGroup >
        {
            articlesSequence.map(article => {
                const active = (article.title === props.selectedArticle) ? 'active' : ''

                return (
                    <ListGroupItem
                        active={active}
                        key={article.title}
                    >
                        <MenuItem
                            imageUrl={article.imageUrl}
                            altText={article.altText}
                            title={article.title}
                            description={article.short}
                            onArticleChosen={props.onArticleChosen}
                        >
                        </MenuItem>
                    </ListGroupItem>
                )
            })
        }
    </ListGroup >)
}

export { Menu }