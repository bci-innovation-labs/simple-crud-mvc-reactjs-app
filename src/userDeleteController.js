import React, { Component } from "react";
import UserDAO from "./models/userDAO";


export default class UserDeleteController extends Component {
    constructor(props) {
        super(props);

        const userSlug = "ccc-ddd-o2pa_uz6";
        const dao = new UserDAO();
        const userObj = dao.getObjectBySlug(userSlug);

        this.state = {
            slug: userObj.slug,
            dao: dao,
            userObj: userObj
        }
        this.onClick = this.onClick.bind(this);
    }

    onClick(event){
        event.preventDefault();

        this.state.dao.permanentlyDeleteObjectBySlug(this.state.slug)

        alert("The user was deleted!");
    }

    render() { // The "View" is ALWAYS inside the "render()" function.
        const { onClick } = this;
        return (
            <div>
                <UserDeleteView
                    onClick={onClick}
                />
            </div>
        );
    }
}


function UserDeleteView(props) {
    const { onClick } = props;
    return (
        <div>
           <h1>Delete</h1>
           <p>Are you sure you want to permanently delete this user?</p>
           <button onClick={ (event)=>onClick(event) }>Delete</button>
        </div>
    );
}
