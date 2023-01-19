import React from "react";
import { useFormik } from "formik";
import Navbar from "../navbar/navbar";

export default function TalkToMe() {
  const language = sessionStorage.getItem('language')

  const SignupForm = () => {
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    const formik = useFormik({
      initialValues: {
        nome: '',
        email: '',
      },
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      },
    });
    return (
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Nome</label>
        <input
          id="nome"
          name="nome"
          placeholder="nome"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.nome}
        />
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          placeholder="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <button type="submit">Submit</button>
      </form>
    );
  };
  return (
    <>
      <Navbar language={language} />
      {SignupForm()}

    </>
  );
}