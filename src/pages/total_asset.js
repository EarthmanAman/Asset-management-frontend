import React from "react";

import Form from 'react-bootstrap/Form';

import Layout from "../components/layout";
import { Button } from "react-bootstrap";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TotalAssetTable from "../components/total_asset_table";

import { api_stub_get } from "../api/_stub";


class TotalAsset extends React.Component {
    state = {
        "totals": [],
        "search": null,
        "search_value": null
    }

    onSearch = (text) => {
        const {totals} = this.state
        const t = text.target.value.toLowerCase()
        let searches = totals.filter(x => 
            x.name.toLowerCase().includes(t) ||
            x.manufacturer.toLowerCase().includes(t)
            )
        console.log(searches)
        this.setState({
            "search":searches,
        })
    }

    
    componentDidMount = async() => {
        let totals = await api_stub_get("/consumable/total_asset/")
        
        this.setState({
            "totals":totals,
            "search": null
        })
    }

    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 5000,
            slidesToShow: 5,
            slidesToScroll: 4,
            autoplay: true,
            autoplaySpeed: 5000,
          };
        
        const {totals, search} = this.state
        
        return (
            <Layout>
                <div className="total-asset-main">
                <div className="total-asset-top">
                    <h1>Total asset</h1>
                    <div>
                        <Form className="total-search-form">
                            <Form.Control type="text" placeholder="Search..."  size="sm" style={{marginRight:2}} onChange={(text) => this.onSearch(text)}/>
                            <Button variant="primary" type="submit" size="sm" >Search</Button>
                        </Form>
                    </div>
                </div>

                {/* CARDS */}
                {/* <div className="total-asset-tabs-main">
                    <h5>Categories</h5>
                    
                    <Slider {...settings} className="total-asset-tabs">
                        <div className="total-asset-tab">
                            <img src={require("../assets/odc.jpeg")} alt="category" />
                            <div className="total-asset-tab__content">
                                <h6>Category 1</h6>
                                <p>10</p>
                            </div>
                        </div>
                    </Slider>
                </div> */}
                <TotalAssetTable purchases={search != null ? search :totals}/>

                </div>
            </Layout>
        )
    }
}

export default TotalAsset;