import React, { useState } from "react";
import AccountStore from "./AccountStore";
import { addDoc, collection, getDocs, Timestamp } from "firebase/firestore";
import db from "./FirebaseConfig";
import StyledCreateAccount from "../styles/CreateAccount.styled";


const CreateAccount = () => {
  const [formErrors, setFormErrors] = useState({});

  const addDataToDataBase = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        userInputData: formDatas,
        created: Timestamp.now(),
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const [formDatas, setFormDatas] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    emailAddress: "",
    mobileNumber: "",
    nationality: "",
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormDatas((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const validateForm = (values) => {
    const error = {
      firstNameError: "",
      lastNameError: "",
      genderError: "",
      emailAddressError: "",
      mobileNumberError: "",
      nationalityError: "",
    };

    if (values?.firstName === "") {
      error.firstNameError = "Please enter a valid first name";
    }
    if (values?.lastName === "") {
      error.lastNameError = "Please enter a valid last name";
    }
    if (values?.gender === "") {
      error.genderError = "Please select either male or female";
    }
    if (values?.emailAddress === "") {
      error.emailAddressError = "Please enter a valid email address";
    }

    if (values?.mobileNumber === "") {
      error.mobileNumberError = "Please enter a valid phone number";
    }

    if (values?.nationality === "") {
      error.nationalityError = "Please enter a valid nationality";
    }

    if (
      formErrors?.firstNameError === "" &&
      formErrors?.lastNameError === "" &&
      formErrors?.genderError === "" &&
      formErrors?.emailAddressError === "" &&
      formErrors?.mobileNumberError !== "" &&
      formErrors?.nationalityError !== ""
    ) {
      console.log("The form was submitted successfully");
    }

    return error;
  };

  const submitForm = (event) => {
    event.preventDefault();
    setFormErrors(validateForm(formDatas));

    if (
      formDatas?.firstName !== "" &&
      formDatas?.lastName !== "" &&
      formDatas?.gender !== "" &&
      formDatas?.emailAddress !== "" &&
      formDatas?.mobileNumber !== "" &&
      formDatas?.nationality !== ""
    ) {
      addDataToDataBase();
      setFormDatas({
        firstName: "",
        lastName: "",
        gender: "",
        emailAddress: "",
        mobileNumber: "",
        nationality: "",
      });
    }
  };

  return (
    <StyledCreateAccount>
      <h2>Create an account</h2>
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="First Name"
          id="firstName"
          name="firstName"
          onChange={handleChange}
          value={formDatas?.firstName}
        />
        <br />
        <p className="errorMessage">{formErrors?.firstNameError}</p>
        <input
          type="text"
          placeholder="Last Name"
          id="lastName"
          name="lastName"
          onChange={handleChange}
          value={formDatas?.lastName}
        />
        <br />
        <p className="errorMessage">{formErrors?.lastNameError}</p>

        <div className="radioButton">
          <input
            type="radio"
            value="M"
            name="gender"
            id="radioMale"
            checked={formDatas.gender === "M"}
            onChange={handleChange}
          />
          <label htmlFor="radioMale">Male</label>
          <input
            type="radio"
            id="radioFemale"
            value="F"
            name="gender"
            checked={formDatas.gender === "F"}
            onChange={handleChange}
          />
          <label htmlFor="radioFemale">Female</label>
        </div>
        <p className="errorMessage">{formErrors?.genderError}</p>

        <input
          type="text"
          placeholder="Email Address"
          id="emailAddress"
          name="emailAddress"
          onChange={handleChange}
          value={formDatas?.emailAddress}
        />
        <br />
        <p className="errorMessage">{formErrors?.emailAddressError}</p>

        <input
          type="tel"
          placeholder="Mobile Number"
          id="mobileNumber"
          name="mobileNumber"
          onChange={handleChange}
          value={formDatas?.mobileNumber}
        />
        <br />
        <p className="errorMessage">{formErrors?.mobileNumberError}</p>

        <input
          type="text"
          placeholder="Nationality"
          id="nationality"
          name="nationality"
          onChange={handleChange}
          value={formDatas?.nationality}
        />
        <br />
        <p className="errorMessage">{formErrors?.nationalityError}</p>
        
        <button>Submit</button>
      </form>
    </StyledCreateAccount>
  );
};

export default CreateAccount;
