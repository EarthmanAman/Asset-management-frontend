import React from "react";
import Layout from "../components/layout";
import { api_stub_get } from "../api/_stub";
import { connect } from "react-redux";
import { addVendor } from "../redux/splices/addVendorIdSplice";
import VendorDetailTable from "../components/vendorDetailTable";

class VendorDetailPage extends React.Component {
    state = {
        assets: null
    }
    componentDidMount = async() => {
        this.setState({
            assets:this.props.vendor.vendor
        })
    }
    render(){
       
        const {assets} = this.state
        console.log(assets)
        return (
            <Layout>
                

                <div>
                    {assets != null && assets != new Object? 
                    <div>
                        <h1>{assets.name}</h1>
                        <VendorDetailTable purchases={assets.assets} />
                    </div>
                    :null}
                </div>
            </Layout>
        )
    }
}

const mapStateToProps = (state) => ({
    vendor: state.addVendor
  });
  
  const mapDispatchToProps = { addVendor };
  
  export default connect(mapStateToProps, mapDispatchToProps)(VendorDetailPage);