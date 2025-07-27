import React from 'react';
import '../components/Login.css';

function Login() {
const [username, setUsername] = React.useState('');
const [password, setPassword] = React.useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    // Fake login details
    if (username === "testuser" && password === "12345678") {
        // Simulate navigation to next page
        alert("Login successful! Redirecting...");
        // Replace with your navigation logic, e.g., window.location or react-router
    } else {
        alert("Invalid username or password. Try testuser/12345678.");
    }
};

return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
);
}
export default Login;
