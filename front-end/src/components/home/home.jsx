import { React, useContext } from "react";
import Navbar from "../navbar/navbar";
import Whatiknow from "../whatiknow/whatiknow";
import Whoiam from "../whoiam/whoiam";
import Welcome from "../welcome/welcome"


export default function Home(props) {
    //window.location.reload()
    const cor = Welcome(props)
    console.log("cor",props)


    const language = sessionStorage.getItem('language')
    function WelComeMessage(language) {
        console.log("props", props)
        sessionStorage.getItem(language)
        console.log("------", language)
        if (language == "english") return "Hello, I'm Vinicius Polo, nice to meet you"
        else if (language == "spanish") return "Hola soy Vinicius Polo, encantado de conocerte"
        else if (language == "french") return "Bonjour, je suis Vinicius Polo, ravi de vous rencontrer"
        else return "Olá, sou Vinicius Polo, muito prazer"
    }

    return (
        <>
            <Navbar props={props} language={language} />
            {WelComeMessage(language)}



        </>
    )
}