import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import { getData, deleteData } from '../../actions/imageActions';
import {withRouter} from 'react-router-dom';
import { Link } from 'react-router-dom'
import { showLoader, hideLoader } from '../../actions/imageActions'
import './dist/style.css'
import PageLoader from '../app/loader/pageLoader';

class ListData extends Component{

    componentDidMount(){
        console.log('fetch')
        this.props.dispatch(getData());
        this.props.showLoader(); 

    }

    deleteInfo( index) {   
        this.props.deleteData(index);         
    }


    render(){
        const { formPageLoading } = this.props;
        return(
            <div className="dashboard-content-container">
                <h2 data-testid="heading">Welcome-to-gallery</h2>

                
                <Fragment>
                    <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Image URL</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { ( this.props.data.length > 0  ) ?
                         (this.props.data.map((item, i) =>(
                           <tr key={i}>
                               <td>{item.id}</td>
                               <td>{item.title}</td>
                               <td>{item.url}</td>
                               <td>
                                <Link to={"/form/PutData/" + item.id} >Edit </Link>
                                <Link to="" data-testid="button" onClick={(item)=>this.deleteInfo(item.id)} className="delete">Delete</Link>
                               </td>
                           </tr> )))
                        :<p>No data</p>
                        }
                    </tbody>
                    </table>
                </Fragment>
        
               
            </div>
            )
        }
}
    
    
function mapStateToProps(state){
    const {data, formPageLoading} = state.ImageReducer;
    return{data, formPageLoading}

}

const mapDispatchToProps = (dispatch) => {
    return {
        getData: get =>dispatch(getData(get)),
        deleteData: index =>dispatch(deleteData(index)),
        showLoader: show =>dispatch(showLoader(show)),
        hideLoader: hide =>dispatch(hideLoader(hide))
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListData));