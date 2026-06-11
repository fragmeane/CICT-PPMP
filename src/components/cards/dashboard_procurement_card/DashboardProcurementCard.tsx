import './dashboard-procurement-card.css';
import { IconClockX, IconFileStack, IconClockCheck, IconTransform, IconCloudUpload, IconClock, IconClockCancel } from '@tabler/icons-react';

export default function DashboardProcurementCard({icon, title, description, date, value, color}: {icon?: string, title: string, description: string, date: string, value?: number, color?: string}) {
    return (
        <div className="dashboard-procurement-card">
            <div className="icon-container">
                <div className={`icon ${color || 'yellow'}`}>
                    {icon ? (
                        <>
                            {icon === 'rejected' && <IconClockX size={24} />}
                            {icon === 'pr' && <IconFileStack size={24} />}
                            {icon === 'approved' && <IconClockCheck size={24} />}
                            {icon === 'arrived' && <IconClockCheck size={24} />}
                            {icon === 'reallocate' && <IconTransform size={24} />}
                            {icon === 'upload' && <IconCloudUpload size={24} />}
                            {icon === 'cancel' && <IconClockCancel size={24} />}
                        </>
                    ) : (
                        <IconClock size={24} />   
                    )}
                </div>
                <div className="vertical-line"></div>
            </div>
            <div className="card-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="date-value-container">
                    <span>{date}</span>
                    {value !== undefined && <p className="value">PHP {value.toLocaleString()}</p>}
                </div>
            </div>
        </div>
    )
}