import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import HomePage from "../pages/HomePage";
import MoodModulePage from "../pages/MoodModulePage";
import KnowledgeModulePage from "../pages/KnowledgeModulePage";
import ChallengeModulePage from "../pages/ChallengeModulePage";
import ProgressModulePage from "../pages/ProgressModulePage";
import WellbeingToolsPage from "../pages/WellbeingToolsPage";
import Layout from "../components/layouts/Layout";
import LoadingSpinner from "../components/atoms/LoadingSpinner";
import NotificationSystem from "../components/organisms/NotificationSystem";
import { useAutoTheme, useTheme } from "../hooks/useTheme";

function AppRouter() {
    const { isAuthenticated, loading } = useSelector((state) => state.auth);
    useAutoTheme();
    useTheme();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
                <LoadingSpinner breathing={true} />
            </div>
        );
    }

    return (
        <BrowserRouter>
            <NotificationSystem />
            <Routes>
                <Route path="/auth" element={<AuthPage />} />
                <Route element={<Layout />}>
                    <Route
                        path="/home"
                        element={isAuthenticated ? <HomePage /> : <Navigate to="/auth" />}
                    />

                    <Route
                        path="/knowledge"
                        element={isAuthenticated ? <KnowledgeModulePage /> : <Navigate to="/auth" />}
                    />
                    <Route
                        path="/challenge"
                        element={isAuthenticated ? <ChallengeModulePage /> : <Navigate to="/auth" />}
                    />
                    <Route
                        path="/progress"
                        element={isAuthenticated ? <ProgressModulePage /> : <Navigate to="/auth" />}
                    />
                    <Route
                        path="/mood"
                        element={isAuthenticated ? <MoodModulePage /> : <Navigate to="/auth" />}
                    />
                    <Route
                        path="/wellbeingtools"
                        element={isAuthenticated ? <WellbeingToolsPage /> : <Navigate to="/auth" />}
                    />
                    <Route
                        path="/"
                        element={isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/auth" />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;