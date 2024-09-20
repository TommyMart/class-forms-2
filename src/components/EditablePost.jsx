import React from "react";

export default class EditablePost extends React.Component {
    constructor(props){
        super(props);


        // We want to edit the data so must use state
        this.state = {
            author: props.author,
            location: props.location,
            content: props.content

        }
    }

    // Takes in value from input field, sets value to state
    handleAuthorChange = (event) => {
                                // author input field
        this.setState({author: event.target.value});
    }

    handleContentChange = (event) => {
                                // content input field
        this.setState({content: event.target.value});
    }

    handleLocationChange = (event) => {
                              // location input field
        this.setState({location: event.target.value});
        }


    render(){
        return(
            <div className="editablePostContainer">
                {/* Editable author field */}
                <label htmlFor="authorField">Author:</label>
                {/* Change values (value) to match the state */}
                <input 
                    type="text" 
                    name="authorField" 
                    id="authorField" 
                    value={this.state.author}
                    onChange={this.handleAuthorChange}
                />
                {/* Editable location field */}
                <label htmlFor="locationField">Location:</label>
                <input 
                    type="text" 
                    name="locationField" 
                    id="locationField" 
                    value={this.state.location} 
                    onChange={this.handleLocationChange}/>
                {/* Editable content field */}
                <label htmlFor="contentField">Post Content:</label>
                <input 
                    type="text" n
                    ame="contentField" 
                    id="contentField"  
                    value={this.state.content}
                    onChange={this.handleContentChange} 
                    />
                
                <button onClick={() => {
                    // Passing data from child to parent as arguments to a 
                    // function that lives in parent (updateData)
                    this.props.updateData(this.state.author, this.state.location, this.state.content)}}>
                    Submit Data
                </button>

            </div>
        )
    }
}