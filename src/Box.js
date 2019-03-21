import React, { Component } from 'react';


/**component displays div w/: 
 * props: {
 *      background color, 
 *      width 
 *      height 
 * }
 */
class Box extends Component {
    render() {
        let style = {
        height: this.props.height,
        width: this.props.width,
        backgroundColor: this.props.backgroundColor
        }
        return (<div className = "Box">
                    <div style = {style}></div>
                    <button onClick={this.props.triggerRemove}>X</button>
                </div>)
    }
}

export default Box