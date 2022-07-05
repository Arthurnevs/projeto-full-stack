import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom'

import Login from '../views/Login/index';
import Main from '../views/Main/index';

const Rotas = ()=>{
    return(

        <BrowserRouter>
            <Routes>
                <Route path="/" caseSensitive={false} element={<Login />} />
                <Route path="/dashboard" caseSensitive={false} element={<Main />} /></Routes>
        </BrowserRouter>
    )
}

export default Rotas