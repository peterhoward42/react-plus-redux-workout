import React from 'react'

import { ListGroup, ListGroupItem } from 'react-bootstrap'

import MenuItem from './menu-item'
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
                            description={article.description}
                            onArticleChosen={props.onArticleChosen}
                        >
                        </MenuItem>
                    </ListGroupItem>
                )
            })
        }
    </ListGroup >)
}

export default Menu