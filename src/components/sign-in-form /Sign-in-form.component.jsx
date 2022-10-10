import { useContext, useState } from "react";
import { signinUser } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/Form-input.component";

import { UserContext } from "../../contexts/User.context";

const SignInForm = () => {

  const initialFormValues = {
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialFormValues);

  const [formErrors, setFormErrors] = useState(initialFormValues);
  function handleChange(e) {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
  }
  const submit = async (e) => {
    e.preventDefault();
    const { email, password } = formValues;

    try {
      const { user } = await signinUser({ email, password });
      setFormErrors(initialFormValues);
    } catch (error) {
      const errorKey = Object.keys(error)[0];
      const errorMessage = error[errorKey];
      const newErr = {
        ...initialFormValues,
        [errorKey]: errorMessage,
      };
      setFormErrors(newErr);
    }
  };

  return (
    <div>
      <h2>Sign in with email and password</h2>
      <form onSubmit={submit}>
        <FormInput
          errorMessage={formErrors.email}
          label="email"
          id="email"
          name="email"
          required
          onChange={handleChange}
        />
        <FormInput
          errorMessage={formErrors.password}
          label="password"
          id="password"
          name="password"
          required
          onChange={handleChange}
        />

        <button className="sqr-btn" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
