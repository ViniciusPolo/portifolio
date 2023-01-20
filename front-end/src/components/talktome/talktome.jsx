import React from "react";
import { useFormik } from "formik";
import Navbar from "../navbar/navbar";
import Input from "../form/input/input";

export default function TalkToMe() {
  const language = sessionStorage.getItem('language')

  const SignupForm = () => {
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    const formik = useFormik({
      initialValues: {
        nome: '',
        email: '',
        comment: '',
        telefone: ''
      },
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      },
    });
    return (
      <form onSubmit={formik.handleSubmit}>
        <Input
          label="Nome"
          id="nome"
          name="nome"
          placeholder="nome"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.nome}
        />
        <Input
          label="Email"
          id="email"
          name="email"
          placeholder="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <Input
          label="Telefone"
          id="telefone"
          name="telefone"
          placeholder="telefone"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.telefone} />
        <Input
          label="Comment"
          id="comment"
          name="comment"
          placeholder="comment"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.comment}
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