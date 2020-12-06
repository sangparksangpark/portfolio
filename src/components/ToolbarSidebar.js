import React from 'react';

import Toolbar from './Navbar/Toolbar';
import Toolbar2 from './Navbar/Toolbar2'
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';

class ToolbarSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sideDrawerOpen: false,
    };
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  
  backdropClickHandler=()=>{
      this.setState({sideDrawerOpen: false})
  }
  render() {
    //let sideDrawer;
    let backdrop;
    if (this.state.sideDrawerOpen) {
      //sideDrawer = <SideDrawer />;
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <>
        <Toolbar2 drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
      </>
    );
  }
}

export default ToolbarSidebar;
