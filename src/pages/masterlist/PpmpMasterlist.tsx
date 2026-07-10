import './ppmp-masterlist.css';
import { useEffect, useState } from 'react';
import ItemsCountCard from '../../components/cards/items_count_card/ItemsCountCard';
import MasterlistTable from '../../components/tables/masterlist_table/MasterlistTable';
import LoadingWrapper from '../../components/wrappers/loading wrapper/LoadingWrapper';
import PpmpMasterlistSkeleton from '../../components/skeleton/skeleton_pages/PpmpMasterlistSkeleton';

export default function PpmpMasterlist() {

    const [isLoading, setIsLoading] = useState(true);
    const totalPlannedItems = 258;
    
    useEffect(() => {
        const loadDashboardData = async () => {
            try {
                await new Promise(resolve => setTimeout(resolve, 500));
            } finally {
                setIsLoading(false);
            }
        };

        loadDashboardData();
    }, []);

    const ItemsCountCardData: {icon: string, title: string, count: number, color: string}[] = [
        {icon: 'package', title: 'Total Items in Planned', count: totalPlannedItems, color: 'gray'},
        {icon: 'chart', title: 'Total Available Items', count: 189, color: 'blue'},
        {icon: 'clock', title: 'Total Pending Items', count: 12, color: 'yellow'},
        {icon: 'check', title: 'Total Fulfilled Items', count: 58, color: 'green'},
        {icon: 'businessplan', title: 'Total Planned Price', count: 4300000, color: 'royal-red'},
    ];

    interface PPMPItem {
        id: number;
        itemDescription: string;
        unitMeasurement: string;
        plannedQuantity: number;
        availableQuantity: number;
        pendingQuantity: number;
        fulfilledQuantity: number;
        priceCatalogue: number;
    }
    
    const mockPPMPData: PPMPItem[] = [
    {
        id: 1,
        itemDescription: "Solid State Drive (1TB NVMe Gen4)",
        unitMeasurement: "piece",
        plannedQuantity: 10,
        availableQuantity: 9,
        pendingQuantity: 1,
        fulfilledQuantity: 0,
        priceCatalogue: 4500.00,
    },
    {
        id: 2,
        itemDescription: "LED Monitor (24-inch IPS, 144Hz)",
        unitMeasurement: "unit",
        plannedQuantity: 5,
        availableQuantity: 5,
        pendingQuantity: 0,
        fulfilledQuantity: 0,
        priceCatalogue: 8500.00,
    },
    {
        id: 3,
        itemDescription: "Mechanical Keyboard (Hot-swappable)",
        unitMeasurement: "piece",
        plannedQuantity: 15,
        availableQuantity: 5,
        pendingQuantity: 10,
        fulfilledQuantity: 0,
        priceCatalogue: 2200.00,
    },
    {
        id: 4,
        itemDescription: "CAT6 UTP Network Cable (305m Roll)",
        unitMeasurement: "roll",
        plannedQuantity: 2,
        availableQuantity: 0,
        pendingQuantity: 0,
        fulfilledQuantity: 2,
        priceCatalogue: 5800.00,
    },
    {
        id: 5,
        itemDescription: "Wireless Access Point (WiFi 6 Dual Band)",
        unitMeasurement: "unit",
        plannedQuantity: 3,
        availableQuantity: 0,
        pendingQuantity: 0,
        fulfilledQuantity: 3,
        priceCatalogue: 4200.00,
    },
    {
        id: 6,
        itemDescription: "USB Web Camera (1080p Full HD)",
        unitMeasurement: "piece",
        plannedQuantity: 8,
        availableQuantity: 0,
        pendingQuantity: 0,
        fulfilledQuantity: 8,
        priceCatalogue: 1800.00,
    },
    {
        id: 7,
        itemDescription: "RJ45 Modular Plugs (100 pcs per box)",
        unitMeasurement: "box",
        plannedQuantity: 10,
        availableQuantity: 2,
        pendingQuantity: 0,
        fulfilledQuantity: 8,
        priceCatalogue: 450.00,
    },
    {
        id: 8,
        itemDescription: "DDR4 Laptop RAM (16GB 3200MHz)",
        unitMeasurement: "piece",
        plannedQuantity: 12,
        availableQuantity: 7,
        pendingQuantity: 0,
        fulfilledQuantity: 5,
        priceCatalogue: 2800.00,
    },
    {
        id: 9,
        itemDescription: "Uninterruptible Power Supply (650VA)",
        unitMeasurement: "unit",
        plannedQuantity: 6,
        availableQuantity: 6,
        pendingQuantity: 0,
        fulfilledQuantity: 0,
        priceCatalogue: 2500.00,
    }
    ];

    function exportLatestPPMP() {
        // Placeholder function for exporting the latest PPMP data
        alert("Exporting latest PPMP data...");
    }

    return (
        <main className="page-container masterlist">
            <LoadingWrapper isLoading={isLoading} skeleton={<PpmpMasterlistSkeleton />}>
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
            </LoadingWrapper>
        </main>
    )
}