const Signup = () => {
  const submitHandler = async (e) => {
    e.preventDefault();
    const data = await fetch("http://localhost:8000/user/signup", {
      body: JSON.stringify({
        fullName: "Abhijith",
        email: "abhiiiiiii@gmail.com",
        password: "1234",
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "post",
    });

    console.log(data);
  };
  return (
    <>
      <form style={{ border: "1px solid #ccc" }}>
        <div className="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />
          <label htmlFor="fullname">
            <b>Full name</b>
          </label>
          <input type="text" placeholder="Enter Fullname" name="fullname" />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input type="text" placeholder="Enter Email" name="email" />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input type="password" placeholder="Enter Password" name="psw" />

          <label htmlFor="psw-repeat">
            <b>Repeat Password</b>
          </label>
          <input
            type="password"
            placeholder="Repeat Password"
            name="psw-repeat"
          />

          <p>
            By creating an account you agree to our{" "}
            <a href="#" style={{ color: "dodgerblue" }}>
              Terms & Privacy
            </a>
            .
          </p>

          <div className="clearfix">
            <button type="button" className="cancelbtn">
              Cancel
            </button>
            <button type="submit" className="signupbtn" onClick={submitHandler}>
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Signup;
