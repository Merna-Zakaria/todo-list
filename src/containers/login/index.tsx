import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { Container, Row, Col } from 'react-bootstrap'
import BasicButton from "../../components/Button";
import InputField from "../../components/InputField";

export const Login = () => {
  const validationSchema = yup.object({
    email: yup.string().trim().required("required").email('Please enter correct mail'),
    password: yup.string().trim().required("required")
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit(values) { 
      console.log('values', values)
    },
  });

  const { values, touched, errors, handleChange, handleSubmit } = formik;

  return (
    // <Stack spacing={2} direction="row">
    <Container fluid="md">
  <Row>
    <Col sm={{ span: 4, offset: 4 }} className='d-flex align-items-center' style={{height: '500px'}}>
    <form onSubmit={handleSubmit}>
      <InputField
        type="email"
        name="email"
        id="email"
        label={'Email'}
        isRequired={true}
        isMultiline={true}
        value={values.email}
        changeHandler={handleChange}
        error={Boolean(touched.email && Boolean(errors.email))}
        helperText={`${errors.email}`}
        wrapperStyle={""}
        className={""}
        max={50}
        disabled={false}
        rows={1}
        description={""} />

         <InputField
        type="password"
        name="password"
        id="password"
        label={'password'}
        isRequired={true}
        isMultiline={true}
        value={values.password}
        changeHandler={handleChange}
        error={Boolean(touched.password && Boolean(errors.password))}
        helperText={`${errors.password}`}
        wrapperStyle={""}
        className={""}
        max={50}
        disabled={false}
        rows={1}
        description={""} />
        <BasicButton label="Login" layout='contained' typeBtn='submit'/>
    </form>
    </Col>
  </Row>
</Container>
   
  );
};


