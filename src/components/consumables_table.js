import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import Table from 'react-bootstrap/Table';

class ConsumableTable extends React.Component {
    render() {
        const {purchases} = this.props
        let idx = 1
        return (
            <Table striped size='sm'>
            <thead>
                <tr>
                <th>#</th>
                <th>Name</th>
                <th>Date</th>
                <th>Category</th>
                <th>Manufacturer</th>
                <th>Vendor</th>
                <th>Invoice no</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>View</th>
                </tr>
            </thead>
            <tbody>

                {purchases.map((purchase) => 
                    <tr key={purchase.id}>
                        <td>{idx++}</td>
                        <td>{purchase.name}</td>
                        <td>{purchase.p_date}</td>
                        <td>{purchase.category_manufacturer.category.name}</td>
                        <td>{purchase.category_manufacturer.manufacturer.name}</td>
                        <td>{purchase.vendor.name}</td>
                        <td>{purchase.invoice_no}</td>
                        <td>{purchase.quantity}</td>
                        <td>{purchase.price}</td> 
                        <td>{parseFloat(purchase.quantity * parseFloat(purchase.price)).toFixed(2)}</td>
                        <td>
                            <a href=''>View</a>
                        </td>
                    </tr>
                )}
                
                
                
            </tbody>
            </Table>
        );
    }
}

export default ConsumableTable;