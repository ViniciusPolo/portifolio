import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css"
import words from "../../words.json"

export default function Navbar(props) {
    const language = sessionStorage.getItem('language')
    const [whoIAm, setWhoIAm] = useState('');
    const [whatIknow, setWhatIKnow] = useState('');
    const [myProjects, setMyProjects] = useState('');
    const [talkToMe, setTalkToMe] = useState('');
    const [changeLanguage, setChangeLanguage] = useState('');

    useEffect(() => {

        const whoIAmSelected = words.find((e) => e.language === language)
        setWhoIAm(whoIAmSelected.whoIAm)
        setWhatIKnow(whoIAmSelected.whatIKnow)
        setMyProjects(whoIAmSelected.myProjects)
        setTalkToMe(whoIAmSelected.talkToMe)
        setChangeLanguage(whoIAmSelected.changeLanguage)

    }, [])

    return (
        <div className="navbar">
            <ul className="navbar--list">
                <li><Link to="/whoiam">{whoIAm}</Link></li>
                <li><Link to="/whatiknow">{whatIknow}</Link></li>
                <li><Link to="/">{myProjects}</Link></li>
                <li><Link to="/talktome">{talkToMe}</Link></li>
            <li><Link to="/">{changeLanguage}</Link></li>
            </ul>
        </div>
    )
}