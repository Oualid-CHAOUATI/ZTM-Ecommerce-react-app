import { useContext, useState } from "react";
import { registerUser } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/Form-input.component";

import { UserContext } from "../../contexts/User.context";
const SignUpForm = () => {

  const initialFormValues = {
    email: "",
    password: "",
    passwordConfirm: "",
    name: "",
  };
  const [formErrors, setFormErrors] = useState(initialFormValues);

  const [formValues, setFormValues] = useState(initialFormValues);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
  }
  const submit = async (e) => {
    e.preventDefault();
    const { name, email, password } = formValues;

    try {
      const { user } = registerUser({ email, password, name });
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
      <h2>signup with email and password</h2>
      <form onSubmit={submit}>
        <FormInput
          label="name"
          id="name"
          name="name"
          required
          onChange={handleChange}
          errorMessage={formErrors.name}
        />
        <FormInput
          label="email"
          id="email"
          name="email"
          required
          onChange={handleChange}
          errorMessage={formErrors.email}
        />
        <FormInput
          label="password"
          id="password"
          name="password"
          required
          onChange={handleChange}
          errorMessage={formErrors.password}
        />
        <FormInput
          label="passwordConfirm"
          id="passwordConfirm"
          name="passwordConfirm"
          required
          onChange={handleChange}
          errorMessage={formErrors.passwordConfirm}
        />

        <button className="sqr-btn" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
