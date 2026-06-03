import './login.css';
import { IconUser } from '@tabler/icons-react';
import { IconLock } from '@tabler/icons-react';
import { IconEye } from '@tabler/icons-react';
import { IconEyeOff } from '@tabler/icons-react';
import { IconArrowNarrowRight } from '@tabler/icons-react';
import { Link } from 'react-router';
import { useState } from 'react';
import LeftLoginContainer from '../../components/containers/left_login_container/LeftLoginContainer';

export default function Login(){
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <main className="login-page-container">
            <div className="left-right-container">
                <LeftLoginContainer />
                <div className='form-container'>
                    <form action="">
                        <div className="field-group">
                            <label htmlFor="email">Email Address</label>
                            <div className="input-field">
                                <IconUser />
                                <input type="email" id="email" name="email" placeholder='Email' required />
                            </div>
                        </div>
                        <div className="field-group">
                            <label htmlFor="password">Password</label>
                            <div className="input-field">
                                <IconLock />
                                <input type={showPassword ? "text" : "password"} id="password" name="password" placeholder='Password' required />
                                <button type="button" className="toggle-password cursor-pointer" onClick={togglePasswordVisibility}>
                                    {showPassword ? <IconEyeOff className="eye-off-icon" /> : <IconEye className="eye-icon" />}
                                </button>
                            </div>
                        </div>
                        <Link to="/forgot-password" className='forgot-password'>Forgot Password?</Link>
                        <button type="submit" className='btn-primary-rd-shadow'>
                            <strong>Login</strong>
                            <IconArrowNarrowRight />
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}