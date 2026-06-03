import './left-login-container.css';
import bulsu from '../../../assets/univlogo/bulsu_logo.svg';
import cict from '../../../assets/univlogo/cict_logo.svg';
import arrow_secondary from '../../../assets/designs/arrow_secondary.svg';
import login_left from '../../../assets/designs/login_left.svg';

export default function LeftLoginContainer(){
    return (
        <div className='left-side'>
            <div className='univ-logos'>
                <img src={bulsu} alt="BULSU Logo" />
                <img src={cict} alt="CICT Logo" />
            </div>
            <div className='hero-text'>
                <h1><span>CICT - </span><span>PPMP</span></h1>
                <img src={arrow_secondary} alt="Arrow Icon" />
                <h1>Management System</h1>
            <p>
                Streamline your Project Procurement Management Plan with 
                intelligent budget optimization, automated PR generation, 
                and real-time tracking.
            </p>
            </div>
            <img src={login_left} alt="Login Left Design" className='login-left-design' />
        </div>
    );
}