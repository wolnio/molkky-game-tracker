import { Dispatch, ThunkDispatch } from "@reduxjs/toolkit";
import { setCredentials } from "../../store/authStore/authSlice";
import { FormInputType, FormType } from "./SignForm.interface";

export const onLoginHandler = async (
  data: FormInputType,
  formType: FormType,
  dispatch: Dispatch
) => {
  const signupBody = {
    firstName: data.firstName,
    lastName: data.surname,
    username: data.username,
    email: data.email,
    password: data.password,
  };

  const signinBody = {
    email: data.email,
    password: data.password,
  };

  try {
    const response = await fetch(`http://localhost:8080/users/${formType}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formType === "signin" ? signinBody : signupBody),
    });

    const responseData = await response.json();
    dispatch(setCredentials(responseData));
    console.log("responseData: ", responseData);
  } catch (err) {
    console.log("err", err);
  }
};
