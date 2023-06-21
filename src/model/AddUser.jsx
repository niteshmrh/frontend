import React, { useState } from "react";
import { useFormik } from "formik";
import { addUserValidationSchema } from "../utils/validations";
import axios from "axios";

const initialValues = {
  Name: "",
  Email: "",
  Mobile: "",
};

function AddUser(props) {
  const [isFormSubmit, setIsFormSubmit] = useState(false);
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: addUserValidationSchema,
      onSubmit: async (values) => {
        try {
          console.log("Add User", values);
          // console.log("Add User particular", values);
          setIsFormSubmit(true);
          const response = await axios.post(
            `http://localhost:4000/api/v1/createUser`,
            {
              name: values.Name,
              email: values.Email,
              phone_number: values.Mobile,
            },

            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          console.log("respone---", response);
          if (response.status === 201) {
            setIsFormSubmit(false);
            window.location = "/";
          } else {
            alert("Something went Wrong !!!");
          }
        } catch (error) {
          console.log(error);
        }
      },
    });

  if (values.Mobile) {
    values.Mobile = values.Mobile.replace(/\D/g, "");
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div
            className="modal fade"
            id="addUser"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <form
                  onSubmit={handleSubmit}
                  className="needs-validation"
                  noValidate
                >
                  <div className="modal-header">
                    <h5 className="modal-title text-opacity">Add User</h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body fs-14">
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        id="Name"
                        name="Name"
                        placeholder="Name"
                        className={`form-control form-control-sm ${
                          errors.Name && touched.Name
                            ? "is-invalid"
                            : touched.Name
                            ? "is-valid"
                            : ""
                        }`}
                        value={values.Name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.Name && touched.Name ? (
                        <div className="text-danger">{errors.Name}</div>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="Email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        id="Email"
                        name="Email"
                        placeholder="Email"
                        className={`form-control form-control-sm ${
                          errors.email && touched.Email
                            ? "is-invalid"
                            : touched.Email
                            ? "is-valid"
                            : ""
                        }`}
                        value={values.Email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.Email && touched.Email ? (
                        <div className="text-danger">{errors.Email}</div>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="mobile" className="form-label">
                        Mobile Number
                      </label>
                      <input
                        type="text"
                        id="Mobile"
                        name="Mobile"
                        placeholder="Mobile Number"
                        className={`form-control form-control-sm ${
                          errors.Mobile && touched.Mobile
                            ? "is-invalid"
                            : touched.Mobile
                            ? "is-valid"
                            : ""
                        }`}
                        maxLength="10"
                        value={values.Mobile}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.Mobile && touched.Mobile ? (
                        <div className="text-danger">{errors.Mobile}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      value="Submit"
                      className="btn btn-primary btn-sm"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddUser;
