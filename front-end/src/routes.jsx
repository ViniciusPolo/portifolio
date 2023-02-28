import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import Welcome from "./components/welcome/welcome";
import Whatiknow from "./components/whatiknow/whatiknow";
import Whoiam from "./components/whoiam/whoiam";
import TalkToMe from "./components/talktome/talktome";
import UpdateWords from "./containers/settings/update_words/update_words";
import Login from "./containers/login/login";
import CreateAccount from "./containers/create_account/create_account";

export default function Routers() {
    return(

        <Routes>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/create-account" element={<CreateAccount/>}/>
            <Route exact path="/" element={<Welcome/>}/>
            <Route exact path="/home" element={<Home/>}/>
            <Route exact path="/whoiam" element={<Whoiam />}/>
            <Route exact path="/whatiknow" element={<Whatiknow />}/>
            <Route exact path="/talktome" element={<TalkToMe/>}/>
            <Route exact path="/settings/updateword" element={<UpdateWords/>}/>
        </Routes>
    )
}