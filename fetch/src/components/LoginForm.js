import InputField from './InputField';

const LoginForm = () => {
    return (
        <div className="login-container">
            <p>Help your dog find their forever home.</p>
            <div className="input-container">
            <InputField
                type="name"
                id="name"
                className="name"
                placeholder="Name"
            />
            <InputField
                type="email"
                id="email"
                className="email"
                placeholder="Email"
            />
            <button>Get Started</button>
            </div>
        </div>
    );
}

export default LoginForm;