import React from "react";
import Layout from "../components/layout";
import { api_stub_get } from "../api/_stub";
import { connect } from "react-redux";

import CategoryDetailTable from "../components/categoryDetailTable";

class ManufacturerDetailPage extends React.Component {
    state = {
        assets: null
    }
  
    render(){
       
        const assets = this.props.manufacturer.manufacturer
        // console.log(assets)
        return (
            <Layout>
                

                <div>
                    {assets != null && assets != new Object? 
                    <div>
                        <h1>{assets.name}</h1>
                        <CategoryDetailTable purchases={assets.assets} />
                    </div>
                    :null}
                </div>
            </Layout>
        )
    }
}

const mapStateToProps = (state) => ({
    manufacturer: state.manufacturer
  });
  
  const mapDispatchToProps = { };
  
  export default connect(mapStateToProps, mapDispatchToProps)(ManufacturerDetailPage);