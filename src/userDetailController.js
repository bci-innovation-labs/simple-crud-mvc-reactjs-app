import React, { Component } from "react";
import UserDAO from "./models/userDAO";


export default class UserDetailController extends Component {
    constructor(props) {
        super(props);

        const dao = new UserDAO();
        const slug = "john-smith-yFtynVaU";
        const userObj = dao.getObjectBySlug(slug);
        this.state = {
            userObj: userObj,
        };
    }

    render() {
        const { userObj } = this.state;
        return(
            <div>
                <UserDetailView userObj={userObj} />
            </div>
        );
    }
}


function UserDetailView(props) {
    const { slug, firstName, lastName, email } = props.userObj;
    return (
        <div key={slug}>
           <h1>Retrieve</h1>
           <p>Full Name: {firstName} {lastName}</p>
           <p>Email: {email}</p>
        </div>
    );
}
