import './landing.css';
import TitleSection from '../../sections/title/TitleSection';
import FeatureSection from '../../sections/features/FeatureSection';
import OverviewSection from '../../sections/overview/OverviewSection';

export default function Landing(){
    return (
        <main className="landing-page-container">
            <TitleSection />
            <FeatureSection />
            <OverviewSection />
            <footer className="landing-footer relative">
                <span>@CICT-PPMP</span>
                <span className="absolute bottom-0 right-0 text-sm font-bold text-gray-50">Made by: Jerson Valdez</span>
                <span>Bulacan State University</span>
            </footer>
        </main>
    );
}