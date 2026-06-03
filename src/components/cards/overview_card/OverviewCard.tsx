import './overview-card.css';
import { IconCheckbox } from '@tabler/icons-react';

export default function OverviewCard({icon, title, description, color, doItems}: {icon: React.ReactNode, title: string, description: string, color?: string, doItems: string[]}){
    return (
        <div className={`overview-card ${color? color : ''}`}>
            <div className="icon-container">
                {icon}
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <ul className="do-items">
                {doItems.map((item, index) => (
                    <li key={index}>
                        <IconCheckbox size={15} />
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}