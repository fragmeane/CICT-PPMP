import ItemsCountCard from '../../components/cards/items_count_card/ItemsCountCard';
import MasterlistTable from '../../components/tables/masterlist_table/MasterlistTable';
import './ppmp-masterlist.css';

export default function PpmpMasterlist() {
    const ItemsCountCardData: {icon: string, title: string, count: number, color: string}[] = [
        {icon: 'package', title: 'Total Items in Planned', count: 256, color: 'gray'},
        {icon: 'chart', title: 'Total Available Items', count: 189, color: 'blue'},
        {icon: 'clock', title: 'Total Pending Items', count: 12, color: 'yellow'},
        {icon: 'check', title: 'Total Fulfilled Items', count: 58, color: 'green'},
        {icon: 'businessplan', title: 'Total Planned Price', count: 4300000, color: 'purple'},
    ];

    interface PPMPItem {
    id: string;
    itemDescription: string;
    unitMeasurement: string;
    plannedQuantity: number;
    availableQuantity: number;
    pendingQuantity: number;
    fulfilledQuantity: number;
    priceCatalogue: number;
    totalPrice: number;
    }
    
    const mockPPMPData: PPMPItem[] = [
    {
        id: "item-001",
        itemDescription: "Solid State Drive (1TB NVMe Gen4)",
        unitMeasurement: "piece",
        plannedQuantity: 10,
        availableQuantity: 9,
        pendingQuantity: 1,
        fulfilledQuantity: 0,
        priceCatalogue: 4500.00,
        totalPrice: 45000.00,
    },
    {
        id: "item-002",
        itemDescription: "LED Monitor (24-inch IPS, 144Hz)",
        unitMeasurement: "unit",
        plannedQuantity: 5,
        availableQuantity: 5,
        pendingQuantity: 0,
        fulfilledQuantity: 0,
        priceCatalogue: 8500.00,
        totalPrice: 42500.00,
    },
    {
        id: "item-003",
        itemDescription: "Mechanical Keyboard (Hot-swappable)",
        unitMeasurement: "piece",
        plannedQuantity: 15,
        availableQuantity: 5,
        pendingQuantity: 10,
        fulfilledQuantity: 0,
        priceCatalogue: 2200.00,
        totalPrice: 33000.00,
    },
    {
        id: "item-004",
        itemDescription: "CAT6 UTP Network Cable (305m Roll)",
        unitMeasurement: "roll",
        plannedQuantity: 2,
        availableQuantity: 0,
        pendingQuantity: 0,
        fulfilledQuantity: 2,
        priceCatalogue: 5800.00,
        totalPrice: 11600.00,
    },
    {
        id: "item-005",
        itemDescription: "Wireless Access Point (WiFi 6 Dual Band)",
        unitMeasurement: "unit",
        plannedQuantity: 3,
        availableQuantity: 0,
        pendingQuantity: 0,
        fulfilledQuantity: 3,
        priceCatalogue: 4200.00,
        totalPrice: 12600.00,
    },
    {
        id: "item-006",
        itemDescription: "USB Web Camera (1080p Full HD)",
        unitMeasurement: "piece",
        plannedQuantity: 8,
        availableQuantity: 0,
        pendingQuantity: 0,
        fulfilledQuantity: 8,
        priceCatalogue: 1800.00,
        totalPrice: 14400.00,
    },
    {
        id: "item-007",
        itemDescription: "RJ45 Modular Plugs (100 pcs per box)",
        unitMeasurement: "box",
        plannedQuantity: 10,
        availableQuantity: 2,
        pendingQuantity: 0,
        fulfilledQuantity: 8,
        priceCatalogue: 450.00,
        totalPrice: 4500.00,
    },
    {
        id: "item-008",
        itemDescription: "DDR4 Laptop RAM (16GB 3200MHz)",
        unitMeasurement: "piece",
        plannedQuantity: 12,
        availableQuantity: 7,
        pendingQuantity: 0,
        fulfilledQuantity: 5,
        priceCatalogue: 2800.00,
        totalPrice: 33600.00,
    },
    {
        id: "item-009",
        itemDescription: "Uninterruptible Power Supply (650VA)",
        unitMeasurement: "unit",
        plannedQuantity: 6,
        availableQuantity: 6,
        pendingQuantity: 0,
        fulfilledQuantity: 0,
        priceCatalogue: 2500.00,
        totalPrice: 15000.00,
    }
    ];

    function exportLatestPPMP() {
        // Placeholder function for exporting the latest PPMP data
        alert("Exporting latest PPMP data...");
    }

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
            <MasterlistTable 
                itemCount={256} 
                unitCount={189} 
                data={mockPPMPData}
                exportFunction={exportLatestPPMP}
                />
        </main>
    )
}