const Signin = () => {
  return (
    <>
      <form action="action_page.php" style={{ border: "1px solid #ccc" }}>
        <div className="container">
          <h1>Sign In</h1>
          <hr />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input type="text" placeholder="Enter Email" name="email" required />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />

          <div className="clearfix">
            <button type="button" className="cancelbtn">
              Cancel
            </button>
            <button type="submit" className="signupbtn">
              Sign In
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Signin;
