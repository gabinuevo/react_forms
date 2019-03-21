import React, { Component } from 'react';

/**
 *  render a form that when submitted, creates a new Box. 
 *  props: {triggerAddNewBox() }
 *  input: {
 *          background color, 
 *          width 
 *          height 
 *            }
 *  When the form is submitted, clear the input values.
 */

class NewBoxForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            height: '',
            width: '',
            backgroundColor: ''
            };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    } 

    handleChange(evt) {
        this.setState(
            { [evt.target.name]: evt.target.value}
        )
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.triggerAddNewBox(this.state);
        this.setState({
            height: '',
            width: '',
            backgroundColor: ''
            });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                
                <label htmlFor="height"> Height: </label>
                <input id="height" name="height" value={this.state.height} onChange={this.handleChange}/>

                <label htmlFor="width"> Width: </label>
                <input id="width" name="width" value={this.state.width} onChange={this.handleChange}/>
                
                <label htmlFor="backgroundColor"> Background Color: </label>
                <input id="backgroundColor" name="backgroundColor" value={this.state.backgroundColor} onChange={this.handleChange}/>

                <button>  Add New Box!  </button>
            </form>
        );
    }
}

export default NewBoxForm;