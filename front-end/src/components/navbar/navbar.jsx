import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import "./navbar.css"
import { Div, Ul ,Li } from "./style";
import words from "../../words.json"
import api from "../../services/api";

export default function Navbar() {
    const language = sessionStorage.getItem('language')
    const [whoIAm, setWhoIAm] = useState('');
    const [whatIknow, setWhatIKnow] = useState('');
    const [myProjects, setMyProjects] = useState('');
    const [talkToMe, setTalkToMe] = useState('');
    const [changeLanguage, setChangeLanguage] = useState('');

    //const secondaryColor = sessionStorage.getItem('secondaryColor')

    useEffect(() => {
        api.get(`/languages/${language}`)
        .then(response => response.data)
        .then((data) => {
          const json = JSON.parse(data.languages[0].words)
          setWhoIAm(json.whoIAm)
        setWhatIKnow(json.whatIKnow)
        setMyProjects(json.myProjects)
        setTalkToMe(json.talkToMe)
        setChangeLanguage(json.changeLanguage)
        })
        .catch((e) => {
            console.error(`An error occurred: ${e}`)
        });
        //const whoIAmSelected = words.find((e) => e.language === language)
        //const whoIAmSelected = data.map()
        //const whoIAmSelected = data.map()
        // setWhoIAm(whoIAmSelected.whoIAm)
        // setWhatIKnow(whoIAmSelected.whatIKnow)
        // setMyProjects(whoIAmSelected.myProjects)
        // setTalkToMe(whoIAmSelected.talkToMe)
        // setChangeLanguage(whoIAmSelected.changeLanguage)

    }, [])

    return (
        <Div className="navbar">
            <Ul className="navbar--List">
                <Li><Link to="/whoiam">{whoIAm}</Link></Li>
                <Li><Link to="/whatiknow">{whatIknow}</Link></Li>
                <Li><Link to="/">{myProjects}</Link></Li>
                <Li><Link to="/talktome">{talkToMe}</Link></Li>
            <Li><Link to="/">{changeLanguage}</Link></Li>
            <Li><Link to="/settings/updateword">Settings</Link></Li>
            </Ul>
        </Div>
    )
}