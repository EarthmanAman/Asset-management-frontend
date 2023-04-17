import React from "react";
import EquipmentAddModal from "./equipment_add_modal";
import ConsumableAddModal from "./consumable_add_modal";

class TopBar extends React.Component {
    state = {
        "equipment_add": false,
        "consumable_add": false,
    }

    handleClose = () => {
        this.setState({
            equipment_add: !this.state.equipment_add
        })
    }

    handleConsumableClose = () => {
        this.setState({
            consumable_add: !this.state.consumable_add
        })
    }
    render(){
        return (
            <div className="top-bar-main">
                <div className="top-bar-main__left">
                    <h6>Dashboard</h6>
                </div>
                <div className="top-bar-main__right">
                    
                        <button className="btn btn-primary btn-sm" onClick={() => this.setState({equipment_add:true})}>Equipment +</button>
                        <button className="btn btn-primary btn-sm" onClick={() => this.setState({consumable_add:true})}>Consumable +</button>
                        {/* <button className="btn btn-primary btn-sm">Vendor +</button> */}
                    
                </div>

                <EquipmentAddModal visible={this.state.equipment_add} onClose={this.handleClose} />
                <ConsumableAddModal visible={this.state.consumable_add} onClose={this.handleConsumableClose} />
            </div>
        )
    }
}

export default TopBar;