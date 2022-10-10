import "./Form-input.css";

const FormInput = ({ label, errorMessage, labelClass, ...inputAttributes }) => {
  const { id } = inputAttributes;
  const type = inputAttributes.type || "text";
  inputAttributes.placeholder = " ";

  return (
    <div>
      <div className="input-field">
        <input type={type} {...inputAttributes} />
        <label htmlFor={id}>{label}</label>
      </div>
      {errorMessage ? <div className="error-message">{errorMessage}</div> : ""}
    </div>
  );
};

export default FormInput;
