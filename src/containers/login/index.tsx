import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import  InputField from "../../components/InputField";

const Login = () => {
  const validationSchema = yup.object({
    title_ar: yup.string().trim().required("required"),
    title_en: yup.string().trim().required("required"),
    message_ar: yup.string().trim().required("required"),
    message_en: yup.string().trim().required("required"),
  });

  const formik = useFormik({
    initialValues: {
      title_ar: "",
      title_en: "",
      message_ar: "",
      message_en: "",
    },
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit(values) {},
  });

  const { values, touched, errors, handleChange, handleSubmit } = formik;

  return (
    <form onSubmit={handleSubmit}>
        
          {/* <InputField
            type="text"
            name="message_en"
            id="message_en"
            label={'messages.formControl.contentEn'}
            isRequired={true}
            isMultiline={true}
            value={values.message_en}
            // changeHandler={handleChange}
            // error={touched.message_en && Boolean(errors.message_en)}
            // helperText={
            //   touched.message_en && 'messages.errors[errors.message_en]'
            // }
            wrapperStyle={"col-12 col-sm-6"}
          /> */}
        </form>
  );
};

export default Login;
