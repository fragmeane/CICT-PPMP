import { useState } from "react";
import PrintPR from "../../dialogs/print_PR/PrintPR";
import "./pr-history-card.css";
import { IconClock, IconCircleDashedCheck, IconPrinter, IconChecklist, IconCancel } from '@tabler/icons-react';

interface PRHistoryCardProps {
    prNumber: string;
    quantity: number;
    itemName: string;
    specifications: string;
    priceCatalog: number;
    status: string;
    dateRequested: string;
    dateFulfilled?: string | null;
}

export default function PRHistoryCard({prNumber, quantity, itemName, priceCatalog, specifications, status, dateRequested, dateFulfilled}: PRHistoryCardProps) {
    const [isPrintPROpen, setPrintPROpen] = useState(false);
    return (    
        <div className="pr-history-card">
            <div className={`icon ${status === "Pending" ? "yellow" : status === "Fulfilled" ? "green" : status === "Cancelled" ? "red" : ""}`}>
                {status === "Pending" && <IconClock size={24} />}
                {status === "Fulfilled" && <IconCircleDashedCheck size={24} />}
                {status === "Cancelled" && <IconCancel size={24}/>}
            </div>
            <div className="info">
                <div className="pr-number-status-container">
                    <p className="pr-number">{prNumber}</p>
                    <p className={`status ${status.toLowerCase()}`}>{status}</p>
                </div>
                <p className="specifications">{itemName} • {specifications}</p>
                <p className="pr-quantity">Quantity: {quantity} units</p>
            </div>
            <div className="date-button-container">
                <p className="pr-date">{dateRequested}</p>
                {status === "Pending" && (
                    <>
                        <div className="button-container">
                            <button className="btn-solid blue" onClick={() => setPrintPROpen(true)}>
                                <IconPrinter size={16} />
                                Print Document
                            </button>
                            <button className="btn-solid green">
                                <IconChecklist size={16} />
                                Arrived
                            </button>
                            <button className="btn-solid red">
                                <IconCancel size={16} />
                                Cancel
                            </button>
                        </div>
                        <PrintPR
                            prId={prNumber}
                            itemName={itemName}
                            itemDescription={specifications}
                            quantity={quantity}
                            unitPrice={priceCatalog} 
                            requestedDate={dateRequested}
                            isOpen={isPrintPROpen}
                            onClose={() => {setPrintPROpen(false)}}
                        />
                    </>
                )}
                {status === "Fulfilled" && dateFulfilled && (
                    <p className="date-fulfilled">Received: {dateFulfilled}</p>
                )}
            </div>
        </div>
    )
}