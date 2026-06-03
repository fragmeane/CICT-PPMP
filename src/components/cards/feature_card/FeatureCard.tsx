import './feature-card.css';

export default function FeatureCard({ icon, title, description, color }: { icon: React.ReactNode; title: string; description: string, color?: string }) {
    return (
        <div className="feature-card">
            <div className={`icon ${color ? color : ''}`}>{icon}</div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}