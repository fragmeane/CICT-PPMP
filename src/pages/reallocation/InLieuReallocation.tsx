import "./in-lieu-reallocation.css";
import { IconPrinter, IconTransfer, IconX, IconCheck, IconSearch, IconShoppingCart, IconTransform } from '@tabler/icons-react';
import alabIcon from "../../assets/icons/alab.svg";
import NewItemCard from "../../components/cards/new_item_card/NewItemCard";
import { useState } from "react";

export default function InLieuReallocation() {
    const selectedItemsValue = 0;

    interface NewItem {
        id: number;
        name: string;
        measurementUnit: string;
        quantity: number;
        unitPrice: number;
    }

    const [newItemsArray, setNewItemsArray] = useState<NewItem[]>([
        { id: Date.now(), name: "", measurementUnit: "", quantity: 1, unitPrice: 0 }
    ]);

    const requiredBudget = newItemsArray.reduce((sum, item) => {
        return sum + (item.quantity * item.unitPrice);
    }, 0);

    const remainingBudget = selectedItemsValue - requiredBudget;

    const handleAddItem = () => {
        setNewItemsArray([...newItemsArray, { id: Date.now(), name: "", measurementUnit: "", quantity: 1, unitPrice: 0 }]);
    };

    const handleDeleteItem = (idToDelete: number) => {
        setNewItemsArray(newItemsArray.filter(item => item.id !== idToDelete));
    };

    const handleUpdateItem = (id: number, field: 'name' | 'measurementUnit' | 'quantity' | 'unitPrice', value: string | number) => {
        setNewItemsArray(prevItems => 
            prevItems.map(item => 
                item.id === id ? { ...item, [field]: value } : item
            )
        );
    };

    const handleSaveToDatabase = () => {
        console.log("Payload ready for database:", newItemsArray);
    };

    return (
        <main className="page-container reallocation">
            <div className="budget-balancing-container">
                <div className="title-container">
                    <h2>Bulk Budget Balancing</h2>
                    <p>Add emergency needs and select items from the Available In-Lieu Pool to fit the budget.</p>
                </div>
                <div className={`price-balancing-container ${remainingBudget >= 0 ? 'balanced' : 'unbalanced'}`}>
                    <div className="required-budget-container">
                        <h3>Required Budget</h3>
                        <p>PHP {requiredBudget.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                    </div>
                    <IconTransfer size={24} className="transfer-icon" color="gray" />
                    <div className="available-budget-container">
                        <h3>Selected for Lieu</h3>
                        <p>PHP {selectedItemsValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                    </div>
                    <div className="remaining-budget-container">
                        <h3>Remaining</h3>
                        <p>PHP {remainingBudget.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                    </div>
                    {remainingBudget >= 0 ? (
                        <IconCheck size={24} className="check-icon" color="green" />
                    ) : (
                        <IconX size={24} className="x-icon" color="red" />
                    )}
                </div>
                <div className="new-lieu-items-container">
                    <div className="new-items-container">
                        <div className="search-container">
                            <IconSearch size={24} />
                            <input type="text" placeholder="Search Item if already exist and you want to add Qty..." className="search-input" />
                        </div>
                        <div className="title-button-container">
                            <h3><IconShoppingCart size={24} color="green"/> New Needs Cart</h3>
                            <button className="btn-secondary cursor-pointer" onClick={handleAddItem}>
                                + Add Item
                            </button>
                        </div>
                        <div className="new-items-card-container flex flex-col gap-4">
                            {newItemsArray.map((item) => (
                                <NewItemCard 
                                    key={item.id} 
                                    id={item.id}
                                    name={item.name}
                                    measurementUnit={item.measurementUnit}
                                    quantity={item.quantity}
                                    unitPrice={item.unitPrice}
                                    onDelete={handleDeleteItem}
                                    onUpdate={handleUpdateItem}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="lieu-items-container">
                        <div className="search-container">
                            <IconSearch size={24} />
                            <input type="text" placeholder="Search Item to be “In Lieu of” new Items..." className="search-input" />
                        </div>
                        <div className="title-button-container">
                            <h3><IconTransform size={24} color="red"/> Available Lieu Pool</h3>
                            <button className="btn-alab">
                                <img src={alabIcon} alt="ALAB Icon" className="w-5 h-5" />
                                Suggest Optimization
                            </button>
                        </div>
                        <div className="lieu-items-card-container">
                                
                        </div>
                    </div>
                </div>
                <div className="button-container">
                    {remainingBudget >= 0 && newItemsArray.length > 0 && !(requiredBudget <= 0) ? (
                        <button className="btn-secondary"><IconPrinter size={24} />Print Preview</button>
                    ) : (
                        <button className="btn-secondary" disabled><IconPrinter size={24} />Print Preview</button>
                    )}
                    
                    {remainingBudget >= 0 && newItemsArray.length > 0 && !(requiredBudget <= 0) ? (
                        <button className="btn-primary-rd-shadow" onClick={handleSaveToDatabase}>
                            <IconTransfer size={24} />Apply for Approval
                        </button>
                    ) : (
                        <button className="btn-primary-rd-shadow" disabled>
                            <IconTransfer size={24} />Apply for Approval
                        </button>
                    )}
                </div>
            </div>
        </main>
    )
}