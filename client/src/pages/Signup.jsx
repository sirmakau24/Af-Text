import React, { useState } from "react";

const Signup = () => {
    const [phone, setPhone] = useState("");
    const [codeSent, setCodeSent] = useState(false);
    const [verificationCode, setVerificationCode] = useState("");
    const [isVerified, setIsVerified] = useState(false);

    // Simulate sending code
    const sendVerificationCode = () => {
        // Here you would call your backend to send SMS
        setCodeSent(true);
        alert("Verification code sent to " + phone);
    };

    // Simulate verifying code
    const verifyCode = () => {
        // Replace with actual verification logic
        if (verificationCode === "123456") {
            setIsVerified(true);
            alert("Phone number verified!");
        } else {
            alert("Invalid verification code.");
        }
    };

    return (
        <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
            <h2>Sign Up with Phone Number</h2>
            {!codeSent ? (
                <div>
                    <label>
                        Phone Number:
                        <input
                            type="tel"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            placeholder="e.g. +1234567890"
                            style={{ width: "100%", marginTop: 8 }}
                        />
                    </label>
                    <button
                        onClick={sendVerificationCode}
                        disabled={!phone}
                        style={{ marginTop: 16, width: "100%" }}
                    >
                        Send Verification Code
                    </button>
                </div>
            ) : !isVerified ? (
                <div>
                    <label>
                        Enter Verification Code:
                        <input
                            type="text"
                            value={verificationCode}
                            onChange={e => setVerificationCode(e.target.value)}
                            placeholder="Enter code"
                            style={{ width: "100%", marginTop: 8 }}
                        />
                    </label>
                    <button
                        onClick={verifyCode}
                        disabled={!verificationCode}
                        style={{ marginTop: 16, width: "100%" }}
                    >
                        Verify
                    </button>
                </div>
            ) : (
                <div>
                    <h3>Signup Complete!</h3>
                    <p>Your phone number has been verified.</p>
                </div>
            )}
        </div>
    );
};

export default Signup;</div>