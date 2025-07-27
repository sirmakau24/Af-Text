function Signup() {
  return (
    <div>
      <div className="signup-page">
        <h2>Create an Af-Text Account</h2>
        {/* Signup form fields */}
      </div>
      <form className="signup-form">
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
export default Signup;
