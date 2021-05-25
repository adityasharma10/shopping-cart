import React, { Component } from 'react';
import { Route, Switch, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import {ProtectedRoute} from '../../routes/ProtectedRoute'
import AddData from '../../components/Form/AddData';
import ListData from '../../components/Form/ListData';
import EditData from '../../components/Form/EditData';
class FormIndex extends Component {
    render() {
        return (
                <div className="dashboard-content-container">
                    <Switch>
                        <Route exact path="/form" component={ListData} />
                        <Route path="/form/ListData" component={ListData} />
                        <ProtectedRoute path='/form/AddData' component={AddData}/>
                        <Route path="/form/EditData/:id" render = {props => (<EditData {...props} />)}></Route>
                    </Switch>
                </div>
        )
    }
}
function mapStateToProps(state) {
    const {toggleStatus} = state.appReducer;
    const {auth} = state.LoginReducer;
    const { data } = state.ImageReducer;
    return {toggleStatus,auth, data}
}

export default withRouter(connect(mapStateToProps)(FormIndex));