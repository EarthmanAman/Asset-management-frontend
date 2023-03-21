import React from "react";
import Layout from "../components/layout";

class Dashboard extends React.Component {

    render(){
        return (
            <Layout>
                <div className="dashboard-main">
                    <div className="dashboard-welcome">
                        <h1>Welcome, Hashim</h1>
                    </div>

                    <div className="top-cards">
                        <div className="top-card">
                            <h6>Total Assets</h6>
                            <h3>102</h3>
                            <a href="">View all Assets  </a>
                        </div>
                        <div className="top-card">
                            <h6>This Month Assets</h6>
                            <h3>20</h3>
                            <a href="">View This Month Assets</a>
                        </div>

                        <div className="top-card">
                            <h6>Consumables</h6>
                            <h3>15</h3>
                            <a href="">View all Consumables</a>
                        </div>

                        <div className="top-card">
                            <h6>Supplier</h6>
                            <h3>17</h3>
                            <a href="">View all suppliers</a>
                        </div>

                        <div className="top-card">
                            <h6>Employees</h6>
                            <h3>30</h3>
                            <a href="">View all Employees</a>
                        </div>
                        
                    </div>

                    <div className="dashboard-middle">

                        {/* Left */}
                        <div className="dashboard-cat-ven">
                            {/* CATEGORIES */}
                            <div className="dashboard-cat">
                                <h5>Categories</h5>
                                <div className="dashboard_cat_cards">
                                    <div className="dashboard_cat_card">

                                        <div className="dashboard_cat_card__total">
                                            <p>15</p>
                                        </div>
                                        <div className="dashboard_cat_card__image">
                                            <img src="https://cdn.pixabay.com/photo/2012/04/24/23/17/laptop-41070_960_720.png" alt="laptop"/>
                                        </div>
                                        <h6>Laptops</h6>
                                        <a href="">View</a>
                                    </div>
                                    <div className="dashboard_cat_card">
                                        <h6>Printers</h6>
                                    </div>

                                    <div className="dashboard_cat_card">
                                        <h6>Printers</h6>
                                    </div>

                                    <div className="dashboard_cat_card">
                                        <h6>Printers</h6>
                                    </div>
                                </div>
                            </div>

                            {/* VENDORS */}
                            <div className="dashboard-ven">
                                <h5>Vendors</h5>
                                <div className="dashboard_ven_cards">
                                    <div className="dashboard_ven_card">
                                        <h6>ODC</h6>
                                    </div>
                                    <div className="dashboard_ven_card">
                                        <h6>CIT</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* RIGHT - MANUFACTURERS */}
                        <div className="dashboard-man">
                            <h5>Manufacturers</h5>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Dashboard;