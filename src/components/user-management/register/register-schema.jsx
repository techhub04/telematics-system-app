import * as Yup from "yup";

// Schema definition
export const registerSchema = Yup.object({
  userName: Yup.string()
    .required("User Name is required")
    .min(7, "User Name must be at least 6 characters")
    .max(20, "User Name must be at max 20 characters"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  mobile: Yup.string()
    .required("Mobile is required")
    .min(10, "Must be atleast 10 charecters"),
});
