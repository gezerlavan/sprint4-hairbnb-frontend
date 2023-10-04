import React from 'react'
import { Routes, Route } from 'react-router'

import routes from './routes'

import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'
import { StayDetails } from './pages/StayDetails'
import { StayOrder } from './pages/StayOrder'
// import { UserDetails } from './pages/UserDetails'

export function RootCmp() {

    return (
        <div className="main-layout">
            <AppHeader />
            <main>
                <Routes>
                    {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
                    <Route path="stay/:id" element={<StayDetails />} />
                    <Route path="order/:id" element={<StayOrder />} />
                    {/* <Route path="user/:id" element={<UserDetails />} /> */}
                </Routes>
            </main>
            <AppFooter />
        </div>
    )
}

