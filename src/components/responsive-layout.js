import React from 'react'
import MediaQuery from 'react-responsive'

import { Mobile } from './mobile'
import { Desktop } from './desktop'
import { SHOW_MENU } from './mobile'

const ResponsiveLayout = () => (
    <div>
        <MediaQuery query='(max-width: 1224px)'>
            <Mobile viewMode={SHOW_MENU} />
        </MediaQuery>
        <MediaQuery query='(min-width: 1224px)'>
            <Desktop />
        </MediaQuery>
    </div>
)

export { ResponsiveLayout }
