import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SpinnerComponent from "../utils/spinner";

const DashboardPage = lazy(() => import('../pages/dashboard'));
const TotalAssetPage = lazy(() => import('../pages/total_asset'));
const MonthAssetPage = lazy(() => import('../pages/month_asset'));
const ConsumableAssetPage = lazy(() => import('../pages/consumables'));


class RoutesComponent extends React.Component {
    render() {
        return (
            <Router>
                <Suspense fallback={<SpinnerComponent spinner={true} />}>
                    <Routes>
                        <Route path="/" exact element={<DashboardPage />} />
                        <Route path="/total_asset/" exact element={<TotalAssetPage />} />
                        <Route path="/month_asset/" exact element={<MonthAssetPage />} />
                        <Route path="/consumables/" exact element={<ConsumableAssetPage />} />
                    </Routes>
                </Suspense>
            </Router>
        )
    }
}

export default RoutesComponent;