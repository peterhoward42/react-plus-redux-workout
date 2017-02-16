import React from 'react'
import MediaQuery from 'react-responsive'

import { MobileContainer } from '../containers/mobile-container'
import { Desktop } from './desktop'

const ResponsiveLayout = () => (
    <div>
        <MediaQuery query='(max-width: 1224px)'>
            <MobileContainer />
        </MediaQuery>
        <MediaQuery query='(min-width: 1224px)'>
            <Desktop />
        </MediaQuery>
    </div>
)

export { ResponsiveLayout }
