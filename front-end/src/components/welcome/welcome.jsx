import React, { useEffect } from "react";
import Button from "../button/button";
import { useState } from "react";
import { Route, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "../home/home";
import Input from "../form/input/input";
import { useFormik } from "formik";
import api from "../../services/api";


export default function Welcome(props) {
    const [language, setLanguage] = useState((''));
    const [color1, setColor1] = useState((''));
    const [color2, setColor2] = useState((''));
    const [options, setOptions] = useState([]);
    const option = [""]

    useEffect(() => {
        api.get(`http://localhost:3004/languages`)
            .then(response => response.data)
            .then((data) => {
                data.map((e) => {
                    option.push(e.language)
                })
                setOptions(option)
            })
            .catch((e) => {
                console.error(`An error occurred: ${e}`)
            });
    }, [])

    function Colors() {
        return [this.color1, color2]
    }

    const SelectColors = () => {
        const formik = useFormik({
            initialValues: {
                primaryColor: '',
                secondaryColor: ''

            },
            onSubmit: values => {
                setColor1(values.primaryColor)
                setColor2(values.secondaryColor)
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

    function ChangeButton() {
        const language = sessionStorage.getItem('language')
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
            <Button text={ChangeButton(language)} to={`/home`} language={language} />

        </>
    )
}