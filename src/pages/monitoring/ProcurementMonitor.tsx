import { useEffect, useState } from "react";
import ItemsCountCard from "../../components/cards/items_count_card/ItemsCountCard";
import TrackingItemCard from "../../components/cards/tracking_item_card/TrackingItemCard";
import "./procurement-monitor.css";
import { IconSearch, IconFilter } from '@tabler/icons-react';
import LoadingWrapper from "../../components/wrappers/loading wrapper/LoadingWrapper";
import MonitoringSkeleton from "../../components/skeleton/skeleton_pages/MonitoringSkeleton";

export default function ProcurementMonitor() {
    const [isLoading, setIsLoading] = useState(true);
        
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
        {icon: 'package', title: 'Total Items in Planned', count: 256, color: 'gray'},
        {icon: 'chart', title: 'Total Available Items', count: 189, color: 'blue'},
        {icon: 'clock', title: 'Total Pending Items', count: 12, color: 'yellow'},
        {icon: 'check', title: 'Total Fulfilled Items', count: 58, color: 'green'},
    ];

    interface prHistoryItem {
        id: number;
        quantity: number;
        specifications: string;
        status: string;
        dateRequested: string;
        dateFulfilled?: string | null;
    } 

    interface TrackingItem {
        id: number;
        itemName: string;
        priceCatalog: number;
        plannedQuantity: number;
        availableQuantity: number;
        pendingQuantity: number;
        fulfilledQuantity: number;
        prHistory: prHistoryItem[];
        prHistoryCount: number;
    }

    const mockTrackingItems: TrackingItem[] = [
        {
            id: 1,
            itemName: "Solid State Drive (1TB NVMe Gen4)",
            priceCatalog: 4500.00,
            plannedQuantity: 10,
            availableQuantity: 9,
            pendingQuantity: 1,
            fulfilledQuantity: 0,
            prHistory: [
                {
                    id: 1,
                    quantity: 5,
                    specifications: "5 pieces of Solid State Drive (1TB NVMe Gen4)",
                    status: "Pending",
                    dateRequested: "2023-10-01",
                },
                {
                    id: 2,
                    quantity: 4,
                    specifications: "4 pieces of Solid State Drive (1TB NVMe Gen4)",
                    status: "Fulfilled",
                    dateRequested: "2023-10-05",
                    dateFulfilled: "2023-10-10",
                },
                {
                    id: 3,
                    quantity: 2,
                    specifications: "2 pieces of Solid State Drive (1TB NVMe Gen4)",
                    status: "Cancelled",
                    dateRequested: "2023-10-01",
                }
            ],
            prHistoryCount: 1,
        },
        {   
            id: 2,
            itemName: "LED Monitor (24-inch IPS, 144Hz)",
            priceCatalog: 8500.00,
            plannedQuantity: 5,
            availableQuantity: 5,
            pendingQuantity: 0,
            fulfilledQuantity: 0,
            prHistory: [
                {
                    id: 3,
                    quantity: 5,
                    specifications: "5 units of LED Monitor (24-inch IPS, 144Hz)",
                    status: "Available",
                    dateRequested: "2023-10-03",
                },
            ],
            prHistoryCount: 0,
        },
        {
            id: 3,
            itemName: "Mechanical Keyboard (Hot-swappable)",
            priceCatalog: 2200.00,
            plannedQuantity: 15,
            availableQuantity: 5,
            pendingQuantity: 10,
            fulfilledQuantity: 0,
            prHistory: [],
            prHistoryCount: 0,
        },
    ];

  return (
    <main className="page-container monitoring">
        <LoadingWrapper isLoading={isLoading} skeleton={<MonitoringSkeleton />}>
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
            <div className="header-content">
                <h2>Monitor and Track Items</h2>
                <div className="search-container">
                    <IconSearch size={24} />
                    <input type="text" placeholder="Search Items..." className="search-input" />
                </div>
                <div className="filter-container">
                    <IconFilter size={24} />
                    <select className="filter-select">
                        <option value="">Filter by:</option>
                        <option value="ascending">Ascending Item Name</option>
                        <option value="descending">Descending Item Name</option>
                        <option value="available">Available Items</option>
                        <option value="pending">Pending Items</option>
                        <option value="fulfilled">Fulfilled Items</option>
                    </select>
                </div>
            </div>
            <div className="tracking-items-card-container">
                    {mockTrackingItems.map((item, index) => (
                        <TrackingItemCard 
                            key={index}
                            id={item.id} 
                            itemName={item.itemName}
                            priceCatalog={item.priceCatalog}
                            plannedQuantity={item.plannedQuantity}
                            availableQuantity={item.availableQuantity}
                            pendingQuantity={item.pendingQuantity}
                            fulfilledQuantity={item.fulfilledQuantity}
                            prHistory={item.prHistory}
                            prHistoryCount={item.prHistoryCount}
                        />
                    ))}
            </div>
        </LoadingWrapper>
    </main>
  );
}