import {React, useState, useEffect} from "react";
import { useFormik } from "formik";
import Input from "../../../components/form/input/input";
import Navbar from "../../../components/navbar/navbar";
import api from "../../../services/api";

export default function UpdateWords(props) {
    const languages = sessionStorage.getItem('language')
    const [language, setLanguage] = useState((''));
    const [options, setOptions] = useState([]);
    const option = [""]

    useEffect(() => {
        api.get(`/languages`)
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

    const UpdateWords = () => {
        const formik = useFormik({
            initialValues: {
                englishWord: '',
                word: ''

            },
            onSubmit: values => {
                alert(values.englishWord + "----", values.word)
            },
        })

        return (
            <form onSubmit={formik.handleSubmit}>
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

                <Input
                    label="English Word"
                    id="englishWord"
                    name="englishWord"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.englishWord}
                />
                <Input
                    label="word"
                    id="word"
                    name="word"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.word}
                />
                <button type="submit">Update Word</button>
            </form>
        )
    }


    return (

        <>
            <Navbar props={props} language={languages}/>
            {UpdateWords()}
        </>
    )
}