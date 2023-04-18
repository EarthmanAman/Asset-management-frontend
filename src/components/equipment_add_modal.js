import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';

import { connect } from "react-redux";

import { api_stub_get, api_stub_post } from "../api/_stub";
import SpinnerComponent from "../utils/spinner";
import { addEquipment } from '../redux/splices/addEquipmentSplice';
import { getTotals } from "../redux/splices/test";

class EquipmentAddModal extends React.Component {

    state = {
        categories: [],
        manufacturers: [],
        classifications: [],
        status: [],
        vendors: [],
        submitted: false,
        success: false,
    }
    handleClose = () => {
        return this.props.onClose();
    }
  
    onSubmit = (event) => {
        event.preventDefault();
        const category = event.target.category.value
        const manufacturer = event.target.manufacturer.value
        const classification = event.target.classification.value
        const status = event.target.status.value
        const vendor = event.target.vendor.value
        const name = event.target.name.value
        const purchase_date = event.target.p_date.value
        const quantity = event.target.quantity.value
        const price = event.target.price.value
        const equipment_id = event.target.equipment_id.value
        const serial_no = event.target.serial_no.value
        const invoice_no = event.target.invoice_no.value
        const model = event.target.model.value
        const make = event.target.make.value
        const color = event.target.color.value
        const description = event.target.description.value

        let context = {
            category:category,
            manufacturer:manufacturer,
            classification:classification,
            status:status,
            vendor:vendor,
            name:name,
            p_date:purchase_date,
            quantity:quantity,
            price:price,
            equipment_id:equipment_id,
            serial_no:serial_no,
            invoice_no:invoice_no,
            model:model,
            make:make,
            color:color,
            description:description,
        }

        this.setState({
            submitted: true
        })
        this.props.addEquipment(context) 
        // api_stub_post("/equipment/create/", context)

       

    }

    UNSAFE_componentWillReceiveProps = async (nextProps) => {
        
        if(nextProps.status.isLoading === false && parseInt(nextProps.status.status.status) === 200){
            await this.props.getTotals()
            this.setState({
                success: true
            })
        }else {
            this.setState({
                success: false
            })
        }
    }

    componentDidMount = async() => {
        let categories = await api_stub_get("/category/")
        let manufacturers = await api_stub_get("/category/man/")
        let classifications = await api_stub_get("/equipment/classification/")
        let status = await api_stub_get("/abstract/status/")
        let vendors = await api_stub_get("/vendor/")

        this.setState({
            categories: categories,
            manufacturers: manufacturers,
            classifications: classifications,
            status: status,
            vendors: vendors
        })
    }
render(){

    const {categories, manufacturers, classifications, status, vendors, success} = this.state
  return (
      <Modal show={this.props.visible} onHide={this.handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>ADD EQUIPMENT</Modal.Title>
        </Modal.Header>
        <Form onSubmit={this.onSubmit}>
        <Modal.Body>
            <div style={{position:"relative"}}>
                {this.props.status.isLoading == true ? 
                    <div className='addEquipmentSpinner'>
                        <SpinnerComponent visible={true} />
                    </div>
                : null}

                {success === true ? <div className='alert alert-success'>Uploaded successfully</div>: null}
                <Row>
                    <Col>
                        <Form.Label>Category</Form.Label>
                        <Form.Select className='mb-1' size='sm' name='category'>
                            {categories.map((category) => 
                                <option key={category.id} value={category.id}>{category.name}</option>
                            )}
                            
                           
                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Label>Manufacturer</Form.Label>
                        <Form.Select className='mb-1' size='sm' name="manufacturer">
                            {manufacturers.map((manufacturer) => 
                                <option key={manufacturer.id} value={manufacturer.id}>{manufacturer.name}</option>
                            )}
                        </Form.Select>
                    </Col>
                </Row>
                
                <Row>
                    <Col>
                        <Form.Label>Classification</Form.Label>
                        <Form.Select className='mb-1' size='sm' name='classification'>
                            {classifications.map((classification) =>
                                <option key={classification.id} value={classification.id}>{classification.name}</option>
                            )}
                            
                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Label>Status</Form.Label>

                        
                        <Form.Select className='mb-1' size='sm' name='status'>
                            
                            {status.map((stat) =>
                                <option key={stat.id} value={stat.id}>{stat.name}</option>
                            )}
                        </Form.Select>
                    </Col>
                </Row>

                <div>
                    <Form.Label>Vendor</Form.Label>
                    <Form.Select className='mb-1' size='sm' name='vendor'>
                        {vendors.map((vendor) =>
                            <option value={vendor.id} key={vendor.id}>{vendor.name}</option>
                        )}
                    </Form.Select>
                </div>

                <Row>
                    <Col>
                        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control required type="text" name='name' size='sm' />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                            <Form.Label>Purchase Date</Form.Label>
                            <Form.Control required type="date"  name='p_date' size='sm' />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control required type="number" name='quantity' size='sm' />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                            <Form.Label>Price</Form.Label>
                            <Form.Control required type="number"  name='price' size='sm' />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    
                    <Col>
                        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                            <Form.Label>Equipment ID</Form.Label>
                            <Form.Control type="text" name='equipment_id' size='sm' />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                            <Form.Label>Serial Number</Form.Label>
                            <Form.Control type="text" name='serial_no' size='sm' />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                            <Form.Label>Invoice No.</Form.Label>
                            <Form.Control type="text"  name='invoice_no' size='sm' />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                            <Form.Label>Model</Form.Label>
                            <Form.Control type="text" name='model' size='sm' />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                            <Form.Label>Make</Form.Label>
                            <Form.Control type="text" name='make' size='sm' />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                            <Form.Label>Color</Form.Label>
                            <Form.Control type="text" name='color' size='sm' />
                        </Form.Group>
                    </Col>
                </Row>

                <div>
                    <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Description" as="textarea" rows={3} name='description' size='sm' />
                    </Form.Group>
                </div>


                

            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Cancel
          </Button>
          <Button variant="primary" type='submit'>
            ADD
          </Button>
        </Modal.Footer>
        </Form>
      </Modal>

  );
}
}

const mapStateToProps = (state) => ({
    status: state.addEquipment
  });
  
  const mapDispatchToProps = { addEquipment, getTotals};
  
  export default connect(mapStateToProps, mapDispatchToProps)(EquipmentAddModal);