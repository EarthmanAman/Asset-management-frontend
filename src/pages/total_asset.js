import React from "react";

import Form from 'react-bootstrap/Form';

import Layout from "../components/layout";
import { Button } from "react-bootstrap";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class TotalAsset extends React.Component {

    

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

        return (
            <Layout>
                <div className="total-asset-main">
                <div className="total-asset-top">
                    <h1>Total asset</h1>
                    <div>
                        <Form className="total-search-form">
                            <Form.Control type="text" placeholder="Search..."  size="sm" style={{marginRight:2}}/>
                            <Button variant="primary" type="submit" size="sm">Search</Button>
                        </Form>
                    </div>
                </div>

                {/* CARDS */}
                <div className="total-asset-tabs-main">
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
                </div>
                </div>
            </Layout>
        )
    }
}

export default TotalAsset;