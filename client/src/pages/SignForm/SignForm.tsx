import { useState } from "react";
import { useForm } from "react-hook-form";
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
import { useSignFormHandler } from "./SignForm.utils";
import { InputType, SigninForm, SignupForm } from "./SignFormModel";

export const Login = () => {
  const { register, handleSubmit, formState, reset } = useForm({
    defaultValues: { email: "", password: "" },
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });
  const errors = formState.errors;

  const [activeTab, setActiveTab] = useState(false);
  const [currentForm, setCurrentForm] = useState<InputType[]>(SigninForm);

  const signHandler = useSignFormHandler();

  const handleSwitchTabs = () => {
    setActiveTab((prevState) => !prevState);
    setCurrentForm((prevForm) =>
      prevForm === SigninForm ? SignupForm : SigninForm
    );
    reset();
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
          signHandler(data, currentForm === SigninForm ? "signin" : "signup")
        )}
      >
        {currentForm.map(
          ({ name, label, type, validationRules, isRequired }, index) => {
            return (
              <LabelInputContainer>
                <Label htmlFor={name}>
                  {label}
                  {isRequired && " *"}
                </Label>
                <InputErrorContainer>
                  <SignInput
                    key={index}
                    id={name}
                    type={type}
                    {...register(name as "email" | "password", validationRules)}
                    $isError={errors.hasOwnProperty(name)}
                    maxLength={15}
                  />
                  {errors[name as "email" | "password"] && (
                    <ValidationMessage>
                      {errors[name as "email" | "password"]?.message}
                    </ValidationMessage>
                  )}
                </InputErrorContainer>
              </LabelInputContainer>
            );
          }
        )}
        <SubmitButton type="submit">Submit</SubmitButton>
      </FormContainer>
    </Container>
  );
};
