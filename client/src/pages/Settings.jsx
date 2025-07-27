import React from 'react';

function Settings() {
  const [darkMode, setDarkMode] = React.useState(false);
  const [ghostMode, setGhostMode] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');

  const handleDarkModeToggle = () => setDarkMode((prev) => !prev);
  const handleGhostModeToggle = () => setGhostMode((prev) => !prev);
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleDeleteAccount = () => {
    // Add delete account logic here
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      // Delete account logic
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Add save logic here
  };

  return (
    <div className="settings-page">
      <h2>User Settings</h2>
      <form onSubmit={handleSave}>
        <div>
          <label>
            Dark Mode
            <input
              type="checkbox"
              checked={darkMode}
              onChange={handleDarkModeToggle}
            />
          </label>
        </div>
        <div>
          <label>
            Ghost Mode
            <input
              type="checkbox"
              checked={ghostMode}
              onChange={handleGhostModeToggle}
            />
          </label>
        </div>
        <div>
          <label>
            Username
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Enter new username"
            />
          </label>
        </div>
        <div>
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter new email"
            />
          </label>
        </div>
        <button type="submit">Save Changes</button>
      </form>
      <hr />
      <button
        style={{ color: 'red', marginTop: '1rem' }}
        onClick={handleDeleteAccount}
      >
        Delete Account
      </button>
    </div>
  );
}
export default Settings;
