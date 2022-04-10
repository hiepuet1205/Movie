import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import ProtectRoutes from './auth/helper/ProtectRoutes'

import Signup from './user/Signup'
import Signin from './user/Signin'
import UserDashboard from './user/UserDashboard'
import Main from './core/Main'
import MoviePage from './core/MoviePage'
import PersonPage from './core/PersonPage'

export default function Router() {
  return (
    <BrowserRouter>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
            <Route path="/signup" exact element={<Signup />}/>
            <Route path="/signin" exact element={<Signin />}/>
            <Route element={<ProtectRoutes/>}>
                <Route path="/" exact element={<Main />}/>
                <Route path="/movie/:id" exact element={<MoviePage />}/>
                <Route path="/profile/:id" exact element={<PersonPage />}/>
                <Route path="/user/dashbroad" exact element={<UserDashboard />}/>
            </Route>
        </Routes>
    </BrowserRouter>
  );
}