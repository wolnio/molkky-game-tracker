import { useState } from "react";
import { useForm } from "react-hook-form";
import { SubmitButton } from "../../components/common/SubmitButton.styles";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
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
import { onLoginHandler } from "./SignForm.utils";
import { InputType, SigninForm, SignupForm } from "./SignFormModel";

export const Login = () => {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: { email: "", password: "" },
  });
  const errors = formState.errors;

  const dispatch = useAppDispatch();

  const [activeTab, setActiveTab] = useState(false);
  const [currentForm, setCurrentForm] = useState<InputType[]>(SigninForm);

  const handleSwitchTabs = () => {
    setActiveTab((prevState) => !prevState);
    setCurrentForm((prevForm) =>
      prevForm === SigninForm ? SignupForm : SigninForm
    );
  };

  return (
    <Container>
      <HeaderTabs>
        <Tab
          onClick={() => activeTab && handleSwitchTabs()}
          $isActive={!activeTab}
        >
          Sign in
        </Tab>
        <Tab
          onClick={() => !activeTab && handleSwitchTabs()}
          $isActive={activeTab}
        >
          Sign up
        </Tab>
      </HeaderTabs>
      <FormContainer
        onSubmit={handleSubmit((data) =>
          onLoginHandler(
            data,
            currentForm === SigninForm ? "signin" : "signup",
            dispatch
          )
        )}
      >
        {currentForm.map(({ name, label, type, validationRules }, index) => {
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
