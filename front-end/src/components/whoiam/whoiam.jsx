import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/navbar";
import "./whoiam.css"

export default function Whoiam(language) {
    function Hello(language) {
        sessionStorage.setItem('language', language)
        console.log("------", language)
        if (language == "English") return "Hello I'm Vinicius Polo"
        else if (language == "Spanish") return "Holá yo soy Vinicius Polo"
        else if (language == "French") return "Salut, je suis Vinicius Polo"
        else return "Olá sou Vinicius Polo"
    }
    return(
        <div className="whoiam">
                <h1>{Hello(language)}</h1>
        </div>
    )
}