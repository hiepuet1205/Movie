import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import {isAuthenticated} from './index'

const ProtectRoutes = () => {
    return (
        isAuthenticated() ? <Outlet/> : <Navigate to="/signin" />
    )
}

export default ProtectRoutes