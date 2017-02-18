import React from 'react'
import { Panel } from 'react-bootstrap'

import { ArticleMedia } from '../article-media'
import { ArticleDescription } from '../article-description'

const ArticleDisplayArea = (props) => {
    return (
        <div>
            <ArticleDescription article={props.article} />
            <Panel>
                <ArticleMedia article={props.article} />
            </Panel>
        </div>
    )
}

export { ArticleDisplayArea }
