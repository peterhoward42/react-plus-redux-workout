import React from 'react'

import { ListGroup, ListGroupItem } from 'react-bootstrap'

import MenuItem from './menu-item'

const menuItems = [
    {
        title: 'Learn about Merkle Trees and Bitcoin',
        description: 'A teaching article with accompanying code.',
        imageUrl: 'http://peterhoward42.wim42.webfactional.com/media/bitcoin.png',
        altText: 'Bitcoin'
    },
    {
        title: 'The lure of patterns',
        description: 'Exploring a 6 dimensional design space with sliders',
        imageUrl: 'http://peterhoward42.wim42.webfactional.com/media/lure-image.jpg',
        altText: 'Lure'
    }
]

const Menu = (props) => {
    return (< ListGroup >
        {
            menuItems.map(item => {
                const active = (item.title === props.selectedArticle) ? 'active' : ''

                return (
                    <ListGroupItem active={active} key={item.title}>
                        <MenuItem
                            imageUrl={item.imageUrl}
                            altText={item.altText}
                            title={item.title}
                            description={item.description}
                        >
                        </MenuItem>
                    </ListGroupItem>
                )
            })
        }
    </ListGroup >)
}

export default Menu