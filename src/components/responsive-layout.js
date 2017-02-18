import React from 'react'
import MediaQuery from 'react-responsive'

import { MobileLayout } from './mobile/mobile-layout'
import { DesktopLayout } from './desktop/desktop-layout'

const ResponsiveLayout = () => (
    <div>
        <MediaQuery query='(max-width: 1224px)'>
            <MobileLayout />
        </MediaQuery>
        <MediaQuery query='(min-width: 1224px)'>
            <DesktopLayout />
        </MediaQuery>
    </div>
)

export { ResponsiveLayout }
