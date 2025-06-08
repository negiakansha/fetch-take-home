import { useState } from 'react';
import '../index.css';
import InputField from './InputField';
import { login } from '../api/services';

const LoginForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(name, email);
            onSubmit();
        } catch (error) {
            setError('Failed to log in. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <h2>Help your dog find their forever home.</h2>
            <div className="input-container">
            <form onSubmit={handleSubmit}>
                <InputField
                    type="text"
                    id="name"
                    value={name}
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                />
                <InputField
                    type="email"
                    id="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="main-button">Get Started</button>
                {error && <p className="error">{error}</p>}
            </form>
            </div>
        </div>
    );
}

export default LoginForm;