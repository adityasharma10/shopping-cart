import React, {Component} from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './dist/style.css';
import NavItem from './NavItem';
import NavSubItem from './NavSubItem';
import NavItemGroup from './NavItemGroup';
import { handleDrawerToggleChange } from '../../../actions';

class Drawer extends Component{
    componentDidMount() {
        const slidedrop = document.querySelectorAll(".drawer-navmenu");
        for (const slideitem of slidedrop) {
          const items = slideitem.querySelectorAll(".drawer-item");
          for (const item of items) {
            const head = item.querySelector(".drawer-link");
            head.addEventListener('click', () => {
              for (const otherPanel of items) {
                if (otherPanel !== item) {
                  otherPanel.classList.remove('open');
                }
              }
              item.classList.toggle('open');
            });
          }
        }
    }
    handleDrawerToggle(e){
        this.props.dispatch(handleDrawerToggleChange(!this.props.toggleStatus));
      }
    render(){
        return(
            <aside className={this.props.toggleStatus ? "drawer-wrapper" : "drawer-wrapper closed"}>
                <nav className="drawer-navigation">
                    <span className="navgroup-title">Main </span>
                    <ul className="drawer-navmenu">
                        <NavItem navMenuTitle="Get Data" navMenuImage={'account.svg'} navMenuIcon={""} navURL="/form/GetData"/>
                        
                        <NavItem navMenuTitle="Add Data" navMenuImage={'analytics.svg'} navMenuIcon={""} navURL="/form/AddData"></NavItem>
                        <Link to="" navURL="/form/PutData" ></Link>
                        <NavItem navMenuTitle="Basic Form" navMenuImage={'account.svg'} navMenuIcon={""} navURL="/form/BasicInfoForm"/>
                        <NavItem navMenuTitle="Employee Form" navMenuImage={'analytics.svg'} navMenuIcon={""} navURL="/form/EmployeeForm"></NavItem>
                        <NavItemGroup navMenuTitle="Crud Ops" navMenuImage={'alert.svg'} navURL="#" hasSubmenuClass="nav-dropdown-menu" >
                            <NavSubItem navSubMenuTitle="Add" navSubMenuUrl="/dashboard"/>
                            <NavSubItem navSubMenuTitle="Delete" navSubMenuUrl="#"/>
                            <NavSubItem navSubMenuTitle="update" navSubMenuUrl="#"/>
                            </NavItemGroup>
                        {/*<NavItem navMenuTitle="Dashbaord 3" navMenuImage={'dashboard.svg'} navMenuIcon={''} navURL="#"/>
                        <NavItem navMenuTitle="Dashbaord 4" navMenuImage={'project.svg'} navMenuIcon={''} navURL="#"/>
                        <NavItemGroup navMenuTitle="Dashbaord 5" navMenuImage={'alert.svg'} navURL="#" hasSubmenuClass="nav-dropdown-menu" >
                            <NavSubItem navSubMenuTitle="Sub Item 1" navSubMenuUrl="/dashboard"/>
                            <NavSubItem navSubMenuTitle="Sub Item 2" navSubMenuUrl="#"/>
                            <NavSubItem navSubMenuTitle="Sub Item 3" navSubMenuUrl="#"/>
                            <NavSubItem navSubMenuTitle="Sub Item 4" navSubMenuUrl="#"/>
                        </NavItemGroup>
                        <NavItemGroup navMenuTitle="Dashbaord 6" navMenuImage={'alert.svg'} navURL="#" hasSubmenuClass="nav-dropdown-menu" >
                            <NavSubItem navSubMenuTitle="Sub Item 1" navSubMenuUrl="/dashboard"/>
                            <NavSubItem navSubMenuTitle="Sub Item 2" navSubMenuUrl="#"/>
                            <NavSubItem navSubMenuTitle="Sub Item 3" navSubMenuUrl="#"/>
                            <NavSubItem navSubMenuTitle="Sub Item 4" navSubMenuUrl="#"/>
                        </NavItemGroup> */}
                    </ul>
                </nav>
            </aside>
        )
    }
}

function mapStateToProps(state) {
    const {toggleStatus} = state.appReducer;
    // const {data} = state.getDataReducer;
    return {toggleStatus}
}
export default withRouter(connect(mapStateToProps)(Drawer));
