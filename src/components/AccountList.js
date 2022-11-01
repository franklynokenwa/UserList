import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import StyledAccountList from "../styles/AccountList.styled";
import AccountStore from "./AccountStore";
import db from "./FirebaseConfig";

const AccountList = () => {
  const accounts = AccountStore((state) => state.accounts);

  const updatedAccounts = AccountStore((state) => state.updatedAccounts);
  const [userAccount, setUserAccount] = useState("");

  useEffect(() => {
    const q = query(collection(db, "users"), orderBy("created", "asc"));
    onSnapshot(q, (querySnapshot) => {
      setUserAccount(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const API_URL =
    "https://raw.githubusercontent.com/OtegaOvie/StaticDataset/main/accounts.json";

  const { isLoading, error, data } = useQuery(["accounts"], async () => {
    const response = await axios.get(API_URL);
    return response.data;
  });
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
      {accounts?.map((item) => {
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
      {userAccount.length !== 0
        ? userAccount?.map((item) => {
            const { data } = item;
            return (
              <tbody key={data.userInputData?.mobileNumber}>
                <tr>
                  <td>
                    {data.userInputData?.firstName +
                      " " +
                      data.userInputData?.lastName}
                  </td>
                  <td>{data.userInputData?.gender}</td>
                  <td>{data.userInputData?.emailAddress}</td>
                  <td>{data.userInputData?.mobileNumber}</td>
                  <td>{data.userInputData?.nationality}</td>
                </tr>
              </tbody>
            );
          })
        : null}
    </StyledAccountList>
  );
};

export default AccountList;
