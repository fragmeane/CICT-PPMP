import "./global-dialog.css";
import { IconCircleCheck, IconExclamationCircle, IconXboxX, IconAlertTriangle } from '@tabler/icons-react';
import { useEffect, useRef, type SyntheticEvent } from "react";

export interface DialogUIProps {
    title?: string;
    message: string;
    confirmButtonText?: string;
    type: "success" | "error" | "info" | "warning";
    mode: "notification" | "confirmation";
    isOpen: boolean;
    onConfirm: () => void;
    onCancel: () => void;
}

export default function GlobalDialog({ title, message, confirmButtonText, type, mode, isOpen, onConfirm, onCancel }: DialogUIProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (isOpen && !dialog.hasAttribute('open')) {
            dialog.showModal();
        } else if (!isOpen && dialog.hasAttribute('open')) {
            dialog.close();
        }
    }, [isOpen]);

    const handleCancel = (e: SyntheticEvent) => {
        e.preventDefault();
        onCancel();
    };

    return (
        <dialog ref={dialogRef} onCancel={handleCancel} className={`notification ${type}`}>
            <div className="Notification-icon-title">
                <div className={`icon ${type === "success" ? "green" : type === "error" ? "red" : type === "info" ? "blue" : "yellow"}`}>
                    {type === "success" && <IconCircleCheck size={24} />}   
                    {type === "error" && <IconXboxX size={24} />}
                    {type === "info" && <IconExclamationCircle size={24} />}
                    {type === "warning" && <IconAlertTriangle size={24} />}
                </div>
                {title && <h2>{title}</h2>} 
            </div>
            
            <hr className={`notification-divider ${type}`} />
            <p>{message}</p>
            
            {mode === "confirmation" && (
                <div className="confirmation-buttons">
                    <button className="btn-secondary" onClick={onCancel}>
                        Cancel
                    </button>
                    <button className={`btn-solid ${type === "success" ? "green" : type === "error" ? "red" : type === "info" ? "blue" : "yellow"}`} onClick={onConfirm}>
                        {confirmButtonText || "Confirm"}
                    </button>
                </div>
            )}
            
            {mode === "notification" && (
                <div className="notification-buttons">
                    <button className={`btn-solid ${type === "success" ? "green" : type === "error" ? "red" : type === "info" ? "blue" : "yellow"}`} onClick={onConfirm}>
                        {confirmButtonText || "OK"}
                    </button>
                </div>
            )}
        </dialog>
    );
}