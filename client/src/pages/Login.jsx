import React, { useState } from "react";

const Login = () => {
    const [form, setForm] = useState({ username: "", password: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here (e.g., API call)
        console.log("Logging in with:", form);
    };

    return (
        <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: 10 }}>
                    <label>
                        Username:
                        <input
                            type="text"
                            name="username"
                            value={form.username}
                            onChange={handleChange}
                            required
                            style={{ width: "100%", padding: 8 }}
                        />
                    </label>
                </div>
                <div style={{ marginBottom: 10 }}>
                    <label>
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                            style={{ width: "100%", padding: 8 }}
                        />
                    </label>
                </div>
                <button type="submit" style={{ padding: "8px 16px" }}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;