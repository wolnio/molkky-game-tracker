import { FieldError, useForm } from "react-hook-form";
import { SubmitButton } from "../../components/common/SubmitButton.styles";
import {
  Container,
  FormContainer,
  HeaderTabs,
  InputErrorContainer,
  Label,
  LabelInputContainer,
  SignInput,
  Tab,
  ValidationMessage,
} from "./SignForm.styles";
import { SigninForm } from "./SignFormModel";

type FomrInputType = {
  email: string;
  password: string;
};

export const Login = () => {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: { email: "", password: "" },
  });
  const errors = formState.errors;

  const onLoginHandler = async (data: FomrInputType) => {
    try {
      const response = await fetch("http://localhost:8080/users/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });

      const responseData = await response.json();
      console.log("responseData: ", responseData);
    } catch (err) {
      console.log("err", err);
    }
  };
  console.log("err", errors);

  return (
    <Container>
      <HeaderTabs>
        <Tab>Sign in</Tab>
        <Tab>Sign up</Tab>
      </HeaderTabs>
      <FormContainer onSubmit={handleSubmit(onLoginHandler)}>
        {SigninForm.map(({ name, label, type, validationRules }, index) => {
          return (
            <LabelInputContainer>
              <Label htmlFor={name}>{label}</Label>
              <InputErrorContainer>
                <SignInput
                  key={index}
                  id={name}
                  type={type}
                  {...register(name as "email" | "password", validationRules)}
                  $isError={errors.hasOwnProperty(name)}
                />
                <ValidationMessage>
                  {errors[name as "email" | "password"]?.message}
                </ValidationMessage>
              </InputErrorContainer>
            </LabelInputContainer>
          );
        })}
        <SubmitButton type="submit">Submit</SubmitButton>
      </FormContainer>
    </Container>
  );
};
