import React from 'react';
import { Link } from 'react-router-dom';
import { Sidebar, Menu, MenuItem} from 'react-pro-sidebar';
import TopBar from './topBar';


class Layout extends React.Component {
  

  render() {

    return (
        <div style={{ display: 'flex', minHeight:700}}>
          <Sidebar>
            
            <Menu style={{padding:"1%", position:"relative"}}>
                {/* <div style={{position:"absolute", right:0, top:5}}>
                    <button onClick={() => collapseSidebar()}>
                        <BiCollapseHorizontal size={20} color='blue' />
                    </button>
                    
                </div> */}
                <div style={{display:"flex", justifyContent:"center", marginTop:'15%', marginBottom: '8%'}}>
                    <img src={require("../assets/mbtl.png")} style={{width:"80%", height:'auto'}}/>
                </div>
              <MenuItem component={<Link to="/" />}>IT</MenuItem>
              {/* <MenuItem> Calendar</MenuItem>
              <MenuItem> E-commerce</MenuItem> */}
            </Menu>
          </Sidebar>
          <main style={{width:"100%", marginLeft:5, marginRight:5}}>
            {/* <button onClick={() => collapseSidebar()}>Collapse</button> */}
            <TopBar />
            {this.props.children}
          </main>
        </div>
      );
    }
}
  


export default Layout;