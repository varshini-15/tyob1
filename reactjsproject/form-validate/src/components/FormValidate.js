import React, { useState } from "react";
import "./style.css";
function FormValidate() {
  const [name, setName] = useState(false);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [nameRef, setNameRef] = useState("");
  const [emailRef, setEmailRef] = useState("");
  const [passwordRef, setPasswordRef] = useState("");
  // useEffect(() => {
  //   handleSubmit();
  // }, [nameRef, emailRef, passwordRef]);
  const handleName = (e) => {
    if (e.target.value.length <= 3) {
      setName(true);
    } else {
      setName(false);
    }
    setNameRef(e.target.value);
  };
  const handleEmail = (e) => {
    const emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailCheck.test(e.target.value)) {
      setEmail(false);
    } else {
      setEmail(true);
    }
    setEmailRef(e.target.value);
  };
  const handlePassword = (e) => {
    const passw = /^[A-Za-z]\w{7,14}$/;
    if (e.target.value.match(passw)) {
      setPassword(false);
    } else {
      setPassword(true);
    }
    setPasswordRef(e.target.value);
  };
  const handleSubmit = () => {
    setNameRef("");
    setEmailRef("");
    setPasswordRef("");
  };
  return (
    <div className="align">
      <h1>Form Validation using React</h1>
      <table className="align">
        <tr>
          <td>
            <label>Name</label>
          </td>
          <td>
            <input type="text" onChange={handleName} value={nameRef}></input>{" "}
            {name ? (
              <span style={{ color: "red" }}>
                Enter atleast four characters
              </span>
            ) : (
              ""
            )}
          </td>
        </tr>
        <tr>
          <td>
            <label>E-mail</label>
          </td>
          <td>
            <input type="text" onChange={handleEmail} value={emailRef}></input>
            {email ? (
              <span style={{ color: "red" }}>Enter valid email</span>
            ) : (
              ""
            )}
          </td>
        </tr>
        <tr>
          <td>
            <label>Password</label>
          </td>
          <td>
            <input
              type="text"
              onChange={handlePassword}
              value={passwordRef}
            ></input>
          </td>
        </tr>
        <tr>
          <td></td>
          {password ? (
            <td>
              <span style={{ color: "red" }}>
                Enter valid password [7 to 15 characters
                <br /> which contain only characters, numeric digits, underscore{" "}
                <br />
                and first character must be a letter]
              </span>
            </td>
          ) : (
            ""
          )}
        </tr>

        <tr>
          <td></td>
          <td>
            <button type="button" onClick={handleSubmit}>
              Submit
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default FormValidate;
