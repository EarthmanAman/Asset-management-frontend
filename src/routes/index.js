import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SpinnerComponent from "../utils/spinner";

const DashboardPage = lazy(() => import('../pages/dashboard'));
const TotalAssetPage = lazy(() => import('../pages/total_asset'));
const MonthAssetPage = lazy(() => import('../pages/month_asset'));
const ConsumableAssetPage = lazy(() => import('../pages/consumables'));
const CategoryAssetPage = lazy(() => import('../pages/category'));
const VendorAssetPage = lazy(() => import('../pages/vendor'));
const ManufacturerAssetPage = lazy(() => import('../pages/manufacturer'));


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
                        <Route path="/category/" exact element={<CategoryAssetPage />} />
                        <Route path="/vendor/" exact element={<VendorAssetPage />} />
                        <Route path="/manufacturer/" exact element={<ManufacturerAssetPage />} />
                    </Routes>
                </Suspense>
            </Router>
        )
    }
}

export default RoutesComponent;