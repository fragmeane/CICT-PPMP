import './ppmp-masterlist.css';
import { useEffect, useState } from 'react';
import ItemsCountCard from '../../components/cards/items_count_card/ItemsCountCard';
import MasterlistTable from '../../components/tables/masterlist_table/MasterlistTable';
import LoadingWrapper from '../../components/wrappers/loading wrapper/LoadingWrapper';
import PpmpMasterlistSkeleton from '../../components/skeleton/skeleton_pages/PpmpMasterlistSkeleton';
import { useNavigate } from 'react-router';
import { toast } from '../../components/toast/ToastService';
import { getAccessToken } from '../../../supadb';

interface PPMPItem {
    itemId: number;
    itemName: string;
    unitMeasurement: string;
    plannedQuantity: number;
    availableQuantity: number;
    pendingQuantity: number;
    fulfilledQuantity: number;
    priceCatalog: number;
}

export default function PpmpMasterlist() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [isInitialLoading, setIsInitialLoading] = useState(true);

    const [totalPlannedItemCount, setTotalPlannedItemCount] = useState(0);
    const [totalAvailableItemCount, setTotalAvailableItemCount] = useState(0);
    const [totalPendingItemCount, setTotalPendingItemCount] = useState(0);
    const [totalFulfilledItemCount, setTotalFulfilledItemCount] = useState(0);
    const [totalPlannedFunds, setTotalPlannedFunds] = useState(0);

    const [ppmpTableData, setPpmpTableData] = useState<PPMPItem[]>([]);
    
    useEffect(() => {
        const loadPpmpTableData = async () => {
            const accessToken = await getAccessToken();
            if(!accessToken){
                navigate('/login');
                toast.error("User not logged in. Please log in again.");
            }
            try {
                await fetch('https://test-ppmp.onrender.com/api/masterlist/', {
                    method: "GET",
                }).then(response =>{
                    if(!response.ok){
                        alert(response.status)
                    }
                    return response.json()
                })
                .then(result =>{
                    setPpmpTableData(result);
                })
            } finally {
                setIsInitialLoading(false);
            }
        };

        loadPpmpTableData();
    }, []);

    const ItemsCountCardData: {icon: string, title: string, count: number, color: string}[] = [
        {icon: 'package', title: 'Total Items in Planned', count: totalPlannedItemCount, color: 'gray'},
        {icon: 'chart', title: 'Total Available Items', count: totalAvailableItemCount, color: 'blue'},
        {icon: 'clock', title: 'Total Pending Items', count: totalPendingItemCount, color: 'yellow'},
        {icon: 'check', title: 'Total Fulfilled Items', count: totalFulfilledItemCount, color: 'green'},
        {icon: 'businessplan', title: 'Total Planned Price', count: totalPlannedFunds, color: 'royal-red'},
    ];

    function exportLatestPPMP() {
        // Placeholder function for exporting the latest PPMP data
        alert("Exporting latest PPMP data...");
    }

    return (
        <main className="page-container masterlist">
            <LoadingWrapper isLoading={isInitialLoading} skeleton={<PpmpMasterlistSkeleton />}>
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
                    data={ppmpTableData}
                    exportFunction={exportLatestPPMP}
                    />
            </LoadingWrapper>
        </main>
    )
}