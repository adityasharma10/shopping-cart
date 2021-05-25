import React, { Component } from 'react';
import { postData } from '../../actions/imageActions';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import './dist/style.css'

class AddData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formControls: {
                title: {
                    value: '',
                    placeholder: 'Add ',
                    touched: false
                },
                image: {
                    value: '',
                    placeholder: 'Add ',
                    touched: false
                }
            }
        }
    }

    formSubmitHandler = (e) => {

        e.preventDefault()

        this.props.dispatch(postData(this.props.data));
        console.log(this.props.data,'data');
        alert("Image has been added successfully")

        const invalidElmsInput = document.querySelectorAll(".form-group input:invalid");
        for (let i = 0; i < invalidElmsInput.length; i++) {
            invalidElmsInput[i].parentElement.classList.add("has-error")
        }

    }

    onTitleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        if (e.target.checkValidity()) {
            e.target.parentElement.classList.remove('has-error');
        } else {
            e.target.parentElement.classList.add('has-error');
        }
        const updatedControls = {
            ...this.state.formControls
        };
        const updatedFormElement = {
            ...this.state.formControls[name]
        };
        updatedFormElement.value = value.replace(/  +/g, ' ');

        updatedControls[name] = updatedFormElement;
        this.setState({
            formControls: updatedControls,
        });
    }

    onImageChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        if (e.target.checkValidity()) {
            e.target.parentElement.classList.remove('has-error');
        } else {
            e.target.parentElement.classList.add('has-error');
        }
        const updatedControls = {
            ...this.state.formControls
        };
        const updatedFormElement = {
            ...this.state.formControls[name]
        };
        updatedFormElement.value = value.replace(/  +/g, ' ');

        updatedControls[name] = updatedFormElement;
        this.setState({
            formControls: updatedControls,
        });
    }

    render() {
        return (

            <div className="dashboard-content-container">
                <h2 data-testid="heading">Add New Image</h2>
                <div className="row">

                    <div className="col-sm-8">

                        <form onSubmit={this.formSubmitHandler.bind(this)} noValidate={true}>
                            <div className="form-div">

                                <div className="row">
                                    <div className="col-sm-8">
                                        <div className="form-group">
                                            <label>Title<span className="req">*</span></label>
                                            <input name="title"
                                                data-testid="title"
                                                className="form-ctrl"
                                                type="text"
                                                required={true}
                                                minLength={3}
                                                maxLength={40}
                                                placeholder={this.state.formControls.title.placeholder}
                                                value={this.state.formControls.title.value}
                                                onChange={this.onTitleChange.bind(this)}
                                            />
                                            <p className="error">
                                                Only Alphabets are accepted.
                                                (Min 3 characters required)
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 col-md-4">
                                        <div className="form-group">
                                            <label>Image URL<span className="req">*</span></label>
                                            <input name="image" type="text"
                                                data-testid="image"
                                                required={true}
                                                minLength={3}
                                                maxLength={40}
                                                className="form-ctrl"
                                                placeholder={this.state.formControls.image.placeholder}
                                                value={this.state.formControls.image.value}
                                                onChange={this.onImageChange.bind(this)}
                                            />
                                            <p className="error">
                                                Please enter a valid URL
                                        </p>
                                        </div>


                                    </div>

                                </div>
                            </div>
                            <div className="form-group">
                                <button type="submit" data-testid="button" className="btn mt-30">  Add Data </button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}

function mapStateToProps(state) {
    console.log('state : ', state);
    const { data } = state.ImageReducer;
    return { data }

}

export default withRouter(connect(mapStateToProps)(AddData));
