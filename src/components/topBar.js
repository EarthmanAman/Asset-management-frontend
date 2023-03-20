import React from "react";

class TopBar extends React.Component {
    render(){
        return (
            <div className="top-bar-main">
                <div className="top-bar-main__left">
                    <h6>Dashboard</h6>
                </div>
                <div className="top-bar-main__right">
                    <h6>Hashim</h6>
                </div>
            </div>
        )
    }
}

export default TopBar;