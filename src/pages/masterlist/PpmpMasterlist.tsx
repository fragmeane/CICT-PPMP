import ItemsCountCard from '../../components/cards/items_count_card/ItemsCountCard';
import './ppmp-masterlist.css';

export default function PpmpMasterlist() {
    const ItemsCountCardData: {icon: string, title: string, count: number, color: string}[] = [
        {icon: 'package', title: 'Total Items in Planned', count: 256, color: 'gray'},
        {icon: 'chart', title: 'Total Available Items', count: 189, color: 'blue'},
        {icon: 'clock', title: 'Total Pending Items', count: 12, color: 'yellow'},
        {icon: 'check', title: 'Total Fulfilled Items', count: 58, color: 'green'},
        {icon: 'businessplan', title: 'Total Planned Price', count: 4300000, color: 'purple'},
    ];
    return (
        <main className="page-container masterlist">
            <div className="items-count-card-container">
                {ItemsCountCardData.map((data, index) => (
                    <ItemsCountCard 
                        key={index} 
                        icon={data.icon} 
                        title={data.title} 
                        count={data.count} 
                        color={data.color} />
                ))}
            </div>
        </main>
    )
}