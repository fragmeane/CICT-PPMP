import './title-section.css';
import alab from '../../assets/icons/alab.svg';
import bulsu from '../../assets/univlogo/bulsu_logo.svg';
import cict from '../../assets/univlogo/cict_logo.svg';
import arrow_primary from '../../assets/designs/arrow_primary.svg';
import { IconLayoutDashboard } from '@tabler/icons-react';
import { Link } from 'react-router';

export default function Title(){
    return (
        <section className="title-section">
            <div className="ai-powered">
                <img src={alab} alt="ALAB Logo" />
                <span>AI-Powered Procurement System</span>
            </div>
            <div className='hero'>
                <div className="univ-logos">
                    <img src={bulsu} alt="BULSU Logo" />
                    <img src={cict} alt="CICT Logo" />
                </div>
                <div className="hero-text">
                    <h1><span>CICT - </span><span>PPMP</span></h1>
                    <img src={arrow_primary} alt="Arrow Icon" />
                    <h1>Management System</h1>
                </div>
            </div>
            <p>
                Streamline your Project Procurement Management Plan with 
                intelligent budget optimization, automated PR generation, 
                and real-time tracking.
            </p>
            <Link to="/login" className='btn-primary-rd-shadow'><IconLayoutDashboard size={25} stroke={2}/> <strong>Sign In</strong></Link>
        </section>
    );
}