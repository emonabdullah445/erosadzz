import * as yup from "yup";
const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("email must be a valid email")
    .required("Email is Required."),
  password: yup.string().required("Password is Required."),
  // .min(8, "Password must be at least 8 characters"),
  // .matches(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  //   "Password must contain at least 8 characters, including uppercase , lowercase and numbers"
  // ),
});

export default validationSchema;
