import React, { Component } from 'react';
import NewBoxForm from './NewBoxForm'
import Box from './Box';
import uuid from 'uuid/v4';


class BoxList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            boxes: []
        }
        this.addNewBox = this.addNewBox.bind(this);
        this.remove = this.remove.bind(this);
    }

    addNewBox(newBox) {
        let box = {...newBox, id: uuid()}
        this.setState(st => ({
                boxes: [...st.boxes, box]
        }))
    }

    remove(id) {
        console.log('remove is running', id)
        this.setState(st => ({ boxes: 
                            st.boxes.filter(b => b.id!==id)}))
    }

    render() {
        let boxes = this.state.boxes.map(b=><Box key = {b.id}
                                                width={b.width} 
                                                height={b.height}  
                                                backgroundColor={b.backgroundColor}
                                                triggerRemove={() => this.remove(b.id)} />)
        return(
            <div className="BoxList">
                <NewBoxForm triggerAddNewBox={this.addNewBox} />
                {boxes}
            </div>
        )
    }
}

export default BoxList