import React, { Component } from 'react';

/**
 *  render a form that when submitted, creates a new Box. 
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
        this.handleChange = this.handleChange.bing(this);
        this.handleSubmit = this.handleSubmit.bing(this);
    } 

    handleChange() {

    }

    handleSubmit() {

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                
                <label for="width"> Width: </label>
                <input name="width" value={this.state.width} onChange={this.handleChange}/>
                
                <label for="height"> Height: </label>
                <input name="height" value={this.state.height} onChange={this.handleChange}/>
                
                <label for="backgroundColor"> Background Color: </label>
                <input name="backgroundColor" value={this.state.backgroundColor} onChange={this.handleChange}/>

                <button>  Add New Box!  </button>
            </form>
        );
    }
}

export default NewBoxForm;