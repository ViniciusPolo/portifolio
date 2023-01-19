import React, { useEffect } from "react";
import Button from "../button/button";
import { useState } from "react";
import { Route,Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "../home/home";


export default function Welcome(props) {

    useEffect(()=>{
        
    })

    function ChangeWelcome(language) {
        console.log("------", language)
        if (language == "english") return <h1>Welcome</h1>
        else if (language == "spanish") return <h1>Bien Venido</h1>
        else if (language == "portuguese") return <h1>Bem Vindo</h1>
        else return <h1>Bienvenue</h1>
    }

    function ChangeButton(language) {
        sessionStorage.setItem('language', language)
        console.log("------", language)
        if (language == "english") return "Enter"
        else if (language == "spanish") return "Iniciar sesión"
        else if (language == "french") return "Connexion"
        else return "Entrar"
    }

    const [ language, setLanguage] = useState((''));

    const options = ["portuguese", "english", "spanish", "french"]

    return(
        <>
        {ChangeWelcome(language)}
        <select name="" id="choselanguage"
        value={language} 
       onChange={e => setLanguage(e.target.value)}>
        {options.map((value) => (
            <option value={value} key={value}>
              {console.log("language", language)}
            {value}
          </option>
        ))}
        
        
        </select>
        <Button text={ChangeButton(language)} to="/home" language={language}/>
        </>
    )
}