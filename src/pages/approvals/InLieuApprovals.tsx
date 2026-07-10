import InLieuApprovalTable from "../../components/tables/in_lieu_approval_table/InLieuApprovalTable";
import "./in-lieu-approvals.css";

export default function InLieuApprovals() {
    interface Item{
        id: number;
        count: number;
        itemName: string;
        unitMeasurement: string;
        priceCatalog: number;
    }
    interface BudgetImpact {
        originalItemsTotal: number;
        proposedItemsTotal: number;
        difference: number;
    }
    interface InLieuApprovalData {
        id: number;
        requestDate: string;
        requestedBy: string;
        originalItems: Item[];
        proposedItems: Item[];
        budgetImpact: BudgetImpact;
        status: string;
    }

    const inLieuApprovalData: InLieuApprovalData[] = [
        {
            id: 1,
            requestDate: "2024-06-01",
            requestedBy: "John Doe",
            originalItems: [
                {
                    id: 1,
                    count: 10,
                    itemName: "ddr 4 ram",
                    unitMeasurement: "pieces",
                    priceCatalog: 100.00
                },
                {
                    id: 2,
                    count: 10,
                    itemName: "sd card",
                    unitMeasurement: "pieces",
                    priceCatalog: 200.00
                },
                {
                    id: 3,
                    count: 10,
                    itemName: "Solid State Drive (1TB NVMe Gen4)",
                    unitMeasurement: "pieces",
                    priceCatalog: 300.00
                },
                {
                    id: 4,
                    count: 10,
                    itemName: "sd card",
                    unitMeasurement: "pieces",
                    priceCatalog: 200.00
                },
            ],
            proposedItems: [
                {
                    id: 2,
                    count: 5,
                    itemName: "Item 2",
                    unitMeasurement: "pieces",
                    priceCatalog: 150.00
                }
            ],
            budgetImpact: {
                originalItemsTotal: 1000.00,
                proposedItemsTotal: 750.00,
                difference: 250.00
            },
            status: "Pending"
        },
        {
            id: 1,
            requestDate: "2024-06-01",
            requestedBy: "John Doe",
            originalItems: [
                {
                    id: 1,
                    count: 10,
                    itemName: "Item 1",
                    unitMeasurement: "pieces",
                    priceCatalog: 100.00
                }
            ],
            proposedItems: [
                {
                    id: 2,
                    count: 5,
                    itemName: "Item 2",
                    unitMeasurement: "pieces",
                    priceCatalog: 150.00
                }
            ],
            budgetImpact: {
                originalItemsTotal: 1000.00,
                proposedItemsTotal: 750.00,
                difference: 250.00
            },
            status: "Rejected"
        }
    ];

    return (
        <div className="page-container approvals">
            <InLieuApprovalTable data={inLieuApprovalData} />
        </div>
    )
}