import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import Welcome from "./components/welcome/welcome";
import Whatiknow from "./components/whatiknow/whatiknow";
import Whoiam from "./components/whoiam/whoiam";
import TalkToMe from "./components/talktome/talktome";

export default function Routers() {
    return(

        <Routes>
            <Route exact path="/" element={<Welcome/>}/>
            <Route exact path="/home" element={<Home/>}/>
            <Route exact path="/whoiam" element={<Whoiam />}/>
            <Route exact path="/whatiknow" element={<Whatiknow />}/>
            <Route exact path="/talktome" element={<TalkToMe/>}/>
        </Routes>
    )
}