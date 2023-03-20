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
                        <h3>Kshs, 5245602.00</h3>
                        <a href="">View all Assets</a>
                    </div>
                    <div className="top-card">
                        <h6>Total Assets</h6>
                        <h3>Kshs, 5245602.00</h3>
                        <a href="">View all Assets</a>
                    </div>
                    
                </div>
                </div>
            </Layout>
        )
    }
}

export default Dashboard;