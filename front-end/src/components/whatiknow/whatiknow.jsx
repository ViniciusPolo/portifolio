import React from "react";
import { Link } from "react-router-dom";
import "./whatiknow.css"

export default function Whatiknow(language) {
    function Hello(language) {
        sessionStorage.setItem('language', language)
        console.log("------", language)
        if (language == "English") return "Hello I'm Vinicius Polo"
        else if (language == "Spanish") return "Holá yo soy Vinicius Polo"
        else if (language == "French") return "Salut, je suis Vinicius Polo"
        else return "Olá sou Vinicius Polo"
    }
    return(
        <div className="whatiknow">
                <h1>{Hello(language)}</h1>
        </div>
    )
}