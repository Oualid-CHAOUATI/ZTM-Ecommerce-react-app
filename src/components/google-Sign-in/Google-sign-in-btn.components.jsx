import { f_logUserFromGoogle } from "../../utils/firebase/firebase.utils";

export const GoogleSignIntBtn = ({ children, ...attributres }) => {
  return (
    <>
      <button
        className="sqr-btn"
        {...attributres}
        onClick={f_logUserFromGoogle}
      >
        {children}
      </button>
    </>
  );
};
