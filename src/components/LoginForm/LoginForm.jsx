import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import css from "./LoginForm.module.css";

const FeedbackSchema = Yup.object().shape({
  email: Yup.string()
    .email("Enter a valid email address")
    .min(2, "Minimum of two characters")
    .max(50, "Maximum of fifty characters")
    .required("Enter a valid email address"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters!")
    .max(50, "Password must be less than 50 characters!")
    .required("Password is required!"),
});

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = ({ onLogin }) => {
  const handleSubmit = (values, actions) => {
    onLogin(values);
    actions.resetForm();
  };

  return (
    <div className={css.wrapper}>
      <Formik
        validationSchema={FeedbackSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <h2>Login</h2>
          <label className={css.label}>
            <span>Email</span>
            <Field className={css.input} type="email" name="email" />
            <ErrorMessage
              className={css.errorMsg}
              name="email"
              component="span"
            ></ErrorMessage>
          </label>

          <label className={css.label}>
            <span>Password</span>
            <Field className={css.input} type="password" name="password" />
            <ErrorMessage
              className={css.errorMsg}
              name="password"
              component="span"
            ></ErrorMessage>
          </label>
          <button className={css.formBtn} type="submit">
            Sing In
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
