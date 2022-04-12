import React from "react";
import { Field, ErrorMessage, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "reactstrap";
import * as yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";

import "react-toastify/dist/ReactToastify.css";
const initialValues = {
  name: "",
  password: "",
};
const validationSchema = yup.object({
  name: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});
function LoginPage() {
  const onSubmit = async (value, reset) => {
    try {
      const response = await axios.post("http://localhost:4000/login", value);
      console.log(response);
      if (response.data) {
        Swal.fire("Good!", "Registered Successfully!", "success");
      }
    } catch (e) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Already Registered",
      });
    }

    reset.resetForm();
  };

  return (
    <>
      <div className="container-fluid">
        <div className="w-100 d-flex justify-content-center mt-5">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form>
              <h1 className="text-center m-5">Login</h1>
              <div className="form-group mb-2">
                <label htmlFor="name">User Name:</label>
                <Field
                  type="text"
                  className="form-control"
                  name="name"
                  style={{ width: "20rem" }}
                />{" "}
                <span style={{ color: "red" }}>
                  <ErrorMessage name="name" />
                </span>
              </div>
              <div className="form-group mb-2">
                <label htmlFor="pwd">Password:</label>
                <Field
                  type="password"
                  className="form-control"
                  name="password"
                />
                <span style={{ color: "red" }}>
                  <ErrorMessage name="password" />
                </span>{" "}
              </div>
              <div className="m-4 text-center">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
