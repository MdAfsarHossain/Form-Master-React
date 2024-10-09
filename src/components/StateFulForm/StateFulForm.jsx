import { useState } from "react";

const StateFulForm = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    } else {
      setError("");
      console.log(name, email, password);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleNameChange} type="text" name="name" />
        <br />
        <input onChange={handleEmailChange} type="email" name="email" id="" />
        <br />
        <input
          onChange={handlePasswordChange}
          type="password"
          name="password"
        />
        <br />
        {error && <p>{error}</p>}
        {/* <br /> */}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default StateFulForm;
