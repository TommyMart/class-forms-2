import React from "react";
import ReadonlyPost from "./ReadonlyPost";
import EditablePost from "./EditablePost";

export default class SocialMediaPostContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            isEditing: false,
            author: "",
            dateCreated: Date.now(),
            lastUpdated: Date.now(),
            location: "",
            content: ""
        }
    }

    // Changes isEditing boolean value
    toggleEditMode = () => {
        this.setState({isEditing: !this.state.isEditing});
    }

    render(){

        // If in isEditing mode
        if (this.state.isEditing){
            return(

            <>
                {/* Toggle the isEditing boolean
                Calls toggleEditMode function when clicked */}
                <button onClick = {this.toggleEditMode}>
                    Toggle Edit Mode
                </button>
                <EditablePost 
                    author={this.state.author}
                    dateCreated={this.state.dateCreated}
                    lastUpdated={this.state.lastUpdated}
                    location={this.state.location} 
                    content={this.state.content}
                />
            </>
            )
        } else {
            return(

                <>
                    {/* Toggle the isEditing boolean
                    Calls toggleEditMode function when clicked */}
                    <button onClick = {this.toggleEditMode}>
                        Toggle Edit Mode
                    </button>
                    <ReadonlyPost 
                        author={this.state.author}
                        dateCreated={this.state.dateCreated}
                        lastUpdated={this.state.lastUpdated}
                        location={this.state.location} 
                        content={this.state.content}
                    />

                </>
            )
        }
    }
}