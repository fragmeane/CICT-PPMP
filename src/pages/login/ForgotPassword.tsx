import { Link } from 'react-router';
import LeftLoginContainer from '../../components/containers/left_login_container/LeftLoginContainer';
import './Login.css';
import { IconUser } from '@tabler/icons-react';

export default function ForgotPassword(){

    return (
        <main className="login-page-container">
            <div className="left-right-container">
                <LeftLoginContainer />
                <div className='form-container'>
                    <form action="">
                        <h2>Forgot Password</h2>
                        <p>Please enter your email address you’d like your password reset information sent to</p>
                        <div className="field-group">
                            <label htmlFor="email">Email Address</label>
                            <div className="input-field">
                                <IconUser />
                                <input type="email" id="email" name="email" placeholder='Email' required />
                            </div>
                        </div>
                        <button type="submit" className='btn-primary-rd-shadow'>
                            <strong>Send Reset Link</strong>
                        </button>
                        <Link to="/login" className='btn-secondary'>Back to Login</Link>
                    </form>
                </div>
            </div>
        </main>
    );
}