import React, { useEffect } from "react";
import Button from "../button/button";
import { useState } from "react";
import { Route, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "../home/home";
import Input from "../form/input/input";
import { useFormik } from "formik";


export default function Welcome(props) {

    const SelectColors = () => {
        const formik = useFormik({
            initialValues: {
                primaryColor: '',
                secondaryColor: ''

            },
            onSubmit: values => {
                sessionStorage.setItem('primaryColor', values.primaryColor)
                sessionStorage.setItem('secondaryColor', values.secondaryColor)
                alert(JSON.stringify(values, null, 2));
            },
        })

        return (
            <form onSubmit={formik.handleSubmit}>

                <Input
                    label="Primary Color"
                    id="primaryColor"
                    name="primaryColor"
                    type="color"
                    onChange={formik.handleChange}
                    value={formik.values.primaryColor}
                />
                <Input
                    label="Secondary Color"
                    id="secondayryColor"
                    name="secondaryColor"
                    type="color"
                    onChange={formik.handleChange}
                    value={formik.values.secondaryColor}
                />
                <button type="submit">Escolher Cores</button>
            </form>
        )
    }

    function ChangeWelcome(language) {
        switch (language) {
            case "english":
                return <h1>Welcome</h1>
                break;
            case "spanish":
                return <h1>Bien Venido</h1>
                break;
            case "portuguese":
                return <h1>Bem Vindo</h1>
                break;
            case "french":
                return <h1>Bienvenue</h1>
                break;
            default:
                return <h1>Choose Language</h1>
                break;
        }
    }

    function ChangeButton(language) {
        sessionStorage.setItem('language', language)
        switch (language) {
            case "english":
                return "Welcome"
                break;
            case "spanish":
                return "Bien Venido"
                break;
            case "portuguese":
                return "Bem Vindo"
                break;
            case "french":
                return "Bienvenue"
                break;
            default:
                return "Choose Language"
                break;
        }
    }

    const [language, setLanguage] = useState((''));

    const options = ["portuguese", "english", "spanish", "french"]

    return (
        <>
            {ChangeWelcome(language)}
            {SelectColors()}
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
            <Button text={ChangeButton(language)} to="/home" language={language} />

        </>
    )
}