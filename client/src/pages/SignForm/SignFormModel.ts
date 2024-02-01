type InputType = {
  name: string;
  label: string;
  type: string;
  validationRules: {};
};

export const SigninForm: InputType[] = [
  {
    name: "email",
    label: "E-mail",
    type: "email",
    validationRules: {
      required: { value: true, message: "This field EMAIL is required." },
    },
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    validationRules: {
      required: { value: true, message: "This field PASSWORD is required." },
    },
  },
];

export const SignupForm: InputType[] = [
  {
    name: "firstName",
    label: "Name",
    type: "text",
    validationRules: {
      required: { value: true, message: "This field name is required." },
    },
  },
  {
    name: "surname",
    label: "Surname",
    type: "text",
    validationRules: {
      required: { value: true, message: "This field surname is required." },
    },
  },
  {
    name: "email",
    label: "E-mail",
    type: "email",
    validationRules: {
      required: { value: true, message: "This field EMAIL is required." },
    },
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    validationRules: {
      required: { value: true, message: "This field PASSWORD is required." },
    },
  },
];
