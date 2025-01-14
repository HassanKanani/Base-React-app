import React from 'react'
import PrivateRoutes from './PrivateRoutes'
import { Route, Routes } from 'react-router-dom'
const RouteManager = () => {
    return (
        <Routes>
            <Route element={<PrivateRoutes />}>
                <Route index element={<>Home Page</>} path="/" />
                <Route element={<>Protect Page</>} path="/Protect" />
            </Route>

            <Route index element={<>Guest Page</>} path="/GuestPage" />

            <Route element={<div>NoPage</div>} path="*" />
        </Routes>
    )
}

export default RouteManager