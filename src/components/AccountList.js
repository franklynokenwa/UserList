import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import StyledAccountList from "../styles/AccountList.styled";
import AccountStore from "./AccountStore";

const AccountList = () => {
  const accounts = AccountStore((state) => state.accounts);
  const formData = AccountStore((state) => state.formData);

  const updatedAccounts = AccountStore((state) => state.updatedAccounts);
  const updatedFormData = AccountStore((state) => state.updatedFormData);

  const API_URL =
    "https://raw.githubusercontent.com/OtegaOvie/StaticDataset/main/accounts.json";

  const { isLoading, error, data } = useQuery(["accounts"], async () => {
    const response = await axios.get(API_URL);
    return response.data;
  });
  console.log(typeof data);
  updatedAccounts(data);

  if (isLoading) return <h1 style={{ color: "white" }}>Loading...</h1>;

  if (error)
    return (
      <h1 style={{ color: "white" }}>
        An error has occurred: + error.message{" "}
      </h1>
    );

  return (
    <StyledAccountList>
        <caption>List of accounts</caption>
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Gender</th>
          <th>Email Address</th>
          <th>Mobile Number</th>
          <th>Nationality</th>
        </tr>
      </thead>
      {accounts.map((item) => {
        const {
          emailAddress,
          firstName,
          gender,
          lastName,
          mobileNumber,
          nationality,
        } = item;

        return (
          <tbody key={mobileNumber}> 
            <tr>
              <td>{firstName + " " + lastName}</td>
              <td>{gender}</td>
              <td>{emailAddress}</td>
              <td>{mobileNumber}</td>
              <td>{nationality}</td>
            </tr>
          </tbody>
        );
      })}
    </StyledAccountList>
  );
};

export default AccountList;
