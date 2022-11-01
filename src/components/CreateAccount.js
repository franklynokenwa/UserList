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
          placeholder="first name"
          id="firstName"
          name="firstName"
          onChange={handleChange}
          value={formDatas?.firstName}
        />
        <br />
        <p>{formErrors?.firstNameError}</p>
        <br />
        <input
          type="text"
          placeholder="last name"
          id="lastName"
          name="lastName"
          onChange={handleChange}
          value={formDatas?.lastName}
        />
        <br />
        <p>{formErrors?.lastNameError}</p>
        <br />

        <div>
          <input
            type="radio"
            value="M"
            name="gender"
            id="gender"
            checked={formDatas.gender === "M"}
            onChange={handleChange}
          />
          <span>Male</span>
          <input
            type="radio"
            id="gender"
            value="F"
            name="gender"
            checked={formDatas.gender === "F"}
            onChange={handleChange}
          />
          <span>Female</span>
        </div>
        <p>{formErrors?.genderError}</p>

        <input
          type="text"
          placeholder="email address"
          id="emailAddress"
          name="emailAddress"
          onChange={handleChange}
          value={formDatas?.emailAddress}
        />
        <br />
        <p>{formErrors?.emailAddressError}</p>
        <br />

        <input
          type="tel"
          placeholder="Mobile Number"
          id="mobileNumber"
          name="mobileNumber"
          onChange={handleChange}
          value={formDatas?.mobileNumber}
        />
        <br />
        <p>{formErrors?.mobileNumberError}</p>
        <br />

        <input
          type="text"
          placeholder="Nationality"
          id="nationality"
          name="nationality"
          onChange={handleChange}
          value={formDatas?.nationality}
        />
        <br />
        <p>{formErrors?.nationalityError}</p>
        <br />
        <button>Submit</button>
      </form>
    </StyledCreateAccount>
  );
};

export default CreateAccount;
