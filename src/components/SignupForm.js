import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Table from "./Table";

const SignupForm = () => {
  const [credentials, setCredentials] = useState([]);
  const [filterText, setFilterText] = useState("");

  // Filtered Data
  const filteredTable = credentials?.filter((el) => {
    return el.name.includes(filterText);
  });

  // console.log(filterText);
  // console.log(filteredTable);

  const formik = useFormik({
    initialValues: {
      name: "",
      dob: "",
      sex: "",
      mobile: "",
      govtIdType: "",
      govtID: "",
      guardianLabel: "",
      guardianName: "",
      email: "",
      emergencyNo: "",
      address: "",
      state: "",
      city: "",
      country: "",
      pincode: "",
      occupation: "",
      religion: "",
      maritalStatus: "",
      bloodGroup: "",
      nationality: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .matches(/^[a-zA-Z ]*$/, "Invalid Name")
        .min(3, "Must be 3 characters or more")
        .max(30, "Must be 30 characters or less")
        .required("Required"),

      dob: Yup.string()
        .matches(/^[0-9 /]*$/, "Invalid Date of Birth or Age")
        .required("Required"),
      mobile: Yup.string()
        .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, "Invalid Mobile Number")
        .required("Required"),
      govtID: Yup.string().matches(/^[A-Z0-9]*$/, "Invalid Govt ID"),
      guardianName: Yup.string()
        .matches(/^[a-zA-Z ]*$/, "Invalid Guardian Name")
        .min(3, "Must be 3 characters or more")
        .max(30, "Must be 30 characters or less"),
      email: Yup.string()
        .matches(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          "Invalid Email address"
        )
        .required("Required"),
      emergencyNo: Yup.string().matches(
        /^(\+\d{1,3}[- ]?)?\d{10}$/,
        "Invalid Emergency Number"
      ),
      address: Yup.string()
        .max(100, "Address must contain 100 characters or less")
        .required("Required"),
      state: Yup.string()
        .matches(/^[a-zA-Z ]*$/, "Invalid state")
        .required("Required"),
      city: Yup.string()
        .matches(/^[a-zA-Z ]*$/, "Invalid city/town/village")
        .required("Required"),
      country: Yup.string()
        .matches(/^[a-zA-Z ]*$/, "Invalid country")
        .required("Required"),
      pincode: Yup.string()
        .matches(/^[0-9]*$/, "Invalid pincode")
        .max(6, "Pincode cannot have more than 6 digits")
        .required("Required"),
      occupation: Yup.string().matches(/^[a-zA-Z ]*$/, "Invalid occupation"),
      nationality: Yup.string().matches(/^[a-zA-Z]*$/, "Invalid nationality"),
    }),
    onSubmit: (values) => {
      setCredentials([...credentials, values]);
    },
  });
  // console.log(credentials);

  return (
    <div>
      <h1 className="heading">Formik Task</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="personal-details-container">
          <h6>Personal Details</h6>
          <div className="row">
            <div className="col flex-grow">
              <label htmlFor="name">
                Name<span>*</span>
              </label>
              <div className="flex flex-direction-column">
                <div className="error-msg">
                  {formik.touched.name && formik.errors.name ? (
                    <div>{formik.errors.name}</div>
                  ) : null}
                </div>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  {...formik.getFieldProps("name")}
                />
              </div>
            </div>
            <div className="col ">
              <label htmlFor="dob">
                Date of Birth or Age<span>*</span>
              </label>
              <div className="flex flex-direction-column">
                <div className="error-msg">
                  {formik.touched.dob && formik.errors.dob ? (
                    <div>{formik.errors.dob}</div>
                  ) : null}
                </div>
                <input
                  type="text"
                  id="dob"
                  placeholder="DD/MM/YYYY or Age in Years"
                  {...formik.getFieldProps("dob")}
                />
              </div>
            </div>
            <div className="col">
              <label htmlFor="sex">Sex</label>

              <div className="flex flex-direction-column">
                <div className="error-msg"></div>
                <select id="sex" {...formik.getFieldProps("sex")}>
                  <option value="" disabled>
                    Enter Sex
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col flex-grow">
              <label htmlFor="mobile">
                Mobile<span>*</span>
              </label>
              <div className="flex flex-direction-column">
                <div className="error-msg">
                  {formik.touched.mobile && formik.errors.mobile ? (
                    <div>{formik.errors.mobile}</div>
                  ) : null}
                </div>
                <input
                  type="text"
                  placeholder="+91 9999999999"
                  id="mobile"
                  {...formik.getFieldProps("mobile")}
                />
              </div>
            </div>
            <div className="col ">
              <label htmlFor="govtID">Govt Issued ID</label>
              <div className="flex flex-direction-column">
                <div className="error-msg"></div>
                <select id="govtIdType" {...formik.getFieldProps("govtIdType")}>
                  <option value="" disabled>
                    ID Type
                  </option>
                  <option value="Driving License">Driving License</option>
                  <option value="Passport">Passport</option>
                  <option value="Income Tax PAN card">
                    Income Tax PAN card
                  </option>
                  <option value="Aadhar Card">Aadhar Card</option>
                </select>
              </div>
              <div className="flex flex-direction-column">
                <div className="error-msg">
                  {formik.touched.govtID && formik.errors.govtID ? (
                    <div>{formik.errors.govtID}</div>
                  ) : null}
                </div>
                <input
                  type="text"
                  placeholder="Enter Govt ID"
                  id="govtID"
                  {...formik.getFieldProps("govtID")}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="contact-details-container">
          <h6>Contact Details</h6>
          <div className="row">
            <div className="col">
              <label htmlFor="guardianName">Guardian Details</label>
              <div className="flex flex-direction-column">
                <div className="error-msg"></div>
                <select
                  id="guardianLabel"
                  {...formik.getFieldProps("guardianLabel")}
                >
                  <option value="" disabled>
                    Enter Label
                  </option>
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                </select>
              </div>

              <div className="flex flex-direction-column">
                <div className="error-msg">
                  {formik.touched.guardianName && formik.errors.guardianName ? (
                    <div>{formik.errors.guardianName}</div>
                  ) : null}
                </div>
                <input
                  type="text"
                  id="guardianName"
                  placeholder="Enter Guardian Name"
                  {...formik.getFieldProps("guardianName")}
                />
              </div>
            </div>
            <div className="col flex-grow">
              <label htmlFor="email">
                Email<span>*</span>
              </label>
              <div className="flex flex-direction-column">
                <div className="error-msg">
                  {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                  ) : null}
                </div>
                <input
                  type="text"
                  placeholder="abc@example.com"
                  id="email"
                  {...formik.getFieldProps("email")}
                />
              </div>
            </div>
            <div className="col">
              <label htmlFor="emergencyNo">Emergency Contact Number</label>
              <div className="flex flex-direction-column">
                <div className="error-msg">
                  {formik.touched.emergencyNo && formik.errors.emergencyNo ? (
                    <div>{formik.errors.emergencyNo}</div>
                  ) : null}
                </div>
                <input
                  type="text"
                  placeholder="Enter Emergency No."
                  id="emergencyNo"
                  {...formik.getFieldProps("emergencyNo")}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="address-details-container">
          <h6>Address Details</h6>
          <div className="row">
            <div className="col flex-grow">
              <label htmlFor="address">
                Address<span>*</span>
              </label>
              <div className="flex flex-direction-column">
                <div className="error-msg">
                  {formik.touched.address && formik.errors.address ? (
                    <div>{formik.errors.address}</div>
                  ) : null}
                </div>
                <input
                  type="text"
                  placeholder="580 Whiff Oaf Lane"
                  id="address"
                  {...formik.getFieldProps("address")}
                />
              </div>
            </div>
            <div className="col">
              <label htmlFor="state">
                State<span>*</span>
              </label>
              <div className="flex flex-direction-column">
                <div className="error-msg">
                  {formik.touched.state && formik.errors.state ? (
                    <div>{formik.errors.state}</div>
                  ) : null}
                </div>
                <input
                  type="text"
                  placeholder="Enter state"
                  id="state"
                  {...formik.getFieldProps("state")}
                />
              </div>
            </div>
            <div className="col">
              <label htmlFor="city">
                City<span>*</span>
              </label>
              <div className="flex flex-direction-column">
                <div className="error-msg">
                  {formik.touched.city && formik.errors.city ? (
                    <div>{formik.errors.city}</div>
                  ) : null}
                </div>
                <input
                  type="text"
                  placeholder="Enter city/town/village"
                  id="city"
                  {...formik.getFieldProps("city")}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col flex-grow">
              <label htmlFor="country">
                Country<span>*</span>
              </label>
              <div className="flex flex-direction-column">
                <div className="error-msg">
                  {formik.touched.country && formik.errors.country ? (
                    <div>{formik.errors.country}</div>
                  ) : null}
                </div>
                <input
                  type="text"
                  placeholder="Enter country"
                  id="country"
                  {...formik.getFieldProps("country")}
                />
              </div>
            </div>
            <div className="col">
              <label htmlFor="pincode">
                Pincode<span>*</span>
              </label>
              <div className="flex flex-direction-column">
                <div className="error-msg">
                  {formik.touched.pincode && formik.errors.pincode ? (
                    <div>{formik.errors.pincode}</div>
                  ) : null}
                </div>
                <input
                  type="text"
                  placeholder="313214"
                  id="pincode"
                  {...formik.getFieldProps("pincode")}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="other-details-container">
          <h6>Other Details</h6>
          <div className="row">
            <div className="col flex-grow">
              <label htmlFor="occupation">Occupation</label>
              <div className="flex flex-direction-column">
                <div className="error-msg">
                  {formik.touched.occupation && formik.errors.occupation ? (
                    <div>{formik.errors.occupation}</div>
                  ) : null}
                </div>
                <input
                  type="text"
                  placeholder="Enter occupation"
                  id="occupation"
                  {...formik.getFieldProps("occupation")}
                />
              </div>
            </div>
            <div className="col">
              <label htmlFor="religion">Religion</label>
              <div className="flex flex-direction-column">
                <div className="error-msg"></div>
                <select id="religion" {...formik.getFieldProps("religion")}>
                  <option value="" disabled>
                    Enter religion
                  </option>
                  <option value="Hinduism">Hinduism</option>
                  <option value="Buddhism">Buddhism</option>
                  <option value="Sikhism">Sikhism</option>
                  <option value="Christianity">Christianity</option>
                  <option value="Islam">Islam</option>
                  <option value="Jainism">Jainism</option>
                  <option value="Shinto">Shinto</option>
                </select>
              </div>
            </div>
            <div className="col">
              <label htmlFor="maritalStatus">Marital Status</label>
              <div className="flex flex-direction-column">
                <div className="error-msg"></div>
                <select
                  id="maritalStatus"
                  {...formik.getFieldProps("maritalStatus")}
                >
                  <option value="" disabled>
                    Enter Marital Status
                  </option>
                  <option value="Married">Married</option>
                  <option value="Widowed">Widowed</option>
                  <option value="Separated">Separated</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Single">Single</option>
                </select>
              </div>
            </div>
            <div className="col">
              <label htmlFor="bloodGroup">Blood Group</label>
              <div className="flex flex-direction-column">
                <div className="error-msg"></div>
                <select {...formik.getFieldProps("bloodGroup")} id="bloodGroup">
                  <option value="" disabled>
                    Group
                  </option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="nationality">Nationality</label>
              <div className="flex flex-direction-column">
                <div className="error-msg">
                  {formik.touched.nationality && formik.errors.nationality ? (
                    <div>{formik.errors.nationality}</div>
                  ) : null}
                </div>
                <input
                  type="text"
                  placeholder="Enter nationality"
                  id="nationality"
                  {...formik.getFieldProps("nationality")}
                />
              </div>
            </div>
          </div>
        </div>
        <button className="form-btn" type="submit">
          Submit
        </button>
      </form>
      {credentials.length >= 1 ? (
        <div>
          <form>
            <label htmlFor="filter">Filter with Name: </label>
            <input
              type="text"
              id="filter"
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
            />
          </form>
        </div>
      ) : null}
      {credentials.length >= 1 ? (
        <Table
          credentials={credentials}
          filteredTable={filteredTable}
          filterText={filterText}
        />
      ) : null}
    </div>
  );
};

export default SignupForm;
