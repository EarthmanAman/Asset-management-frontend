import React from "react";
import EquipmentAddModal from "./equipment_add_modal";

class TopBar extends React.Component {
    state = {
        "equipment_add": false
    }

    handleClose = () => {
        this.setState({
            equipment_add: !this.state.equipment_add
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
                        <button className="btn btn-primary btn-sm">Consumable +</button>
                        <button className="btn btn-primary btn-sm">Vendor +</button>
                    
                </div>

                <EquipmentAddModal visible={this.state.equipment_add} onClose={this.handleClose} />
            </div>
        )
    }
}

export default TopBar;