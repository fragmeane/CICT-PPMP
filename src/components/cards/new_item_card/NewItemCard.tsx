import "./new-item-card.css";
import { IconTrash } from '@tabler/icons-react';

interface newItemsArray {
    itemId: number;
    itemName: string;
    unitMeasurement: string;
    quantity: number;
    priceCatalog: number;
}

interface NewItemCardProps {
    itemId: number;
    itemName: string;
    unitMeasurement: string;
    quantity: number;
    priceCatalog: number;
    newItemsArrayHolder?: newItemsArray[];
    ppmpReallocationData?: any[];
    onDelete: (id: number) => void;
    onUpdate: (id: number, field: 'name' | 'measurementUnit' | 'quantity' | 'unitPrice', value: string | number) => void;
}

export default function NewItemCard({ 
    itemId, 
    itemName, 
    unitMeasurement, 
    quantity, 
    priceCatalog, 
    ppmpReallocationData, 
    onDelete, 
    onUpdate 
}: NewItemCardProps) {
    
    const totalPrice = quantity * priceCatalog;
    const isNewItemExisting = ppmpReallocationData?.some(item => item.itemName === itemName) || false;

    return (
        <div className="new-item-card">
            <div className="input-group">
                <label htmlFor={`itemName-${itemId}`}>Item Name</label>
                <input 
                    type="text" 
                    id={`itemName-${itemId}`} 
                    placeholder="Enter item name" 
                    value={itemName} 
                    onChange={(e) => onUpdate(itemId, 'name', e.target.value)} 
                    required
                    disabled={isNewItemExisting}
                    className={isNewItemExisting ? "bg-gray-100 text-gray-500 cursor-not-allowed" : ""}
                />
            </div>
            <div className="bottom-field-container">
                <div className="input-group">
                    <label htmlFor={`unitMeasurement-${itemId}`}>Unit Measurement</label>
                    <input 
                        type="text" 
                        id={`unitMeasurement-${itemId}`} 
                        placeholder="eg. piece, kg, box..." 
                        value={unitMeasurement}
                        onChange={(e) => onUpdate(itemId, 'measurementUnit', e.target.value)}
                        required
                        disabled={isNewItemExisting}
                        className={isNewItemExisting ? "bg-gray-100 text-gray-500 cursor-not-allowed" : ""}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor={`quantity-${itemId}`}>Quantity</label>
                    <input 
                        type="number" 
                        id={`quantity-${itemId}`} 
                        min="1" 
                        value={quantity === 0 ? '' : quantity} 
                        onChange={(e) => onUpdate(itemId, 'quantity', parseFloat(e.target.value) || 0)} 
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor={`unitPrice-${itemId}`}>Unit Price (PHP)</label>
                    <input 
                        type="number" 
                        id={`unitPrice-${itemId}`} 
                        min="1" 
                        step="0.01"
                        value={priceCatalog === 0 ? '' : priceCatalog} 
                        onChange={(e) => onUpdate(itemId, 'unitPrice', parseFloat(e.target.value) || 0)} 
                        required
                        disabled={isNewItemExisting}
                        className={isNewItemExisting ? "bg-gray-100 text-gray-500 cursor-not-allowed" : ""}
                    />
                </div>
            </div>
            <div className="total-price">
                <div className="icon red cursor-pointer" onClick={() => onDelete(itemId)}>
                    <IconTrash size={18}/>
                </div>
                <p>Total Price: <span>PHP {totalPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span></p>
            </div>
        </div>
    )
}