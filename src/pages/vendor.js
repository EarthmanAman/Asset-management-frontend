import React from "react";
import Layout from "../components/layout";
import { api_stub_get } from "../api/_stub";
import { connect } from "react-redux";
import { updateVendorId } from "../redux/splices/addVendorIdSplice";
import VendorDetailTable from "../components/vendorDetailTable";

class VendorDetailPage extends React.Component {
    state = {
        assets: null
    }
    componentDidMount = async() => {
      console.log(this.props.vendor_id)
        let equipments = await api_stub_get(`/vendor/${this.props.vendor_id.payload}/`)
        this.setState({
            assets:equipments
        })
    }
    render(){
       
        const {assets} = this.state
        return (
            <Layout>
                

                <div>
                    {assets != null ? 
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
    vendor_id: state.addVendorId.vendor_id
  });
  
  const mapDispatchToProps = { updateVendorId };
  
  export default connect(mapStateToProps, mapDispatchToProps)(VendorDetailPage);