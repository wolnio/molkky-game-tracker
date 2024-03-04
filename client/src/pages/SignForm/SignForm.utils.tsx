import { useNavigate } from "react-router-dom";
import { setCredentials } from "../../store/authStore/authSlice";
import { useAppDispatch } from "../../store/hooks";
import { FormInputType, FormType } from "./SignForm.interface";

export const useSignFormHandler = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const signHandler = async (data: FormInputType, formType: FormType) => {
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

      if (response.ok) {
        dispatch(setCredentials(responseData));

        if (formType === "signin") {
          localStorage.setItem("user", JSON.stringify(responseData));
          navigate("/auth/dashboard", { replace: true });
        }
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  return signHandler;
};
