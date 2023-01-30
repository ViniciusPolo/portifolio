import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import "./navbar.css"
import { Div, Ul ,Li } from "./style";
import words from "../../words.json"

export default function Navbar(params) {
    const language = sessionStorage.getItem('language')
    const [whoIAm, setWhoIAm] = useState('');
    const [whatIknow, setWhatIKnow] = useState('');
    const [myProjects, setMyProjects] = useState('');
    const [talkToMe, setTalkToMe] = useState('');
    const [changeLanguage, setChangeLanguage] = useState('');

    //const secondaryColor = sessionStorage.getItem('secondaryColor')

    useEffect(() => {
        console.log("color2", params.color2)
        const whoIAmSelected = words.find((e) => e.language === language)
        setWhoIAm(whoIAmSelected.whoIAm)
        setWhatIKnow(whoIAmSelected.whatIKnow)
        setMyProjects(whoIAmSelected.myProjects)
        setTalkToMe(whoIAmSelected.talkToMe)
        setChangeLanguage(whoIAmSelected.changeLanguage)

    }, [])

    return (
        <Div props={params.color2} className="navbar">
            <Ul props={params.color2} className="navbar--List">
                <Li><Link to="/whoiam">{whoIAm}</Link></Li>
                <Li><Link to="/whatiknow">{whatIknow}</Link></Li>
                <Li><Link to="/">{myProjects}</Link></Li>
                <Li><Link to="/talktome">{talkToMe}</Link></Li>
            <Li><Link to="/">{changeLanguage}</Link></Li>
            </Ul>
        </Div>
    )
}