import FeatureCard from '../../components/cards/feature_card/FeatureCard';
import './feature-section.css';
import { IconFileTypeXls } from '@tabler/icons-react';
import { IconFileStack } from '@tabler/icons-react';
import { IconChartColumn } from '@tabler/icons-react';
import { IconTransform } from '@tabler/icons-react';

export default function FeatureSection(){
    interface Feature {
        icon: React.ReactNode;
        title: string;
        description: string;
        color?: string;
    }
    
    const features: Feature[] = [
        {
            icon: <IconFileTypeXls />,
            title: "Spreadsheet Data Mapping",
            description: "Upload PPMP spreadsheet file and map it with guide",
            color: "green"
        },
        {
            icon: <IconFileStack />,
            title: "Granular PR Generation",
            description: "Generate Purchase Requests for specific quantities with editable specs",
            color: "blue"
        },
        {
            icon: <IconChartColumn />,
            title: "Real-time Monitoring",
            description: "Track procurement status from planning to delivery with live updates",
            color: "purple"
        },
        {
            icon: <IconTransform />,
            title: "In-Lieu Reallocation",
            description: "Intelligently reallocate planned budgets for emergency and change of priority procurement needs",
            color: "yellow"
        }
    ];

    return (
        <section className="feature-section">
            <h2>Powered by Innovation</h2>
            <p>Features for smarter procurement decisions</p>
            <div className="features-container">
                {features.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                        color={feature.color? feature.color : undefined}
                    />
                ))}
            </div>
        </section>
    );
}