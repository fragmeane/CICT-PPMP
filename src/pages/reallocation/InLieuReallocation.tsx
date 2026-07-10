import "./in-lieu-reallocation.css";
import { IconPrinter, IconTransfer, IconX, IconCheck, IconSearch, IconShoppingCart, IconTransform } from '@tabler/icons-react';
import alabIcon from "../../assets/icons/alab.svg";
import NewItemCard from "../../components/cards/new_item_card/NewItemCard";
import LieuItemCard from "../../components/cards/lieu_item_card/LieuItemCard";
import { useState } from "react";
import InfoNote from "../../components/notes/info_note/InfoNote";
import WarningNote from "../../components/notes/warning_note/WarningNote";

export default function InLieuReallocation() {
    
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

    const requiredBudget = newItemsArray.reduce((sum, item) => sum + (item.quantity * item.unitPrice), 0);

    interface SelectedLieuItem {
        id: number;
        itemDescription: string;
        unitMeasurement: string;
        reduceQuantity: number;
        priceCatalogue: number;
    }

    interface PPMPData {
        id: number;
        itemDescription: string;
        unitMeasurement: string;
        plannedQuantity: number;
        availableQuantity: number;
        priceCatalogue: number;
    }

    const [selectedLieuItems, setSelectedLieuItems] = useState<SelectedLieuItem[]>([]);

    const selectedItemsValue = selectedLieuItems.reduce((sum, item) => sum + (item.reduceQuantity * item.priceCatalogue), 0);

    const remainingBudget = selectedItemsValue - requiredBudget;

    const isNewItemsValid = newItemsArray.every(item => 
        item.name.trim() !== "" && 
        item.measurementUnit.trim() !== "" && 
        item.quantity > 0 && 
        item.unitPrice > 0
    );

    const handleAddItem = () => setNewItemsArray([...newItemsArray, { id: Date.now(), name: "", measurementUnit: "", quantity: 1, unitPrice: 0 }]);
    const handleDeleteItem = (id: number) => setNewItemsArray(newItemsArray.filter(item => item.id !== id));
    const handleUpdateItem = (id: number, field: keyof NewItem, value: string | number) => {
        setNewItemsArray(prev => prev.map(item => item.id === id ? { ...item, [field]: value } : item));
    };

    const handleToggleLieuItem = (item: any) => {
        const isSelected = selectedLieuItems.some(selected => selected.id === item.id);
        if (isSelected) {
            setSelectedLieuItems(prev => prev.filter(selected => selected.id !== item.id));
        } else {
            setSelectedLieuItems(prev => [...prev, {
                id: item.id,
                itemDescription: item.itemDescription,
                unitMeasurement: item.unitMeasurement,
                reduceQuantity: 0,
                priceCatalogue: item.priceCatalogue
            }]);
        }
    };

    const handleUpdateLieuQuantity = (id: number, quantity: number) => {
        setSelectedLieuItems(prev => prev.map(item => 
            item.id === id ? { ...item, reduceQuantity: quantity } : item
        ));
    };

    const handleSaveToDatabase = () => {
        const payload = {
            status: "Pending Approval",
            requiredBudget: requiredBudget,
            lieuFundedValue: selectedItemsValue,
            itemsToProcure: newItemsArray,
            itemsToReduce: selectedLieuItems 
        };
        console.log("Full JSON Payload ready for database:", payload);
    };

    const mockPPMPData: PPMPData[] = [
        { id: 1, itemDescription: "Solid State Drive (1TB NVMe Gen4)", unitMeasurement: "piece", plannedQuantity: 10, availableQuantity: 9, priceCatalogue: 4500.00},
        { id: 2, itemDescription: "LED Monitor (24-inch IPS, 144Hz)", unitMeasurement: "unit", plannedQuantity: 5, availableQuantity: 5, priceCatalogue: 8500.00},
        { id: 3, itemDescription: "Mechanical Keyboard (Hot-swappable)", unitMeasurement: "piece", plannedQuantity: 15, availableQuantity: 5, priceCatalogue: 2200.00},
        { id: 4, itemDescription: "Mechanical Keyboard (Hot-swappable)", unitMeasurement: "piece", plannedQuantity: 15, availableQuantity: 0, priceCatalogue: 2200.00}
    ];

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
                    {remainingBudget >= 0 ? <IconCheck size={24} className="check-icon" color="green" /> : <IconX size={24} className="x-icon" color="red" />}
                </div>

                <div className="note-container">
                    <WarningNote message="Please ensure that all fields must be filled out before proceeding." />
                </div>

                <div className="new-lieu-items-container">
                    <div className="new-items-container">
                        <div className="search-container">
                            <IconSearch size={24} />
                            <input type="text" placeholder="Search Item to be “In Lieu of” new Items..." className="search-input" />
                        </div>
                        <div className="title-button-container">
                            <h3><IconShoppingCart size={24} color="green"/> New Needs Cart</h3>
                            <button className="btn-secondary cursor-pointer" onClick={handleAddItem}>+ Add Item</button>
                        </div>
                        <div className="new-items-card-container">
                            {newItemsArray.map((item) => (
                                <NewItemCard key={item.id} id={item.id} name={item.name} measurementUnit={item.measurementUnit} quantity={item.quantity} unitPrice={item.unitPrice} onDelete={handleDeleteItem} onUpdate={handleUpdateItem} />
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
                            <button className="btn-alab"><img src={alabIcon} alt="ALAB Icon" className="w-5 h-5" />Suggest Optimization</button>
                        </div>
                        <div className="lieu-items-card-container">
                            {mockPPMPData.map((item) => {
                                const selectedItemInfo = selectedLieuItems.find(selected => selected.id === item.id);
                                const isSelected = !!selectedItemInfo;
                                const currentReduceQty = selectedItemInfo ? selectedItemInfo.reduceQuantity : 0;

                                return item.availableQuantity > 0 && (
                                    <LieuItemCard 
                                        key={item.id}
                                        id={item.id}
                                        itemName={item.itemDescription}
                                        unitMeasurement={item.unitMeasurement}
                                        priceCatalog={item.priceCatalogue}
                                        plannedQuantity={item.plannedQuantity}
                                        availableQuantity={item.availableQuantity}
                                        isSelected={isSelected}
                                        reduceQuantity={currentReduceQty}
                                        onToggle={() => handleToggleLieuItem(item)}
                                        onQuantityChange={handleUpdateLieuQuantity}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
                
                <div className="button-container">
                    <button 
                        className="btn-secondary cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed" 
                        disabled={remainingBudget < 0 || newItemsArray.length === 0 || requiredBudget <= 0 || !isNewItemsValid}
                    >
                        <IconPrinter size={24} />Print Preview
                    </button>
                    
                    <button 
                        className="btn-primary-rd-shadow disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[var(--primary)]" 
                        onClick={handleSaveToDatabase} 
                        disabled={remainingBudget < 0 || newItemsArray.length === 0 || requiredBudget <= 0 || !isNewItemsValid}
                    >
                        <IconTransfer size={24} />Apply for Approval
                    </button>
                </div>
            </div>
        </main>
    )
}