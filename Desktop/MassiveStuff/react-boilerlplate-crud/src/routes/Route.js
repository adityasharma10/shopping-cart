import React, { Component } from 'react';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/app/header/header';
import Drawer from '../components/app/drawer/Index';
// import DemoContainer from '../container/demo';
import {store} from '../index'
import FormIndex from '../container/form/index';
//import demoComponent from '../container/demo'
import {ProtectedRoute} from './ProtectedRoute';
import Auto from '../components/autoComplete/Auto';
import ListData from '../components/Form/ListData';
/**
 * This function checks wheather the user is logged in or logged out.
 * isAuthenticated === true - logged in
 * isAuthenticated === false - logged out
 * 
 * we can change it, but its name needs to be the same and
 *  it needs to return a true or false resemblance values
 */
export function checkAuth() {
    const {auth} = store.getState().LoginReducer;
    const {isAuthenticated} = auth;
    return isAuthenticated
}

class RouteComponent extends Component {
    render() {
        return (
                <div className="dashboard-wrappper">
                    <Header />
                    <Drawer/>
                    <div className={this.props.toggleStatus ? "dashboard-content-body" : "dashboard-content-body closed"}>
                        <main className="main-content-wrapper">
                            <Switch>
                                {/* <Route exact path="/demo" component={demoComponent} /> */}
                                <Route path="/form" component={FormIndex} />
                                <Route exaxct path="/form/GetData" component={ListData} />
                                <Route exaxct path="/" component={Auto} />
                            </Switch>
                        </main>
                    </div>
                </div>
        )
    }
}
function mapStateToProps(state) {
    const {toggleStatus} = state.appReducer;
    const {auth} = state.LoginReducer;
    return {toggleStatus,auth}
}

export default withRouter(connect(mapStateToProps)(RouteComponent));