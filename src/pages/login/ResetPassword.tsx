import { Link } from 'react-router';
import LeftLoginContainer from '../../components/containers/left_login_container/LeftLoginContainer';
import './Login.css';
import { IconLock } from '@tabler/icons-react';
import { IconEye } from '@tabler/icons-react';
import { IconEyeOff } from '@tabler/icons-react';
import { useState } from 'react';

export default function ResetPassword(){
    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    
        const togglePasswordVisibility = () => {
            setShowPassword(!showPassword);
        };
        const toggleNewPasswordVisibility = () => {
            setShowNewPassword(!showNewPassword);
        }
        
    return (
        <main className="login-page-container">
            <div className="left-right-container">
                <LeftLoginContainer />
                <div className='form-container'>
                    <form action="">
                        <h2>Reset Password</h2>
                        <p>Secure your account by resetting your password</p>
                        <div className="field-group">
                            <label htmlFor="password">New Password</label>
                            <div className="input-field">
                                <IconLock />
                                <input type={showPassword ? "text" : "password"} id="password" name="password" placeholder='Password' required />
                                <button type="button" className="toggle-password cursor-pointer" onClick={togglePasswordVisibility}>
                                    {showPassword ? <IconEyeOff className="eye-off-icon" /> : <IconEye className="eye-icon" />}
                                </button>
                            </div>
                        </div>
                        <div className="field-group">
                            <label htmlFor="new-password">Confirm New Password</label>
                            <div className="input-field">
                                <IconLock />
                                <input type={showNewPassword ? "text" : "password"} id="new-password" name="new-password" placeholder='New Password' required />
                                <button type="button" className="toggle-password cursor-pointer" onClick={toggleNewPasswordVisibility}>
                                    {showNewPassword ? <IconEyeOff className="eye-off-icon" /> : <IconEye className="eye-icon" />}
                                </button>
                            </div>
                        </div>
                        <button type="submit" className='btn-primary-rd-shadow'>
                            <strong>Send Reset Link</strong>
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}