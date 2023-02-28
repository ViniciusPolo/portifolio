import React, { useEffect, useState } from "react";
import { useNavigate }  from "react-router-dom"
import { Link } from "react-router-dom";
//import "./navbar.css"
import { Div, Ul ,Li, Modal, Bar, ModalTitle } from "./style";
import words from "../../words.json"
import api from "../../services/api";
import UpdateWords from "../../containers/settings/update_words/update_words";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

export default function Navbar(props) {
    const history = useNavigate();

    const language = sessionStorage.getItem('language')
    const [whoIAm, setWhoIAm] = useState('');
    const [whatIknow, setWhatIKnow] = useState('');
    const [myProjects, setMyProjects] = useState('');
    const [talkToMe, setTalkToMe] = useState('');
    const [settings, setSettings] = useState('');
    const [showUpdateLanguage, setShowUpdateLanguage] = useState(false)
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
        setSettings(json.settings || "Settings")
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

    function setModal(props) {
        console.log("setModal")
        setShowUpdateLanguage(true)
    }
    function closeModal(props) {
        setShowUpdateLanguage(false)

    }

    return (
        <>
        <Modal>
            {showUpdateLanguage ? 
            <>
                <Bar>
                    <button onClick={closeModal}><FontAwesomeIcon icon={faCircleXmark} color="red" size="2x"/></button>
                </Bar>
                <ModalTitle>{settings}</ModalTitle>
                <UpdateWords onSubmit={() => history(-1)}/>
            </>
                 : ''}
        </Modal>
        <Div className="navbar">
            <Ul className="navbar--List">
                <Li><Link to="/whoiam">{whoIAm}</Link></Li>
                <Li><Link to="/whatiknow">{whatIknow}</Link></Li>
                <Li><Link to="/">{myProjects}</Link></Li>
                <Li><Link to="/talktome">{talkToMe}</Link></Li>
            <Li><Link to="/">{changeLanguage}</Link></Li>
            <Li><Link to="/settings/updateword">{settings}</Link></Li>
            <Li><button onClick={setModal}>{settings}</button></Li>
            </Ul>
        </Div>
        </>
    )
}