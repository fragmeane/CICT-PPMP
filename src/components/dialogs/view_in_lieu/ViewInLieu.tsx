import "./view-in-lieu.css";
import { IconFileStack, IconX, IconChecklist } from '@tabler/icons-react';
import { useEffect, useRef } from "react";

interface Item {
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

interface ViewInLieuProps {
    inLieuId?: number;
    requestDate?: string;
    requestedBy?: string;
    status?: string;
    originalItems?: Item[];
    proposedItems?: Item[];
    budgetImpact?: BudgetImpact;
    isOpen: boolean;
    onClose: () => void;
}

export default function ViewInLieu({inLieuId, requestDate, requestedBy, status, originalItems, proposedItems, budgetImpact, isOpen, onClose }: ViewInLieuProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (isOpen) {
            if (!dialog.hasAttribute('open')) {
                dialog.showModal();
            }
        } else {
            dialog.close();
        }
    }, [isOpen]);

    const handleCancel = (e: React.SyntheticEvent) => {
        e.preventDefault(); 
        onClose();          
    };

    const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onClose();
    };

    return (
        <dialog className="view-in-lieu" ref={dialogRef} onCancel={handleCancel}>
            <div className="header">
                <div className="icon blue">
                    <IconFileStack size={24} />
                </div>
                <div className="title">
                    <h3>View In Lieu Request</h3>
                    <p>Detailed Information of the Request</p>
                </div>
            </div>
            <div className="top-content">
                <p><strong>Request Date: </strong> {requestDate}</p>
                <p><strong>Requested By: </strong> {requestedBy}</p>
                <p><strong>Current Status: </strong> <div className={`status ${status?.toLowerCase()}`}>{status}</div></p>
            </div>
            <div className="table-content original">
                <h3>Original Items (Surrendered)</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Original Items</th>
                            <th>Reduced Qty</th>
                            <th>Measurement Unit</th>
                            <th>Unit Price</th>
                            <th>Total Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {originalItems?.map((item) => (
                            <tr key={item.id}>
                                <td>{item.itemName}</td>
                                <td>-{item.count}</td>
                                <td>{item.unitMeasurement}</td>
                                <td>PHP {item.priceCatalog.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                                <td>PHP {(item.count * item.priceCatalog).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="total">
                    <p><strong>Total Value:</strong> PHP {budgetImpact?.originalItemsTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                </div>
            </div>
            <div className="table-content substitute">
                <h3>Proposed Substitution (Requested)</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Proposed Items</th>
                            <th>Increase Qty</th>
                            <th>Measurement Unit</th>
                            <th>Unit Price</th>
                            <th>Total Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {proposedItems?.map((item) => (
                            <tr key={item.id}>
                                <td>{item.itemName}</td>
                                <td>+{item.count}</td>
                                <td>{item.unitMeasurement}</td>
                                <td>PHP {item.priceCatalog.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                                <td>PHP {(item.count * item.priceCatalog).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="total">
                    <p><strong>Total Value:</strong> PHP {budgetImpact?.proposedItemsTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                </div>
            </div>
            <div className="financial-summary">
                <h3>Financial Summary</h3>
                <p><strong>Total Value of Original Items:</strong> PHP {budgetImpact?.originalItemsTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                <p><strong>Total Value of Proposed Items:</strong> PHP {budgetImpact?.proposedItemsTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                <p><strong>Net Budget Impact (Final):</strong> PHP {budgetImpact?.difference.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            </div>
            <div className="action-btns">
                <div className="cancel-btn-container">
                    <button className="btn-secondary" onClick={handleClose}>
                        <IconX size={18} /> Close
                    </button>
                </div>
                {status === "Pending" && (
                    <>
                        <button className="btn-solid green">
                            <IconChecklist size={18} /> Approve
                        </button>
                        <button className="btn-solid red">
                            <IconX size={18} /> Reject
                        </button>
                    </>
                )}
            </div>
        </dialog>
    );
}