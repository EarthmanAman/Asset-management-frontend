import React from "react";

import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import Layout from "../components/layout";
import RecentPurchase from "../components/recent_purchase";

import { api_stub_get } from "../api/_stub";
import { getTotals } from "../redux/splices/test";
import { updateId } from "../redux/splices/addCategoryIdSplice";
import { addVendor } from "../redux/splices/addVendorIdSplice";
import { manufacturerDetail } from "../redux/splices/manufacturerSplice";
import SpinnerComponent from "../utils/spinner";

class Dashboard extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            "vendors":[],
            "manufacturers": [],
            "recent": [],
        }
    }

    equipmentAdd = () => {
        this.setState({
            "equipment_add": !this.state.equipment_add
        })
    }

    handleLinkClicked = (e, id) => {
        
        this.props.updateId(id)
    }

    handleVendorLinkClicked = async (e, id) => {
        
        await this.props.addVendor(id)
    }

    handleManufacturerLinkClicked = async (e, id) => {
        
        await this.props.manufacturerDetail(id)
    }
    componentDidMount = async() => {
        let vendors = await api_stub_get("/vendor/")
        let manufacturers = await api_stub_get("/category/man/")
        let recent = await api_stub_get("/consumable/recent_purchase/")

        this.props.getTotals()

        this.setState({
            "vendors": vendors,
            "manufacturers": manufacturers,
            "recent": recent,
        })
    }
    render(){
        const {vendors, manufacturers, recent} = this.state
        const totals = this.props.totals.contents
        const totalsLoading = this.props.totals.isLoading
        return (
            <Layout>

                {totalsLoading === true ? <SpinnerComponent visible={true} /> : null}
                <div className="dashboard-main">
                    <div className="dashboard-welcome">
                        <h1>Welcome, Hashim</h1>
                    </div>

                    <div className="top-cards">
                        <div className="top-card">
                            <h6>Total Assets</h6>
                            <h3>{totals !== null ? totals.eq_total[0] : 0}</h3>
                            <Link to="/total_asset/">
                                <p>View all Assets </p>
                            </Link>
                        </div>
                        <div className="top-card">
                            <h6>This Month Assets</h6>
                            <h3>{totals !== null ? totals.eq_total[1] : 0}</h3>
                            <Link to="/month_asset/">
                                <a href="">View</a>
                            </Link>
                        </div>

                        <div className="top-card">
                            <h6>Consumables</h6>
                            <h3>{totals !== null ? totals.consumable_total : 0}</h3>
                            <Link to="/consumables/">
                                <a href="">View all Consumables</a>
                            </Link>
                        </div>

                        <div className="top-card">
                            <h6>Vendors</h6>
                            <h3>{totals !== null ? totals.vendors_total : 0}</h3>
                            <a href="">View all suppliers</a>
                        </div>

                        <div className="top-card">
                            <h6>Employees</h6>
                            <h3>{totals !== null ? totals.employee_total : 0}</h3>
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
                                    {totals != null ? 
                                        totals.categories.map((category) => 
                                        <div className="dashboard_cat_card">

                                            <div className="dashboard_cat_card__total">
                                                <p>{category.total}</p>
                                            </div>
                                            <div className="dashboard_cat_card__image">
                                                <img src={category.image} alt="laptop"/>
                                            </div>
                                            <h6>{category.name}</h6>
                                            <Link to={`/category/`} onClick={(e)=>this.handleLinkClicked(e, category.id)}>View</Link>
                                        </div>
                                        )
                                    :
                                    <p>No categories</p>
                                    }
                                    
                                
                                </div>
                            </div>

                            {/* VENDORS */}
                            <div className="dashboard-ven">
                                <h5>Vendors</h5>
                                <div className="dashboard-ven-cards">
                                    {vendors.map((vendor) => 
                                        <div key={vendor.id} className="dashboard-ven-card">
                                            <div className="dashboard-ven-card__image">
                                                <img src={vendor.image} alt="vendor" />
                                            </div>
                                            <div>
                                                <h6>{vendor.name}</h6>
                                                <p>Total : <span>{vendor.total}</span></p>
                                            </div>
                                            <div>
                                                <Link to={"/vendor/"} onClick={(e) => this.handleVendorLinkClicked(e, vendor.id)}>
                                                    View
                                                </Link>
                                            </div>
                                            
                                        </div>

                                    )}
                                    

                                </div>
                            </div>
                        </div>
                        {/* RIGHT - MANUFACTURERS */}
                        <div className="dashboard-man">
                            <h5>Manufacturers</h5>
                            {manufacturers.map((manufacturer) => 
                                <div key={manufacturer.id} className="dashboard-man-card">
                                    <div className="dashboard-man-card__image">
                                        <img src={manufacturer.image} alt="manufacturer" />
                                    </div>
                                    <div>
                                        <h6>{manufacturer.name}</h6>
                                        <p>Total : <span>{manufacturer.total}</span></p>
                                    </div>

                                    <div>
                                        <Link to={`/manufacturer/`} onClick={(e)=>this.handleManufacturerLinkClicked(e, manufacturer.id)}>View</Link>
                                    </div>
                                    
                                </div>
                            )}
                            

                           
                        </div>
                    </div>


                    <div>
                        <h5>Recent Purchase</h5>


                        <div>
                            <RecentPurchase purchases={recent}/>
                        </div>
                    </div>
                </div>

            </Layout>
        )
    }
}

const mapStateToProps = (state) => ({
    totals: state.totals
  });
  
  const mapDispatchToProps = { getTotals, updateId, addVendor, manufacturerDetail};
  
  export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);