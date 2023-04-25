import React from "react";
import Layout from "../components/layout";
import { api_stub_get } from "../api/_stub";
import { connect } from "react-redux";
import { updateId } from "../redux/splices/addCategoryIdSplice";
import CategoryDetailTable from "../components/categoryDetailTable";

class CategoryDetailPage extends React.Component {
    state = {
        assets: null
    }
    componentDidMount = async() => {
    //   console.log(this.props.category_id)
    let id = this.props.category_id.payload != undefined ? this.props.category_id.payload : this.props.category_id
    let equipments = await api_stub_get(`/category/${id}/`)
    this.setState({
        assets:equipments
    })
    }
    render(){
        return (
            <Layout>
                <h1>Hello</h1>

                <div>
                    {this.state.assets != null ? 
                    <CategoryDetailTable purchases={this.state.assets.assets} />:null}
                </div>
            </Layout>
        )
    }
}

const mapStateToProps = (state) => ({
    category_id: state.addCategoryId.category_id
  });
  
  const mapDispatchToProps = { updateId };
  
  export default connect(mapStateToProps, mapDispatchToProps)(CategoryDetailPage);