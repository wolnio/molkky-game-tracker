export type InputType = {
  name: string;
  label: string;
  type: string;
  validationRules: {};
  isRequired: boolean;
};

const errorMessages = {
  required: "Field is required.",
};

export const SigninForm: InputType[] = [
  {
    name: "email",
    label: "E-mail",
    type: "email",
    validationRules: {
      required: { value: true, message: errorMessages.required },
      pattern: {
        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        message: "Invalid e-mail address.",
      },
    },
    isRequired: true,
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    validationRules: {
      required: { value: true, message: errorMessages.required },
    },
    isRequired: true,
  },
];

export const SignupForm: InputType[] = [
  {
    name: "firstName",
    label: "Name",
    type: "text",
    validationRules: {
      required: { value: true, message: errorMessages.required },
    },
    isRequired: true,
  },
  {
    name: "surname",
    label: "Surname",
    type: "text",
    validationRules: {
      required: { value: true, message: errorMessages.required },
    },
    isRequired: true,
  },
  {
    name: "username",
    label: "Username",
    type: "text",
    validationRules: {
      required: { value: true, message: errorMessages.required },
    },
    isRequired: true,
  },
  {
    name: "email",
    label: "E-mail",
    type: "email",
    validationRules: {
      required: { value: true, message: errorMessages.required },
    },
    isRequired: true,
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    validationRules: {
      required: { value: true, message: errorMessages.required },
    },
    isRequired: true,
  },
];
