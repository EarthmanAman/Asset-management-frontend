import React from 'react';
import Table from 'react-bootstrap/Table';

class RecentPurchase extends React.Component {
    render() {
        return (
            <Table striped>
            <thead>
                <tr>
                <th>#</th>
                <th>Name</th>
                <th>Date</th>
                <th>Manufacturer</th>
                <th>Vendor</th>
                <th>Invoice no</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                </tr>
                
            </tbody>
            </Table>
        );
    }
}

export default RecentPurchase;