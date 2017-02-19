/**
 * This app uses different layout and navigation UXP for desktop and mobile
 * screen sizes.
 * 
 * This React elemement sits near the top of the element display hierarchy,
 * and takes responsibility for meausuring the space available, and rendering
 * either the mobile or desktop variant accordingly.
 */

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
