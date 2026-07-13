import { BrowserRouter, Routes, Route, Navigate, Outlet, useNavigate } from 'react-router';
import './App.css';
import { useEffect, useState } from 'react';

// Pages
import Landing from './pages/landing/Landing';
import Login from './pages/login/Login';
import ForgotPassword from './pages/login/ForgotPassword';
import ResetPassword from './pages/login/ResetPassword';
import Dashboard from './pages/dashboard/Dashboard';
import PpmpMasterlist from './pages/masterlist/PpmpMasterlist';
import ProcurementMonitor from './pages/monitoring/ProcurementMonitor';
import InLieuReallocation from './pages/reallocation/InLieuReallocation';
import InLieuApprovals from './pages/approvals/InLieuApprovals';
import UserManagement from './pages/usermanagement/UserManagement';
import Settings from './pages/settings/Settings';

// Components
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import { getAccessToken } from '../supadb';
import { toast } from './components/toast/ToastService';
import { showCircleLoadingDialog } from './components/dialogs/circle_loading_dialog/CircleLoadingDialogService'; // Assuming you have this!

function PrivateLayout() {
    const navigate = useNavigate();
    const [isCheckingAuth, setIsCheckingAuth] = useState(true);
    
    const fiscalYears = [2022, 2023, 2024, 2025];
    const [userFullName, setUserFullName] = useState<string>('');
    const [userEmailAddress, setUserEmailAddress] = useState<string>('');
    const [userRole, setUserRole] = useState<string>('');

    useEffect(() => {
        const getHeaderInfo = async () => {
            const accessToken = await getAccessToken();
            
            if (!accessToken) {
                toast.error("User not logged in. Please log in again.");
                navigate('/login');
                return;
            }

            try {
                const response = await fetch("https://test-ppmp.onrender.com/api/user/header_info", {
                    method: "GET",
                    headers: { Authorization: `Bearer ${accessToken}` }
                });

                if (!response.ok) {
                    toast.error("Failed to retrieve header info.");
                    navigate('/login');
                    return;
                }

                const result = await response.json();
                console.log("Header info retrieved: ", result);
                setUserFullName(result.UserFullName);
                setUserEmailAddress(result.UserEmailAddress);
                setUserRole(result.UserRole);
            } catch (error) {
                console.error("Error fetching user info:", error);
                toast.error("Network error.");
            } finally {
                setIsCheckingAuth(false);
            }
        };

        getHeaderInfo();
    }, [navigate]);

    return (
        <>
            <Nav userRole={userRole} fiscalYear={fiscalYears} />
            <Header userFullName={userFullName} userEmailAddress={userEmailAddress} />

            <main className="main-content-wrapper">
                <Outlet context={{ userRole }} /> 
            </main>
        </>
    );
}

function AdminRoute({ children }: { children: React.ReactNode }) {
    return children;
}

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* PUBLIC ROUTES (No Nav, No Header, No Auth Check) */}
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />

                {/* PRIVATE ROUTES (Protected by PrivateLayout) kailangan naka logged in ang user */}
                <Route element={<PrivateLayout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/ppmp-master-list" element={<PpmpMasterlist />} />
                    <Route path="/procurement-monitor" element={<ProcurementMonitor />} />
                    <Route path="/in-lieu-reallocation" element={<InLieuReallocation />} />
                    <Route path="/in-lieu-approvals" element={<InLieuApprovals />} />
                    <Route path="/settings" element={<Settings />} />

                    {/* Admin Only Route */}
                    <Route 
                        path="/user-management" 
                        element={
                            <AdminRoute>
                                <UserManagement />
                            </AdminRoute>
                        } 
                    />
                </Route>

                {/* Catch-all for unknown routes */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
}