import "./new-item-card.css";
import { IconTrash } from '@tabler/icons-react';

interface NewItemCardProps {
    id: number;
    name: string;
    measurementUnit: string;
    quantity: number;
    unitPrice: number;
    onDelete: (id: number) => void;
    onUpdate: (id: number, field: 'name' | 'measurementUnit' | 'quantity' | 'unitPrice', value: string | number) => void;
}

export default function NewItemCard({ id, name, measurementUnit, quantity, unitPrice, onDelete, onUpdate }: NewItemCardProps) {
    const totalPrice = quantity * unitPrice;

    return (
        <div className="new-item-card">
            <div className="input-group">
                <label htmlFor={`itemName-${id}`}>Item Name</label>
                <input 
                    type="text" 
                    id={`itemName-${id}`} 
                    placeholder="Enter item name" 
                    value={name} 
                    onChange={(e) => onUpdate(id, 'name', e.target.value)} 
                    required
                />
            </div>
            <div className="bottom-field-container">
                <div className="input-group">
                    <label htmlFor={`measurementUnit-${id}`}>Measurement Unit</label>
                    <input 
                        type="text" 
                        id={`measurementUnit-${id}`} 
                        placeholder="eg. piece, kg, box..." 
                        value={measurementUnit} // Bind to state
                        onChange={(e) => onUpdate(id, 'measurementUnit', e.target.value)} // Send string back to parent
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor={`quantity-${id}`}>Quantity</label>
                    <input 
                        type="number" 
                        id={`quantity-${id}`} 
                        min="1" 
                        value={quantity === 0 ? '' : quantity} 
                        onChange={(e) => onUpdate(id, 'quantity', parseFloat(e.target.value) || 0)} 
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor={`unitPrice-${id}`}>Unit Price (PHP)</label>
                    <input 
                        type="number" 
                        id={`unitPrice-${id}`} 
                        min="1" 
                        step="0.01"
                        value={unitPrice === 0 ? '' : unitPrice} 
                        onChange={(e) => onUpdate(id, 'unitPrice', parseFloat(e.target.value) || 0)} 
                        required
                    />
                </div>
            </div>
            <div className="total-price">
                <div className="icon red" onClick={() => onDelete(id)}>
                    <IconTrash size={18}/>
                </div>
                <p>Total Price: <span>PHP {totalPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span></p>
            </div>
        </div>
    )
}